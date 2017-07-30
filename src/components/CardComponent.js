import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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

export default class CardComponent extends Component {
  render() {
    const { onPress } = this.props;
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
          <View style={styles.container}>
            <Card style={{ padding: 10 }}>
              <CardSection style={{ borderRadius: 10, justifyContent: 'space-between', alignItems: 'stretch' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text>Hey</Text>
                  </View>
                  <View>
                    <Text>There</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Hey</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Hey</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Hey</Text>
                </View>
              </CardSection>
            </Card>
          </View>
        </TouchableOpacity>
    );
  }
}

CardComponent.PropTypes = {
  onPress: React.PropTypes.func,
};

export { CardComponent };
