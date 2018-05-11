import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
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
    FormInput,
    SearchBar,
    FormLabel,
    Button,
    CheckBox,
    Slider,
} from 'react-native-elements';

import { Util } from 'expo';

import TopHeader from '../top-header-view';
import colorScheme from '../../config/colors';
import styles from '../../config/styles';
import { getDateTimeString } from '../../util/timeservices';

import {
    updatePortCalls,
    selectPortCall,
    toggleFavoritePortCall,
    toggleFavoriteVessel,
    appendPortCalls,
    bufferPortCalls,
    setError,
} from '../../actions';

class PortCallView extends Component {

    constructor(props) {
        super(props);

        //this._logout = this._logout.bind(this);
    }

    componentWillMount() {
        this.loadPortCalls = this.loadPortCalls.bind(this);
        this._appendPortCalls = this._appendPortCalls.bind(this);
        this.loadPortCalls()
            .then(this.props.bufferPortCalls);
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

    openPortcallDetials() {
        /**
         * TODO: ADD NAVIGATE TO PORTCALL 
         */
        console.log("openPortcallDetials");
    }

    createPortcallList = (portCalls) => {
        var list = [];
        for (var i = 0; i < 10; i++) {

            list.push(
                <View style={localStyles.listContainer}
                    backgroundColor={(i % 2 === 0) ? "#f0f0f0" : "#ffffff"}
                    key={i}
                >
                    <View style={localStyles.listPortcallAvatar} >
                        <Avatar
                            size="small"
                            rounded
                            source={{ uri: "http://photos.marinetraffic.com/ais/showphoto.aspx?photoid=154634" }}
                        />
                    </View>
                    <View style={localStyles.listPortcallDetails}>
                        <Text
                            style={localStyles.listPortcallDetailsText}
                            h4
                        >
                            {"Beate\nRya Harbor 562\n05/06/2018 13:40 (E)"}
                        </Text>
                    </View>
                    <View style={localStyles.listPortcallRequets}>
                        <Text
                            style={localStyles.listPortcallRequetsText}

                        >
                            {"Requested\n3 Tugboats\nEscort  ->"}
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
                                        this.openPortcallDetials();
                                    }}
                                />

                            }
                        </List>
                    </View>
                </View>
            );
        }
        return list;
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
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
                <ScrollView style={localStyles.scrollContainer}>
                    {this.createPortcallList(portCalls)}
                </ScrollView>

            </View >);
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
        backgroundColor: styles.primaryColor,
        borderBottomWidth: 0,
        borderTopWidth: 0
    },
    scrollContainer: {
        flex: 2,
    },

});

const portCalls = [
    /*
    {
        name: 'Skagern',
        avatar_url: 'http://photos.marinetraffic.com/ais/showphoto.aspx?photoid=154634',
        date: "2018-05-02T19:43:38Z",
        port: ,
        type: ,
        status: ,
        tugBoats: 3,
    },
    */
    {
        name: 'Chris Jackson',
        //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]



/**
 * TODO: READ WHAT CONNECT DOES
 */
export default connect("", {
    updatePortCalls,
    appendPortCalls,
    selectPortCall,
    toggleFavoritePortCall,
    toggleFavoriteVessel,
    bufferPortCalls,
    setError
})(PortCallView);