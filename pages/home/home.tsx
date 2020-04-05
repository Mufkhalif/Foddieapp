import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  titleFood,
  subtitleFood,
  subsemititleFood,
} from '../../constants/fonts/index';
const {width, height} = Dimensions.get('window');

import {
  mostPopular,
  dummyData,
  dummyData2,
  locationPopular,
  allFood,
} from './dummy';

import SliderHome from './components/SliderHome';
import Card from './components/Card';
import CardMini from './components/CardMini';
import LocationCard from './components/LocationCard';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default ({navigation}: any) => {
  const [inActive, setActive] = React.useState(0);

  console.disableYellowBox = true;

  // const listReft = React.useRef('');

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{backgroundColor: '#EAE9FB'}}>
        <SliderHome data={dummyData} />
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...titleFood, color: '#333', fontSize: 14}}>
              Most Popular
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AllFood', {item: allFood})}>
              <Text style={{...subtitleFood, color: 'grey'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={mostPopular}
              renderItem={({item, key}: any) => (
                <Card {...{item, key, navigation}} />
              )}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...titleFood, color: '#333', fontSize: 14}}>
              Meat Deals
            </Text>
            <TouchableOpacity>
              <Text style={{...subtitleFood, color: 'grey'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={dummyData2}
              renderItem={({item, key}: any) => <CardMini {...{item, key}} />}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{...titleFood, color: '#333', fontSize: 14}}>
              Popular Restaurant
            </Text>
            <TouchableOpacity>
              <Text style={{...subtitleFood, color: 'grey'}}>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{marginTop: 10, flexDirection: 'row', marginVertical: 20}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={locationPopular}
              renderItem={({item, key}: any) => (
                <LocationCard {...{item, key}} />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
