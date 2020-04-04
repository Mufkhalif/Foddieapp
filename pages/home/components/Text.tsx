import * as React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {titleFood, subtitleFood} from '../../../constants/fonts/index';

export default (props: any) => {
  return (
    <Text style={{...titleFood, color: '#333', ...props.fontSize}}>
      {props.children}
    </Text>
  );
};
