import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

import {onGestureEvent} from 'react-native-redash';

const {
  cond,
  eq,
  add,
  call,
  set,
  Value,
  event,
  interpolate,
  Extrapolate,
  block,
} = Animated;

export default function App() {
  const dragY = new Value(0);
  const dragX = new Value(0);
  const offsetY = new Value(width / 2);
  const offsetX = new Value(100);
  const gestureState = new Value(-1);
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);

  const addY = add(offsetY, dragY);
  const addX = add(offsetX, dragX);

  const gestureHandler = onGestureEvent({
    translationX,
    velocityX,
    state,
  });

  const onDrop = () => {
    console.log('hello');
  };

  const transY = cond(eq(state, State.ACTIVE), addY, [
    cond(eq(state, State.END), call([addX, addY], onDrop)),
    set(offsetY, addY),
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.dropZone} />
      <PanGestureHandler minDist={0} {...gestureHandler}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  translateX: translationX,
                },
              ],
            },
          ]}
        />
      </PanGestureHandler>
    </View>
  );
}
const CIRCLE_SIZE = 70;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropZone: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.2)',
    height: '50%',
  },
  box: {
    backgroundColor: 'salmon',
    position: 'absolute',
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: '#000',
  },
});
