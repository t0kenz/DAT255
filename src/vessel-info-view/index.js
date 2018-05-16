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
        };
    }

    componentDidMount() {
      this.setState({extraInfo: undefined}); 
    }


  render(){
	const { navigation } = this.props;
	const { navigate } = navigation;
    
    return(  

        
		<View style={styles.backgroundContainer}>
        	<View style={styles.topContainer}>
            	<View style={styles.topHeader}>
              		<View style={styles.topButtonDiv}>
                  		<Icon
                        	name='arrow-back'
                            color={colorScheme.primaryContainerColor}
                              size={44}
                              underlayColor='transparent'
                              onPress={() => navigate('NewPortCalls')}
                        />
                    </View>
                        <View style={styles.topHeaderDiv}>
                        	<Text style={styles.headerText} h3>
                                Vessel example
                        	</Text>
                        </View>
					</View>
        		</View>
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
              <Button
              backgroundColor={colorScheme.primaryColor}
              color={colorScheme.primaryTextColor}
              title="Change State"
              titleStyle={{ fontWeight: "700"}}
              buttonStyle={styles.buttonStyle}
              onPress={() => navigate('ChangeStatus')}
/>
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
      height: 125,
      backgroundColor: colorScheme.primaryColor
  },
  topHeader: {
      width: '100%',
      paddingTop: 30,
      paddingBottom: 40,
      marginBottom: -1,
},
  
})

/*function mapStateToProps(state) {
    return {
    }
}
*/
export default connect()(VesselInfo);