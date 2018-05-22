import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getStatements,
    updatePortCalls,
    selectPortCall,
    toggleFavoritePortCall,
    toggleFavoriteVessel,
    appendPortCalls,
    bufferPortCalls,
    setError,
} from '../../actions';

import {
    RefreshControl,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    Alert,
    ActivityIndicator,
    Platform,
} from 'react-native';

import {
    Text,
    Avatar, //vet inte om denna behövs
    Icon,
    List,
    ListItem,
    SearchBar,
    Button,
    Slider,
} from 'react-native-elements';

import colorScheme from '../../config/colors';
import { getDateTimeString } from '../../util/timeservices';

class RequestView extends Component {
    state = {
        searchTerm: '',
        refreshing: false,
        numLoadedPortCalls: 20,
        harborsLoaded: true,
    }
    towagePortCalls = [];
    towagePortCallsStatement = {};
    towagePortCallDetails = {};

    componentWillMount() {
        this.loadPortCalls = this.loadPortCalls.bind(this);
        this._appendPortCalls = this._appendPortCalls.bind(this);
        var preparePortCalls = this.preparePortCalls.bind(this)
        this.loadPortCalls()
            .then(this.props.bufferPortCalls)
            .then(preparePortCalls());
    }

    loadPortCalls() {
        return this.props.updatePortCalls().then(() => {
            if (this.props.error.hasError) {
                navigate('Error');
            }
        });
    }

    _appendPortCalls() {
        let { portCalls, appendPortCalls, isAppendingPortCalls } = this.props;
        if (portCalls.length > 0 && !isAppendingPortCalls) {
            return appendPortCalls(portCalls[portCalls.length - 1]);
        }
    }

    checkBottom(event) {
        let { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        const paddingToBottom = 100;
        if (!this.props.showLoadingIcon && layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom) {
            let numLoaded = this.state.numLoadedPortCalls;

            this.setState({ numLoadedPortCalls: numLoaded + 20 });
            let { portCalls, appendPortCalls } = this.props;
            if (numLoaded >= portCalls.length) {
                this._appendPortCalls();
            } else {
                console.log('Loading more local port calls. Showing ' + numLoaded + ' of ' + portCalls.length + ' port calls.');
            }
        }
    }

    /**
     * Prepares the view for portcalls, loading new informations like statements to get harbor
     */
    preparePortCalls() {
        var self = this;
        return new Promise(function (resolve, reject) {
            var portCalls = self.props.portCalls;
            self.portCallStatements = {};
            for (var i = 0; i < portCalls.length; i++) {
                var portCall = portCalls[i];
                getStatements(portCall)
                    .then(function (statements) {
                        self.prepareTowagePortCalls(portCall, statements, self)
                            .then(function (data) {
                                self.state.harborsLoaded = true;
                                self.forceUpdate();
                                self.setHarbor(portCall, self)
                                    .then(function (data) {
                                        self.state.harborsLoaded = true;
                                        self.forceUpdate();
                                    });
                            });
                    });
            }
        });
    }

    prepareTowagePortCalls(portCall, statements, self) {
        var towageStateList =
            [
                "Arrival_Tug_Berth",
                "Arrival_Tug_TugZone",
                "Departure_Tug_TugZone",
                "Arrival_Vessel_TugZone",
                "Departure_Vessel_TugZone",
                "Arrival_EscortTug_TugZone",
                "Departure_EscortTug_TugZone",
                "Arrival_EscortTug_ETugZone",
                "Departure_EscortTug_ETugZone",
                "Arrival_Vessel_ETugZone",
                "Departure_Vessel_ETugZone",
                "Arrival_EscortTug_Vessel",
                "Departure_EscortTug_Vessel",
                "Arrival_Tug_Vessel",
                "Departure_Tug_Vessel",
                "Arrival_Tug_HomeBase",
                "Departure_Tug_HomeBase",
                "Arrival_EscortTug_LOC",
                "Departure_EscortTug_LOC",
                "Arrival_Tug_LOC",
                "Departure_Tug_LOC",
                "EscortTowage_Commenced",
                "EscortTowage_Completed",
                "Towage_Commenced",
                "Towage_Completed",
                "EscortTowage_Requested",
                "EscortTowage_ReqReceived",
                "EscortTowage_Confirmed",
                "EscortTowage_Denied",
                "EscortTowage_Cancelled",
                "Towage_Requested",
                "Towage_ReqReceived",
                "Towage_Confirmed",
                "Towage_Denied",
                "Towage_Cancelled",
            ];

        return new Promise(function (resolve, reject) {
            var lastStatmentReport;
            var lastStatement;
            for (var i = 0; i < statements.length; i++) {
                var statement = statements[i];
                if (towageStateList.includes(statement.stateDefinition)) {
                    if (lastStatement === undefined) lastStatement = statement;
                    if (lastStatmentReport === undefined) lastStatmentReport = statement.reportedAt;
                    if (lastStatmentReport <= statement.reportedAt) {
                        lastStatement = statement;
                        lastStatementReport = statement.reportedAt;

                    }
                }
            }
            if (lastStatement !== undefined) {
                var portCallId = portCall.portCallId;
                self.towagePortCalls.push(portCall);
                self.towagePortCallsStatement[portCallId] = statements;
            }
            resolve();
        });
    }
    openPortcallDetials(portCall) {
        var portCallID = portCall.portCallId;
        var statements = this.towagePortCallsStatement[portCallID];
        console.log(statements);
        this.props.navigation.navigate('VesselInfo', {
            'portCall': portCall,
            'statements': statements
        });
    }

    setHarbor(portCall, self) {
        return new Promise(function (resolve, reject) {

            var getSuffix = function (string, char) {
                for (var i = string.length - 1; i > 0; i--) {
                    if (string[i] === char) {
                        if (i === string.length - 1) i = (string.length - 2);
                        return string.substring(i + 1);
                    }
                }
                return string;
            }

            var stateType = "";
            var harbor = "Unknown harbor";
            var portCallId = portCall.portCallId;
            var statements = self.towagePortCallsStatement[portCallId];

            if (statements === undefined) resolve();
            var harborMap = {};
            for (var i = 0; i < statements.length; i++) {

                var statement = statements[i];
                if (statement === undefined) continue;
                if (statement.at === undefined) continue;
                if (statement.stateDefinition === undefined) continue;
                stateType = statement.stateDefinition;

                switch (stateType) {
                    case "Arrival_Vessel_Berth":
                        harbor = getSuffix(statement.at, ":");
                        if (self.towagePortCallDetails[portCall.portCallId] === undefined) {
                            self.towagePortCallDetails[portCall.portCallId] = {};
                        }
                        self.towagePortCallDetails[portCall.portCallId].harbor = harbor;
                        resolve(harbor);
                        break;
                    case "Departure_Vessel_Berth":
                        harbor = getSuffix(statement.at, ":");
                        if (self.towagePortCallDetails[portCall.portCallId] === undefined) {
                            self.towagePortCallDetails[portCall.portCallId] = {};
                        }
                        self.towagePortCallDetails[portCall.portCallId].harbor = harbor;
                        resolve(harbor);
                        break;
                }

                resolve(undefined);
            }
        });
    }

    getPhotoURI(portCall) {
        var vesselURI = null;
        if (portCall === undefined) return vesselURI;
        if (portCall.vessel !== undefined) {
            vesselURI = portCall.vessel.photoURL;
        }

        return { uri: vesselURI };
    }

    getPortCallRequets(portCall) {
        var nextRow = "\n";
        var randomInt = Math.floor(Math.random() * 4)
        return "Requested" + nextRow + randomInt + " Tugboats" + nextRow + "Escort  ->";
    }

    getPortCallDetails(portCall) {
        var nextRow = "\n";
        var vesselName = "Unknown vessel name";
        var endDate = "Unknown date";
        var harbor = "Loading harbor";

        var portCallId = portCall.portCallId;
        if (this.towagePortCallDetails[portCallId] !== undefined) {
            harbor = this.towagePortCallDetails[portCall.portCallId].harbor;
            if (harbor === undefined) harbor = "Unknown harbor";
        }
        if (portCall.vessel !== undefined) vesselName = portCall.vessel.name;
        if (portCall.endTime !== undefined) endDate = getDateTimeString(new Date(portCall.endTime))

        if (harbor.length > 0) {
            var prefix = harbor.substring(0, 1).toUpperCase();
            harbor = prefix + harbor.substring(1);
        }
        return vesselName + nextRow + harbor + nextRow + endDate;
    }

    createPortCallList = () => {
        var portCalls = this.towagePortCalls;
        var list = [];

        if (this.state.harborsLoaded) {
            for (var i = 0; i < portCalls.length; i++) {
                var portCall = portCalls[i];
                if (portCall === undefined) continue;
                console.log(portCall);
                var photoURI = this.getPhotoURI(portCall);
                var portCallDetails = this.getPortCallDetails(portCall);
                var portCallRequets = this.getPortCallRequets(portCall);
                list.push(
                    <View style={localStyles.listContainer}
                        backgroundColor={(i % 2 === 0) ? "#f0f0f0" : "#ffffff"}
                        key={i}
                    >
                        <View style={localStyles.listPortcallAvatar} >
                            <Avatar
                                size="small"
                                rounded
                                source={photoURI}
                            />
                        </View>
                        <View style={localStyles.listPortcallDetails}>
                            <Text
                                style={localStyles.listPortcallDetailsText}
                                h4
                            >
                                {portCallDetails}
                            </Text>
                        </View>
                        <View style={localStyles.listPortcallRequets}>
                            <Text
                                style={localStyles.listPortcallRequetsText}
                            >
                                {portCallRequets}
                            </Text>
                        </View>
                        <View style={localStyles.listPortcallOnPress}>
                            <Icon
                                name='chevron-right'
                                color="black"
                                size={40}
                                underlayColor='transparent'
                            />
                        </View>
                        <View style={localStyles.listContainerOverlay} >
                            <List containerStyle={{ width: "100%", height: "100%", opacity: 0, marginTop: 0 }}>
                                {
                                    <ListItem
                                        containerStyle={{ width: "100%", height: "100%" }}
                                        onPress={() => {
                                            this.openPortcallDetials(portCall);
                                        }}
                                    />
                                }
                            </List>
                        </View>
                    </View>
                );
            }
        }

        return list;
    }

    render() {
        const { navigation, showLoadingIcon, portCalls, selectPortCall } = this.props;
        const { navigate } = navigation;
        const { searchTerm } = this.state;
        const { goBack } = this.props.navigation;

        // Quick fix for having 1 element with null value
        if (portCalls.length === 1) {
            portCalls.splice(0, 1);
        }

        return (
            <View style={localStyles.backgroundContainer}>
                <View style={localStyles.topContainer}>
                    <View style={localStyles.topHeader}>
                        <View style={localStyles.topButtonDiv}>
                            <Icon
                                name='arrow-back'
                                color={colorScheme.primaryContainerColor}
                                size={44}
                                underlayColor='transparent'
                                onPress={() => navigate('StartView')}
                            />

                        </View>
                        <View style={localStyles.topHeaderDiv}>
                            <Text
                                style={localStyles.headerText}
                                h3
                            >
                                Portcall
                        </Text>
                        </View>
                    </View>
                    <View style={localStyles.searchDiv}>
                        <View style={localStyles.searchBarDiv}>
                            <SearchBar
                                autoCorrect={false}
                                containerStyle={localStyles.searchBar}
                                //showLoadingIcon={showLoadingIcon}
                                clearIcon
                                inputStyle={{ backgroundColor: colorScheme.primaryContainerColor }}
                                lightTheme
                                placeholder='Search by name, IMO or MMSI number'
                                placeholderTextColor={colorScheme.tertiaryTextColor}
                                onChangeText={text => this.setState({ searchTerm: text })}
                                textInputRef='textInput'
                            />
                        </View>
                        <View style={localStyles.filterButtonDiv}>
                            <Icon
                                name='filter-list'
                                color={colorScheme.primaryTextColor}
                                size={40}
                                underlayColor='transparent'
                                onPress={() => navigate('FilterMenu')}
                            />
                        </View>
                    </View>

                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.loadPortCalls.bind(this)}
                        />
                    }
                    onScroll={this.checkBottom.bind(this)}
                    scrollEventThrottle={4}
                    style={localStyles.scrollContainer}
                >
                    {this.createPortCallList()}
                </ScrollView>

            </View >);
    }
    isFavorite(portCall) {
        return this.props.favoritePortCalls.includes(portCall.portCallId) ||
            this.props.favoriteVessels.includes(portCall.vessel.imo);
    }

    sortFilters(a, b) {
        let aFav = this.isFavorite(a);
        let bFav = this.isFavorite(b);
        if (aFav && !bFav) return -1;
        if (bFav && !aFav) return 1;

        let { filters } = this.props;
        let invert = filters.order === 'ASCENDING';
        if (filters.sort_by === 'LAST_UPDATE') {
            if (a.lastUpdated > b.lastUpdated)
                return invert ? 1 : -1;
            else return invert ? -1 : 1;
        } else if (filters.sort_by === 'ARRIVAL_DATE') {
            if (a.startTime > b.startTime)
                return invert ? 1 : -1;
            else return invert ? -1 : 1;
        }

        return 0;
    }

    search(portCalls, searchTerm) {
        let { filters } = this.props;

        return portCalls.filter(portCall => {
            return (portCall.vessel.name.toUpperCase().includes(searchTerm.toUpperCase()) ||
                portCall.vessel.imo.split('IMO:')[1].startsWith(searchTerm) ||
                portCall.vessel.mmsi.split('MMSI:')[1].startsWith(searchTerm)) &&
                (!portCall.stage || filters.stages.includes(portCall.stage));
        }).sort((a, b) => this.sortFilters(a, b))//.sort((a,b) => a.status !== 'OK' ? -1 : 1)
            .slice(0, this.state.numLoadedPortCalls);
    }
}

const localStyles = StyleSheet.create({
    listContainerOverlayButton: {
        alignSelf: 'stretch',

    },
    listContainerOverlay: {
        position: "absolute",
        flex: 1,
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        opacity: 0.6,
        zIndex: 100
    },
    listContainer: {
        height: 110,
        width: "100%",
        borderWidth: 1,
        borderColor: "#e0e0e0",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
    },
    listPortcallAvatar: {
        width: "12%",
        justifyContent: "center",
        flexDirection: "column",
    },
    listPortcallDetails: {
        flex: 2,
        justifyContent: "center",
        flexDirection: "column",
    },

    listPortcallDetailsText: {
        fontSize: 20,
        lineHeight: 30,
        color: "black"
    },
    listPortcallRequets: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
    },

    listPortcallRequetsText: {
        fontSize: 16,
        lineHeight: 30,
        color: "grey"
    },
    listPortcallOnPress: {
        justifyContent: "center",
        flexDirection: "column",
    },

    backgroundContainer: {
        height: "100%",
        backgroundColor: colorScheme.backgroundColor,
    },
    topContainer: {
        height: 125,
        backgroundColor: colorScheme.primaryColor
    },
    topHeader: {
        width: '100%',
        paddingTop: 30,
        paddingBottom: 40,
        marginBottom: -1,
    },
    headerText: {
        color: colorScheme.primaryTextColor
    },
    topButtonDiv: {
        position: 'absolute',
        left: 10,
        top: 30
    },
    topHeaderDiv: {
        position: 'absolute',
        alignItems: 'center',
        top: 30,
        left: "10%",
        width: '80%'
    },
    searchDiv: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    searchBarDiv: {
        width: "90%",
        alignSelf: "flex-start"
    },
    filterButtonDiv: {
        width: "10%",
        alignSelf: "flex-start",
        marginRight: 60,
        marginTop: 6
    },
    searchBar: {
        backgroundColor: colorScheme.primaryColor,
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    scrollContainer: {
        flex: 2,
    }

});

function mapStateToProps(state) {
    return {
        portCalls: state.cache.portCalls,
        cacheLimit: state.cache.limit,
        favoritePortCalls: state.favorites.portCalls,
        favoriteVessels: state.favorites.vessels,
        showLoadingIcon: state.portCalls.portCallsAreLoading,
        filters: state.filters,
        error: state.error,
        isAppendingPortCalls: state.cache.appendingPortCalls
    }
}

export default connect(mapStateToProps, {
    updatePortCalls,
    appendPortCalls,
    selectPortCall,
    toggleFavoritePortCall,
    toggleFavoriteVessel,
    bufferPortCalls,
    setError,
})(RequestView);
