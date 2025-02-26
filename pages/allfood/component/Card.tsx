import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import {useTimingTransition, useSpringTransition} from 'react-native-redash';
import Animated, {
  Value,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import {
  titleFood,
  subtitleFood,
  subsemititleFood,
  descRegion,
} from '../../../constants/fonts/index';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

interface FoodI {
  id?: number;
  item: FoodType;
  navigation: any;
  key: number;
}

interface FoodType {
  id?: number;
  url: string;
  title: string;
  place: number;
}

export default ({key, item, navigation, id}: FoodI) => {
  const [isOpen, setOpen] = useState(false);

  const status = useSpringTransition(isOpen);

  const transX = interpolate(status, {
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  useEffect(() => {
    setOpen(true);
  }, []);

  const setActive = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Detail', {item})}>
      <Animated.View
        style={{
          ...styles.card,
          transform: [{translateX: transX}],
        }}>
        <View style={styles.leftContent}>
          <Image source={{uri: item.url}} style={{flex: 1}} />
        </View>
        <View style={styles.rightContent}>
          <Text style={{...titleFood, color: '#333', fontSize: 16}}>
            {item.title}
          </Text>
          <Text style={{...descRegion, color: 'grey'}}>India, Thai, Asia</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <View style={{marginRight: 5}}>
              <FontAwesomeIcon icon={faStar} color={'#FFC357'} size={14} />
            </View>
            <Text style={{color: 'grey', fontSize: 12, marginRight: 5}}>
              3.5 (145) Reviews
            </Text>
            <Text style={{color: 'grey', fontSize: 12, fontWeight: 'bold'}}>
              Rp. 32.000
            </Text>
          </View>
          <TouchableNativeFeedback
            onPress={() => console.log('Selamat datang')}>
            <View style={styles.buttonBuy}>
              <Text>Buy</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  leftContent: {
    alignSelf: 'center',
    width: 90,
    height: 90,
    backgroundColor: 'red',
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  card: {
    marginTop: 10,
    width: width - 15,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
  },
  rightContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  buttonBuy: {
    marginTop: 10,
    backgroundColor: '#FFC357',
    width: 50,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
});
