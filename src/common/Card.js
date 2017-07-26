import React from 'react';
import { View } from 'react-native';
import { CardSection } from './CardSection';

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    padding: 10,
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
