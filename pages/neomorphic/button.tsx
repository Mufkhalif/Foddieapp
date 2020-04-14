import * as React from 'react';
import {useState, useCallback} from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';

export default () => {
  const [pressIn, setPress] = useState(false);

  const inPress = useCallback(() => {
    setPress(true);
  }, [setPress]);

  const outPress = useCallback(() => {
    setPress(false);
  }, [setPress]);

  return (
    <TouchableWithoutFeedback onPressIn={inPress} onPressOut={outPress}>
      <View style={{height: 160, width: 160}}>
        <View
          style={{
            ...styles.boxContainer,
            shadowOffset: {height: 5, width: 5},
            shadowColor: pressIn ? '#f1fbff' : '#d5dfeb',
          }}></View>
        <View
          style={{
            ...styles.boxContainer,
            shadowOffset: {height: -5, width: -5},
            shadowColor: pressIn ? '#d5dfeb' : '#f1fbff',
            padding: 20,
          }}>
          <FontAwesomeIcon icon={faHeart} color="blue" size={48} />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#333',
              fontSize: 16,
              marginTop: 10,
            }}>
            Arm Training
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#ccc',
              fontSize: 16,
            }}>
            In progress
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    position: 'absolute',
    zIndex: 2,
    height: 160,
    width: 160,
    backgroundColor: '#e3edfa',
    borderRadius: 20,
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});
