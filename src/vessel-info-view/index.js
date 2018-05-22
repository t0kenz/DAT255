
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Picker
} from 'react-native';

import {
  Text,
  Button,
  Icon,
} from 'react-native-elements';
import TopHeader from '../top-header-view';
import colorScheme from '../../config/colors';

import {
  fetchVesselFromIMO,
  selectPortCall
} from '../../actions';

import ships from '../../assets/ships';

class VesselInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extraInfo: undefined,
      changeStatus: false,
      time: '2018-06-01 13:32',
      location: 'trubaduren',
      tugboats: '3',
      state: 'commenced'
    };
  }

  componentDidMount() {
    this.setState({ extraInfo: undefined });
  }

  acceptRequest() {
    const { goBack } = this.props.navigation;
    console.log("accepted request");
    goBack();
  }

  modifyRequest() {
    const { goBack } = this.props.navigation;
    this.state.changeStatus = false;
    goBack();
  }

  changeStatus() {
    const { selectPortCall } = this.props;
    selectPortCall(this.props.navigation.state.params.portCall);
    this.props.navigation.navigate('FavoriteStatesSideMenu', { portCalls: this.props.navigation.state.params.portCall });
    console.log("change status");
    if (this.state.changeStatus) {
      //  this.state.changeStatus = false;
    } else {
      //this.state.changeStatus = true;
    }

    this.forceUpdate();
  }

  createPortCallInfo(portCall, statements, details) {
    var div;
    console.log(portCall);
   
      div = <View style={styles.infoContainer}>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Status: </Text>{details.jobStatus} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Start time: </Text>{details.commencedStart ? details.commencedStart : "Not found"} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Time type: </Text>{details.timeType ? details.timeType : "Not found "} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Work type: </Text>{details.jobType}</Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Last update: </Text>{details.statementReport} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Nr of tugboats: </Text>{details.numberOfTugboats} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Connection point: </Text>{details.connectionPoint ? details.connectionPoint : "Not found} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Connection time type: </Text>{details.connectionPointTimetype ? details.connectionPointTimeType : "Not found} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Destination: </Text>{details.harbor} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> IMO: </Text>{portCall.vessel.imo} </Text>
        {/*Put below in separate expandable list? See UI suggestion*/}
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Vessel Type: </Text>{portCall.vessel.vesselType} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> MMSI: </Text>{portCall.vessel.mmsi} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Call Sign: </Text>{portCall.vessel.callSign} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Comment: </Text>{details.comment} </Text></View>
    
    return div;
  }

  createButtonsCont() {
    var div;
    if (this.state.changeStatus) {

    } else {
      div =
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLeftContainer}>
            <Button
              color={colorScheme.primaryTextColor}
              title="Accept request"
              titleStyle={{ fontWeight: "2500" }}
              buttonStyle={styles.buttonStyle}
              onPress={() => this.acceptRequest()}
            />
          </View>
          <View style={styles.buttonRightContainer}>
            <Button
              color={colorScheme.primaryTextColor}
              title="Change State"
              titleStyle={{ fontWeight: "2500" }}
              buttonStyle={styles.buttonStyle}
              onPress={() => this.changeStatus()}
            />
          </View>
        </View>
    }
    return div;
  }


  render() {
    const { goBack } = this.props.navigation;
    const { portCall, statements, towagePortCallDetails } = this.props.navigation.state.params;
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.topContainer}>
          <View style={styles.topHeader}>
            <View style={styles.topButtonDiv}>
              <Icon
                name='arrow-back'
                color={colorScheme.primaryContainerColor}
                size={44}
                underlayColor='transparent'
                onPress={() => goBack()}
              />
            </View>
            <View style={styles.topHeaderDiv}>
              <Text style={styles.headerText} h3>
                Vessel example
                        	</Text>
            </View>
          </View>
        </View>
        {this.createPortCallInfo(portCall, statements, towagePortCallDetails)}
        {this.createButtonsCont()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: colorScheme.primaryContainerColor,
    borderColor: colorScheme.tertiaryTextColor,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colorScheme.backgroundColor,
  },

  buttonStyle: {
    //paddingTop: "20%",
    backgroundColor: 'transparent',

  },

  infoContainer: {
    backgroundColor: colorScheme.primaryContainerColor,
    margin: 10,
    padding: 5,
    height: '50%',
    flexDirection: 'column',
    borderRadius: 5,
  },
  infoText: {
    fontSize: 14,
    color: colorScheme.quaternaryTextColor,
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

  backgroundContainer: {
    height: "100%",
    backgroundColor: colorScheme.backgroundColor,
  },
  topContainer: {
    height: 80,
    backgroundColor: colorScheme.primaryColor
  },
  topHeader: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 40,
    marginBottom: -1,
  },

  buttonContainer: {
    position: 'absolute',
    top: '85%',
    left: 0,
    width: '100%',
    height: '15%',
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonLeftContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flex: 5,
    margin: '1%',
    backgroundColor: "green",
    borderRadius: 25,
    opacity: 0.9,
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonRightContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    flex: 5,
    margin: '1%',
    backgroundColor: "orange",
    borderRadius: 25,
    opacity: 0.9,
    justifyContent: "center",
    flexDirection: "column",
  },
  changeStatusBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  scrollContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 5,
    backgroundColor: colorScheme.primaryContainerColor,
    flex: 3
  },
  changeStatusContainer: {
    flex: 4,
    justifyContent: "center",
    flexDirection: "column",
  },
  changeStatusField: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#e8d7db",
    backgroundColor: "#c9dbd9",
    borderRadius: 10,
  },
  commentContainer: {
    flex: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#e8d7db",
    backgroundColor: "#c9dbd9",
    borderRadius: 10,
  },
  changeStatusButtons: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  statusTitle: {
    flex: 2,
    justifyContent: "center",
    flexDirection: "row",
  },
  statusTitleText: {
    fontSize: 20,
    color: colorScheme.quaternaryTextColor,
  },
  statusTitleField: {
    flex: 5,
    backgroundColor: "white",
    opacity: 0.9,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    height: '80%',
    padding: 5,
    marginTop: 2,
    marginRight: 20
  },
  commentTitle: {
    flex: 2,
    justifyContent: "flex-start",
    flexDirection: "column",
  },

})

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, {
  selectPortCall,
})(VesselInfo);

