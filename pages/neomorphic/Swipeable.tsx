import * as React from 'react';
import {useState, useCallback} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Dimensions} from 'react-native';
import Animated, {Value} from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {onGestureEvent} from 'react-native-redash';
const {width, height} = Dimensions.get('window');

export default () => {
  const translationY = new Value(0);
  const gesturehandler = onGestureEvent({translationY});

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Selamat datang</Text>
        <PanGestureHandler {...gesturehandler}>
          <Animated.View
            style={{
              position: 'absolute',
              height,
              backgroundColor: 'red',
              transform: [{translateY: translationY}],
            }}></Animated.View>
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3edfa',
  },
});
