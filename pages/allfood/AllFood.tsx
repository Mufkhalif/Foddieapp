import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList, StyleSheet} from 'react-native';
import Animated, {
  Value,
  interpolate,
  Extrapolate,
  useCode,
  block,
  cond,
  timing,
  Clock,
  clockRunning,
  not,
  add,
  set,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  onGestureEvent,
  withSpring,
  clamp,
  withTimingTransition,
} from 'react-native-redash';

import Card from './component/Card';

const {width, height} = Dimensions.get('window');

const snapTop = height - 40;

export default ({navigation, route}: any) => {
  const list = route.params.item;
  const state = new Value(State.UNDETERMINED);
  const translationY = new Value(0);
  const velocityY = new Value(0);
  const offset = new Value(600);
  const goUp: Animated.Value<0 | 1> = new Value(0);
  const goDown: Animated.Value<0 | 1> = new Value(0);

  const config = {
    damping: 15,
    mass: 1,
    stiffness: 150,
    overshootClamping: false,
    restSpeedThreshold: 0.1,
    restDisplacementThreshold: 0.1,
  };

  const gestureHandler = onGestureEvent({
    state,
    translationY,
    velocityY,
  });

  const translateY = withSpring({
    offset,
    value: translationY,
    velocity: velocityY,
    state,
    snapPoints: [0, 600],
    config,
  });

  const val = cond(1, set(goUp, 0));

  const clock = new Clock();
  const [animated, setAnimated] = React.useState(1);

  useCode(() => cond(animated, set(offset, 600), [set(offset, 0)]), []);

  return (
    <>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            zIndex: 10,
            position: 'absolute',
            width,
            height,
            backgroundColor: '#FFC357',
            transform: [{translateY}],
          }}>
          <TouchableOpacity onPress={() => setAnimated(0)}>
            <Text>close tab</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAnimated(1)}>
            <Text>Open tab</Text>
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
      <View style={{alignSelf: 'center'}}>
        <View style={{margin: 10}}>
          <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
            All Food
          </Text>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={({item, key}: any) => (
            <Card {...{item, key, navigation}} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
