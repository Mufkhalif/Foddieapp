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
import {faSearch} from '@fortawesome/free-solid-svg-icons';
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
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          marginVertical: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            flex: 3,
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faSearch} color={'#ccc'} size={14} />
            <Text style={{marginLeft: 10, color: '#ccc'}}>Search</Text>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item, key}: any) => <Card {...{item, key, navigation}} />}
      />
    </View>
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
