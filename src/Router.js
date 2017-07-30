import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { menuPressed } from './actions';
import Home from './screens/Home';
import Appliances from './screens/Appliances';
import AroundHouse from './screens/AroundHouse';
import Automobiles from './screens/Automobiles';
import Furniture from './screens/Furniture';
import LawnGarden from './screens/LawnGarden';
import SportsCamping from './screens/SportsCamping';
import Menu from './screens/Menu';

const { width } = Dimensions.get('window');

const styles = EStyleSheet.create({
  header: {
    backgroudColor: 'blue',
    fontWeight: 'bold',
  },
});

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.menuWasPressed,
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  leftButton() {
    return (
      <TouchableOpacity onPress={ this.openMenu } style={{ marginTop: 1 }}>
        <Icon name='menu' size={25} />
      </TouchableOpacity>
    );
  }

  openMenu() {
    this.props.menuPressed(true);
  }

  closeMenu() {
    this.props.menuPressed(false);
  }

  render() {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1 }}>
        <Modal
          animationType={'fade'}
          transparent
          visible={this.props.menuWasPressed}
        >
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 1)', justifyContent: 'center' }}>
            <View style={{ flex: 4, alignItems: 'center' }}>
              <Menu />
            </View>
            <View style={{ flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={ this.closeMenu }>
                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textDecorationLine: 'underline' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Router
          sceneStyle={{ paddingTop: 64 }}
          navigationBarStyle={ styles.header }
          barButtonIconStyle={{ tintColor: 'blue' }}
        >
          <Scene
            key="home"
            component={Home}
            title="HandyMan Dashboard"
            hideBackImage
            onBack={() => {}}
            inital={true}
            titleStyle={{width: width/2}}
            panHandlers={null}
          />
          <Scene
            key="appliances"
            component={Appliances}
            title="Appliances"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="aroundHouse"
            component={AroundHouse}
            title="Around the House"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="automobiles"
            component={Automobiles}
            title="Automobiles"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="furniture"
            component={Furniture}
            title="Furniture"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="lawnGarden"
            component={LawnGarden}
            title="Lawn & Garden"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="sportsCamping"
            component={SportsCamping}
            title="Sports & Camping"
            hideBackImage
            onBack={() => {}}
            renderBackButton={() => this.leftButton()}
            backButtonIconStyle={{ marginTop: 7 }}
            panHandlers={null}
          />
          <Scene
            key="menu"
            component={Menu}
            title="Menu"
            hideBackImage
            onBack={() => {}}
            panHandlers={null}
          />
        </Router>
      </View>
    );
  }
}

const mapStateToProp = ({ MenuReducer }) => {
  const { menuWasPressed } = MenuReducer;
  return { menuWasPressed };
};

export default connect(mapStateToProp, { menuPressed })(RouterComponent);
