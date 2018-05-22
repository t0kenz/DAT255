import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';

import {
  List,
  ListItem,
  Icon,
  CheckBox
} from 'react-native-elements';

import { connect } from 'react-redux';
import { removeFavoriteState, addFavoriteState, } from '../../actions'
import TopHeader from '../top-header-view';
import colorScheme from '../../config/colors';

class StateList extends Component {
  onAddStatesPress(init) {
    if (!!this.props.navigation.state.params) {
      this.props.navigation.navigate('SelectFavoriteStateInit');
    } else {

      this.props.navigation.navigate('SelectFavoriteStatesTimeLine');
    }
  }

  componentWillMount() {
    this.setFavoriteStates(this.props.favoriteStates);
  }

  setFavoriteStates(states) {
    list = [
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
    ]
    for (var i = 0; i < list.length; i++) {
      states[i] = list[i];
    }
  }

  render() {
    var portCall = this.props.navigation.state.params.portCalls;
    const { navigate, state } = this.props.navigation;
    const { getState, stateCatalogue } = this.props;
    let favoriteStates = this.props.favoriteStates.sort((a, b) => (a < b ? -1 : 1));

    return (
      <View style={styles.container}>
        <TopHeader title={'Favorite States'}
          navigation={this.props.navigation}
          firstPage={false}
          rightIconFunction={this.onAddStatesPress.bind(this)}
        />
        <View style={styles.headerContainer} >
          <Text style={styles.headerSubText}>Select state</Text>
        </View>
        <ScrollView>
          <List>
            {favoriteStates.map((stateId, index) => {
              const state = getState(stateId);
              return (
                <ListItem
                  key={index}
                  title={state.Name}
                  onPress={() => {
                    navigate('SendPortCall', { stateId: state.StateId, newVessel: false });
                  }}
                />
              );
            })}
          </List>
        </ScrollView>
      </View>
    );
  }
}

/*
, portCallId: portCall.portCallId, vessel: portCall.vesse
*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: colorScheme.primaryColor,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerSubText: {
    textAlign: 'center',
    color: colorScheme.primaryTextColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    favoriteStates: state.states.favoriteStates,
    getState: state.states.stateById,
    stateCatalogue: state.states.stateCatalogue,
  }
}

export default connect(mapStateToProps, { removeFavoriteState, addFavoriteState })(StateList);
