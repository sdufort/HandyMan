import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardComponent } from '../components/CardComponent';
import { MenuCard } from '../components/MenuCard';
import styles from '../styles/generic';

const { container } = styles;
const { width } = Dimensions.get('window');

export default class Home extends Component {
  render() {
    console.disableYellowBow = true;
    return (
      <View style={[container, {paddingBottom: 20}]}>
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
        <ScrollView style={{ flex: 1, paddingTop: 10, paddingLeft: 0, paddingRight: 0 }}>
          <View style={{ width: width/2, paddingLeft: 10, paddingRight: 0, paddingBottom: 10}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MenuCard title='Appliances' icon='fridge' onPress={Actions.appliances} tile={true} />
              <MenuCard title='Around the House' icon='home' onPress={Actions.aroundHouse} tile={true} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MenuCard title='Automobiles' icon='car' onPress={Actions.automobiles} tile={true} />
              <MenuCard title='Furniture' icon='seat-individual-suite' onPress={Actions.furniture} tile={true} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MenuCard title='Lawn & Garden' icon='tree' onPress={Actions.lawnGarden} tile={true} />
              <MenuCard title='Sports & Camping' icon='football' onPress={Actions.sportsCamping} tile={true} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
