import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
const {width} = Dimensions.get('window');

const HEADER_HEIGHT = 60;
const {diffClamp, interpolate} = Animated;

export default ({y}: any) => {
  const diffClampY = diffClamp(y, 0, HEADER_HEIGHT);
  const translateY = interpolate(diffClampY, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });

  return (
    <Animated.View
      style={{
        zIndex: 2,
        top: -10,
        height: HEADER_HEIGHT,
        position: 'absolute',
        width,
        backgroundColor: '#Fff',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          {
            translateY,
          },
        ],
      }}>
      <Text>Header</Text>
    </Animated.View>
  );
};
