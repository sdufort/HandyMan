import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

const styles = EStyleSheet.create({
  header: {
    backgroudColor: 'blue',
    fontWeight: 'bold',
  },
});

export default class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router
        sceneStyle={{ paddingTop: 64 }}
        navigationBarStyle={ styles.header }
        barButtonIconStyle={{ tintColor: 'blue' }}
      >
        <Scene
          key="home"
          component={Home}
          title="HandyMan"
          hideBackImage
          onBack={() => {console.log("hey")}}
          inital={true}
        />
      </Router>
    );
  }
}
