import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import {
  Text,
  Button,
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
        };
    }

    componentDidMount() {
      this.setState({extraInfo: undefined}); 
    }


  render(){
    return(

      <View style={styles.container}>  
        <TopHeader title = 'Vessel name' firstPage navigation={this.props.navigation}/>

        
        {/*<View style={styles.pictureContainer}>
          <Image
            style={{ 
            width: Dimensions.get('window').width-20,
            height: Dimensions.get('window').height/4,
            borderRadius: 5,
            }}
            source={{uri:vessel.photoURL }}  
            />
        </View>
		*/}
        
        {/*
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{vessel.name}</Text>
        </View>
		*/}
        
        
        <View style={styles.infoContainer}>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Status: </Text>{"Commenced"} </Text>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Time: </Text>{"Time"} </Text>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Work type: </Text>{"Escort"} </Text>
      		<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Last update: </Text>{"29/04/2018 19:20"} </Text>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Nr of tugboats: </Text>{"2"} </Text>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Conection point: </Text>{"Trubaduren"} </Text>
        	<Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Destination: </Text>{"Masthuggskajen 72A"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Length: </Text>{"129"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Width: </Text>{"19"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Dead Weight: </Text>{"50 000 tones"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> IMO: </Text>{"9371878"} </Text>
          {/*Put below in separate expandable list? See UI suggestion*/}
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Vessel Type: </Text>{"Oil Tanker?"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> MMSI: </Text>{"MMSI..."} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Call Sign: </Text>{"Call sign..."} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Flag: </Text>{"SE"} </Text>
            <Text style={styles.infoText}> <Text style={{fontWeight: 'bold'}}> Built Year: </Text>{"2000"} </Text>

        </View>
        {/*<View style={styles.infoContainerButton}>*/}
            <Button
              backgroundColor={colorScheme.primaryColor}
              color={colorScheme.primaryTextColor}
              title="Change State"
              buttonStyle={styles.buttonStyle}
              onPress={() => navigate('StatusChangeScreen')}
            />
        {/*</View>
        <View style={styles.infoContainer}>
          {!!vessel.vesselType &&
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Vessel Type:  </Text>{vessel.vesselType.replace(/_/g, ' ')}</Text> 
          }
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>IMO:  </Text>{vessel.imo.replace('urn:mrn:stm:vessel:IMO:', '')}</Text>
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>MMSI:  </Text>{vessel.mmsi.replace('urn:mrn:stm:vessel:MMSI:', '')}</Text>
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Call Sign:  </Text>{vessel.callSign}</Text>
          {!!vessel.flag && 
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Flag: </Text>{vessel.flag}</Text>
          }
          {!!vessel.builtYear &&
          <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Built year: </Text>{vessel.builtYear}</Text>
          }
          {(!!extraInfo && !!extraInfo.length) &&
            <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Length: </Text>{extraInfo.length}m</Text>
          }
          {(!!extraInfo && !!extraInfo.beam) &&
            <Text style={styles.infoText}><Text style={{fontWeight: 'bold'}}>Beam: </Text>{extraInfo.beam}m</Text>
          }*/}
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
    //backgroundColor: colorScheme.primaryColor,
    // marginBottom: 10,
    // marginTop: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: colorScheme.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    // TODO proper size change of button
    borderTopWidth: 40,
    borderBottomWidth: 40,
    borderTopWidth: 40,
    borderBottomWidth: 40,
  },
  infoContainer: {
    backgroundColor: colorScheme.primaryContainerColor,
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    borderRadius: 5,
  },
  // infoContainerButton: {
  //   backgroundColor: colorScheme.primaryContainerColor,
  //   marginTop: 10,
  //   marginBottom: 10,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   // paddingTop: 10,
  //   // paddingBottom: 10,
  //   paddingLeft: 0,
  //   paddingRight: 0,
  //   flexDirection: 'column',
  //   //borderRadius: 5,
  // },
  infoText: {
    fontSize: 14,
    color: colorScheme.quaternaryTextColor,
  }
})

/*function mapStateToProps(state) {
    return {
    }
}
*/
export default connect()(VesselInfo);