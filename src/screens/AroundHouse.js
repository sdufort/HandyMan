import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { CardComponent } from '../components/CardComponent';
import { MenuCard } from '../components/MenuCard';
import styles from '../styles/generic';

const { container } = styles;

export default class AroundHouse extends Component {
  render() {
    console.disableYellowBow = true;
    return (
      <View style={container}>
        <View style={{ borderBottomWidth: 1, borderTopWidth: 1 }}>
          <Text style={styles.welcome}>
            Welcome to HandyMan!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
        </View>
      </View>
    );
  }
}
