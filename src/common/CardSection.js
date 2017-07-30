import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderColor: '#26537a',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
  },
};

const CardSection = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={[ styles.containerStyle, props.style ]}>
        { props.children }
      </View>
    </View>
  );
};

export { CardSection };
