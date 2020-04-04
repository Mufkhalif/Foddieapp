import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useTimingTransition} from 'react-native-redash';
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
} from '../../constants/fonts/index';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import Card from './component/Card';

const {width} = Dimensions.get('window');

export default ({navigation, route}: any) => {
  const [list, setList] = useState(route.params.item);

  return (
    <View style={{alignSelf: 'center'}}>
      <Text
        style={{
          ...titleFood,
          color: '#333',
          fontSize: 20,
          marginLeft: 10,
          marginTop: 10,
          backgroundColor: 'red',
        }}>
        All food
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({item, key}: any) => (
          <Card {...{item}} id={key + 1} {...{navigation}} />
        )}
      />
      {/* {list.map((item: any, key: number) => {
        return <Card id={key + 1} {...{item}} />;
      })} */}
    </View>
  );
};

interface FoodI {
  id: number;
  item: FoodType;
}

interface FoodType {
  id?: number;
  url: string;
  title: string;
  place: number;
}

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
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
  },
  rightContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
});
