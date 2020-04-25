import * as React from 'react';
import Swipeable from './Swipeable';

export default () => {
  return <Swipeable />;
};

// import * as React from 'react';
// import {useState, useCallback} from 'react';
// import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
// import Animated, {
//   Value,
//   event,
//   cond,
//   eq,
//   useCode,
//   set,
//   greaterOrEq,
//   interpolate,
//   greaterThan,
//   Extrapolate,
// } from 'react-native-reanimated';
// import {
//   State,
//   PanGestureHandler,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';
// import {useTimingTransition} from 'react-native-redash';

// export default () => {
//   const state = new Value(-1);
//   const dragY = new Value(0);
//   const [expand, setExpand] = useState(false);
//   const valueRotate = useTimingTransition(expand, {duration: 2000});

//   const rotate = interpolate(valueRotate, {
//     inputRange: [0, 1],
//     outputRange: [0, 45],
//     extrapolate: Extrapolate.CLAMP,
//   });

//   const handlerState = event([
//     {
//       nativeEvent: {
//         state: state,
//         translationY: dragY,
//       },
//     },
//   ]);

//   const opacity = cond(eq(state, State.BEGAN), 0.2, 1);
//   const translateY = new Value(0);

//   const y = cond(
//     eq(state, State.ACTIVE),
//     [set(translateY, dragY), translateY],
//     cond(
//       greaterThan(translateY, 200),
//       [set(translateY, 0), translateY],
//       [set(translateY, dragY), translateY],
//     ),
//   );

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <PanGestureHandler
//           onHandlerStateChange={handlerState}
//           onGestureEvent={handlerState}>
//           <Animated.View
//             style={{
//               height: 200,
//               width: 200,
//               backgroundColor: 'salmon',
//               opacity,
//               transform: [{translateY: y}],
//             }}></Animated.View>
//         </PanGestureHandler>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e3edfa',
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
