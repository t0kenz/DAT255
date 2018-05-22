
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TextInput
} from 'react-native';

import {
  Text,
  Button,
  Icon,
} from 'react-native-elements';
import TopHeader from '../top-header-view';
import colorScheme from '../../config/colors';

import {
  fetchVesselFromIMO
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
    this.props.fetchVesselFromIMO(this.props.vessel.imo.split('IMO:')[1]).then(() => {
      // DOUBLE EQUALS!! 
      const ship = ships.find(ship => ship.mmsi == this.props.vessel.mmsi.split('MMSI:')[1]);
      this.setState({extraInfo: ship});
  });  }

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
    console.log("change status");
    if (this.state.changeStatus) {
      this.state.changeStatus = false;
    } else {
      this.state.changeStatus = true;
    }

    this.forceUpdate();
  }

  createPortCallInfo(portCall, statements, details) {
    var div;

    /*

      <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Time: </Text>{"Time"} </Text>
      <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Nr of tugboats: </Text>{"2"} </Text>
      <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Conection point: </Text>{"Trubaduren"} </Text>
     */
    if (this.state.changeStatus) {

      var div =
        <View style={styles.changeStatusBackground}>
          <ScrollView
            scrollEventThrottle={4}
            style={styles.scrollContainer}>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Status: </Text>{details.jobStatus} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Work type: </Text>{details.jobType} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Last update: </Text>{} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Destination: </Text>{details.harbor} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Length: </Text>{"129"} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Width: </Text>{"19"} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Dead Weight: </Text>{"50 000 tones"} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> IMO: </Text>{"9371878"} </Text>
            {/*Put below in separate expandable list? See UI suggestion*/}
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Vessel Type: </Text>{"Oil Tanker?"} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> MMSI: </Text>{"MMSI..."} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Call Sign: </Text>{"Call sign..."} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Flag: </Text>{"SE"} </Text>
            <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Built Year: </Text>{"2000"} </Text>
          </ScrollView>
          <View style={styles.changeStatusContainer}>
            <View style={styles.changeStatusField}>
              <View style={styles.statusTitle}>
                <Text style={styles.statusTitleText}> {"Status:"} </Text>
                <TextInput
                  style={styles.statusTitleField}
                  onChangeText={(text) => this.setState({ state: text })}
                  value={this.state.state}
                />
              </View>
            </View>
            <View style={styles.changeStatusField}>
              <View style={styles.statusTitle}>
                <Text style={styles.statusTitleText}> {"Location:"} </Text>
                <TextInput
                  style={styles.statusTitleField}
                  onChangeText={(text) => this.setState({ location: text })}
                  value={this.state.location}
                />
              </View>
            </View>
            <View style={styles.changeStatusField}>
              <View style={styles.statusTitle}>
                <Text style={styles.statusTitleText}> {"Time:"} </Text>
                <TextInput
                  style={styles.statusTitleField}
                  onChangeText={(text) => this.setState({ time: text })}
                  value={this.state.time}
                />
              </View>
            </View>
            <View style={styles.changeStatusField}>
              <View style={styles.statusTitle}>
                <Text style={styles.statusTitleText}> {"Tugboats:"} </Text>
                <TextInput
                  style={styles.statusTitleField}
                  onChangeText={(text) => this.setState({ tugboats: text })}
                  value={this.state.tugboats}
                />
              </View>
            </View>
            <View style={styles.commentContainer}>
              <View style={styles.commentTitle}>
                <Text style={styles.statusTitleText}> {"Comment:"} </Text>
              </View>
            </View>
            <View style={styles.changeStatusButtons}>
              <View style={styles.buttonLeftContainer}>
                <Button
                  color={'black'}
                  title="Change request"
                  titleStyle={{ fontWeight: "2500" }}
                  buttonStyle={styles.buttonStyle}
                  onPress={() => this.modifyRequest()}
                />
              </View>
              <View style={styles.buttonRightContainer}>
                <Button
                  color={'black'}
                  title="Go back"
                  titleStyle={{ fontWeight: "2500" }}
                  buttonStyle={styles.buttonStyle}
                  onPress={() => this.changeStatus()}
                />
              </View>
            </View>
          </View>
        </View>
    } else {
      div = <View style={styles.infoContainer}>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Status: </Text>{details.jobStatus} </Text>
        {/* Check if details.commencedStart is undefined */}<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Time: </Text>{details.commencedStart} </Text>
        {/* Check if details.commencedStart is undefined */}<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Time type: </Text>{details.timeType} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Work type: </Text>{details.jobType}</Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Last update: </Text>{details.statementReport} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Nr of tugboats: </Text>{details.numberOfTugboats} </Text>
        {/* Check if details.connectionPoint is undefined */}<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Connection point: </Text>{details.connectionPoint} </Text>
        {/* Check if details.connectionPointTimeType is undefined */}<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Connection time type: </Text>{details.connectionPointTimetype} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Destination: </Text>{details.harbor} </Text>
        {/*<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Length: </Text>{"extraInfo.length"} </Text>*/}
        {/*<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Beam: </Text>{"extraInfo.beam"} </Text>*/}
        {/*<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Dead Weight: </Text>{"50 000 tones"} </Text>*/}
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> IMO: </Text>{portCall.imo} </Text>
        {/*Put below in separate expandable list? See UI suggestion*/}
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Vessel Type: </Text>{portCall.vesselType} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> MMSI: </Text>{portCall.mmsi} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Call Sign: </Text>{portCall.callSign} </Text>
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Flag: </Text>{"SE"} </Text>
        {/*<Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Built Year: </Text>{"2000"} </Text>*/}
        <Text style={styles.infoText}> <Text style={{ fontWeight: 'bold' }}> Comment: </Text>{details.comment} </Text></View>
    }
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
    const { extraInfo } = this.state;

    const { goBack } = this.props.navigation;
    const { portCall, statements, details } = this.props.navigation.state.params;
        
    console.log("VESSEL INFO TEST");
    console.log(this.props.navigation.state.params.portCall);
    
    console.log(this.props.navigation.state.params.statements);

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
        {this.createPortCallInfo(portCall, statements, details)}
        {this.createButtonsCont()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

/*function mapStateToProps(state) {
    return {
        }
        }
        */
export default connect()(VesselInfo);
