import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useTimingTransition} from 'react-native-redash';
import Animated, {
  Value,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
const {width} = Dimensions.get('window');

export default ({navigation, route}) => {
  const [list, setList] = React.useState(route.params.item);
  return (
    <View>
      <Text>All food</Text>
      {list.map((item: any, key: number) => (
        <Card id={key + 1} {...item} />
      ))}
    </View>
  );
};

function Card({id, item}: any) {
  const [isOpen, setOpen] = React.useState(false);
  const status = useTimingTransition(isOpen, {duration: 400 * id});

  const transX = interpolate(status, {
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Animated.View
      style={{
        marginTop: 10,
        width,
        height: 200,
        backgroundColor: 'red',
        transform: [{translateX: transX}],
      }}></Animated.View>
  );
}
