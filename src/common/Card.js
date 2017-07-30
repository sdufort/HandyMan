import React from 'react';
import { View } from 'react-native';
import { CardSection } from './CardSection';

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderColor: '#26537a',
    backgroundColor: '#26537a',
    elevation: 1,
    flexDirection: 'row',
  },
};

const Card = (props) => {
  return (
    <View style={[ styles.containerStyle, props.style ]}>
      { props.children }
    </View>
  );
};

export { Card };
