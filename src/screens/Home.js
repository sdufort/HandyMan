import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CardComponent } from '../components/CardComponent';
import styles from '../styles/generic';

const { container } = styles;

export default class Home extends Component {
  render() {
    console.disableYellowBow = true;
    return (
      <View style={container}>
        <ScrollView style={{ flex: 1 }}>
          <CardComponent />
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </ScrollView>
      </View>
    );
  }
}
