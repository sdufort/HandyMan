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
import { connect } from 'react-redux';
import { menuPressed } from '../actions';
import { CardComponent } from '../components/CardComponent';
import { MenuCard } from '../components/MenuCard';
import styles from '../styles/generic';

const { container } = styles;
const { width } = Dimensions.get('window');

export class Menu extends Component {
  constructor(props) {
    super(props);
  }

  toDashboard() {
    this.closeMenu();
    Actions.home();
  }

  toAppliances() {
    this.closeMenu();
    Actions.appliances();
  }

  toAroundHouse() {
    this.closeMenu();
    Actions.aroundHouse();
  }

  toAutomobiles() {
    this.closeMenu();
    Actions.automobiles();
  }

  toFurniture() {
    this.closeMenu();
    Actions.furniture();
  }

  toLawnGarden() {
    this.closeMenu();
    Actions.lawnGarden();
  }

  toSportsCamping() {
    this.closeMenu();
    Actions.sportsCamping();
  }

  closeMenu() {
    this.props.menuPressed(false);
  }

  render() {
    console.disableYellowBow = true;
    return (
        <View style={{flex: 1, width, marginTop: 20, padding: 20}}>
          <View style={[container, {flex: 1, borderRadius: 10}]}>
          <View style={{padding: 10, borderBottomWidth: 1, alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Menu</Text>
          </View>
          <View style={{padding: 10, borderBottomWidth: 1, alignItems: 'stretch', justifyContent: 'space-between'}}>
            <MenuCard title='Dashboard' icon='view-dashboard' onPress={this.toDashboard.bind(this)} />
          </View>
            <View style={{flex: 1, flexDirection: 'row', padding: 10, alignItems: 'stretch', justifyContent: 'space-between'}}>
              <ScrollView style={{ flexDirection: 'column', flex: 1, paddingLeft: 0, paddingRight: 0, paddingBottom: 10 }}>
                <MenuCard title='Appliances' icon='fridge' onPress={this.toAppliances.bind(this)} />
                <MenuCard title='Around the House' icon='home' onPress={this.toAroundHouse.bind(this)} />
                <MenuCard title='Automobiles' icon='car' onPress={this.toAutomobiles.bind(this)} />
                <MenuCard title='Furniture' icon='seat-individual-suite' onPress={this.toFurniture.bind(this)} />
                <MenuCard title='Lawn & Garden' icon='tree' onPress={this.toLawnGarden.bind(this)} />
                <MenuCard title='Sports & Camping' icon='football' onPress={this.toSportsCamping.bind(this)} />
              </ScrollView>
            </View>
          </View>
        </View>
    );
  }
}

const mapStateToProp = ({ MenuReducer }) => {
  const { menuWasPressed } = MenuReducer;
  return { menuWasPressed };
};
export default connect(mapStateToProp, { menuPressed })(Menu);
