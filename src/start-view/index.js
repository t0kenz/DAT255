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
    Avator, //vet inte om denna behövs
    Icon,
    List,
    ListItem,
    FormInput,
    FormLabel,
    Button,
    CheckBox,
    Slider,
} from 'react-native-elements';

import { Util } from 'expo';

import TopHeader from '../top-header-view';
import colorScheme from '../../config/colors';
import styles from '../../config/styles';

import {
    //changeHostSetting,
    //changePortSetting,
    //changePortUnlocode,
    //changeFetchReliability,
    changeScheme,
    //clearCache,
    //changeCacheLimit,
} from '../../actions';

class StartView extends Component {

    constructor(props) {
        super(props);

        //this._logout = this._logout.bind(this);
    }


    _logout() {
        const { navigation, connection, changeUser, logoutKeycloak } = this.props;
        if (!!connection.username) {
            changeUser('', '', false);
            console.log('Logging out legacy user...');
            navigation.navigate('LoginView');
        } else {
            console.log('Logging out keycloak user...');
            logoutKeycloak().then(() => navigation.navigate('LoginView'));
        }
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = navigation;
        return (
            <View style={locStyles.container}>
                <TopHeader title='PortableCDM' firstPage navigation={this.props.navigation} />
                <View style={locStyles.centerView}>
                    <View style={locStyles.topView}>

                        <Button
                            backgroundColor={colorScheme.primaryColor}
                            color={colorScheme.primaryTextColor}
                            leftIcon={{ name: 'directions-boat', color: 'white' }}
                            title="PortCalls"
                            buttonStyle={locStyles.buttonStyle}
                            onPress={() => navigate('NewPortCalls')}
                        />

                        <Button
                            backgroundColor={colorScheme.primaryColor}
                            color={colorScheme.primaryTextColor}
                            leftIcon={{ name: 'access-time', color: 'white' }}
                            title="Tows"
                            buttonStyle={locStyles.buttonStyle}
                            onPress={() => navigate('RequestsView')}
                        />
                    </View>
                    <View style={locStyles.bottomView}>
                        <Button
                            backgroundColor={colorScheme.primaryColor}
                            color={colorScheme.primaryTextColor}
                            leftIcon={{ name: 'info', color: 'white' }}
                            title="About"
                            buttonStyle={locStyles.buttonStyle}
                            onPress={() => navigate('About')}
                        />
                        <Button
                            backgroundColor={colorScheme.primaryColor}
                            color={colorScheme.primaryTextColor}
                            leftIcon={{ name: 'settings', color: 'white' }}
                            title="Settings"
                            buttonStyle={locStyles.buttonStyle}
                            onPress={() => navigate('Settings')}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const locStyles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: colorScheme.backgroundColor,
        height: 100,
        marginTop: "35%",
        marginBottom: "35%"
    },
    topView: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: colorScheme.backgroundColor,
        flexDirection: "row",
        height: 50,
        width: "100%"
    },
    bottomView: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: colorScheme.backgroundColor,
        height: 50,
        width: "100%"
    },
    container: {
        flex: 1,
        backgroundColor: colorScheme.backgroundColor,
    },
    scrollContainer: {
        backgroundColor: colorScheme.backgroundColor,
        //   paddingTop: 20,
    },
    formContainerStyle: {
        backgroundColor: colorScheme.primaryContainerColor,
        margin: 10,
        paddingBottom: 10,
        paddingTop: 10,
        borderColor: colorScheme.tertiaryTextColor,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonStyle: {
        //backgroundColor: colorScheme.primaryColor,
        marginBottom: 10,
        marginTop: 10,
        borderColor: colorScheme.primaryColor,
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        height: 120,
    },
    titleStyle: {
        color: colorScheme.quaternaryTextColor,
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
        textAlign: 'center',
    },
    badgeText: {
        color: colorScheme.secondaryColor,
    },
    sliderStyle: {
        marginLeft: 20,
        marginRight: 20,
    }
});

/**
 * TODO: READ WHAT CONNECT DOES
 */
export default connect()(StartView);
