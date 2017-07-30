import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26537a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class MenuCard extends Component {

  ifTile(title, tile, icon) {
    if(tile) {
      return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View>
            <Icon name={icon} size={25} style={{ paddingRight: 5 }} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 15 }}>{title}</Text>
          </View>
        </View>
      );
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name={icon} size={18} style={{ paddingRight: 5 }} />
        <Text style={{ fontSize: 15 }}>{title}</Text>
      </View>
    );
  }

  hasArrow(tile) {
    if(tile) {
      return (
        <View></View>
      );
    }
    return (
      <Icon name='chevron-right' size={20} />
    );
  }

  render() {
    const { title, icon, tile, onPress } = this.props;
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', borderColor: '#26537a', borderWidth: 1, padding: 5 }}>
          <View style={styles.container}>
            <Card>
              <CardSection style={{ borderRadius: 10, justifyContent: 'space-between', alignItems: (tile ? 'center' : 'stretch') }}>
                <View style={{ padding: 10, paddingTop: (tile ? 50 : 10), paddingBottom: (tile ? 50 : 10), flexDirection: 'row', justifyContent: 'space-between' }}>
                  {this.ifTile(title, tile, icon)}
                  <View>
                    {this.hasArrow(tile)}
                  </View>
                </View>
              </CardSection>
            </Card>
          </View>
        </TouchableOpacity>
    );
  }
}

MenuCard.propTypes = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  tile: React.PropTypes.bool,
  onPress: React.PropTypes.func,
};

MenuCard.defaultProps = {
  icon: null,
  tile: false,
}

export { MenuCard };
