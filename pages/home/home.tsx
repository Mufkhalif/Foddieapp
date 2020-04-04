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

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkedAlt,
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const dummyData = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Beef Thai',
    place: 8,
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    title: 'Egg roll',
    place: 12,
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    title: 'Toast bread with blueberry ',
    place: 8,
  },
];

const dummyData2 = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Burger',
    place: 8,
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'Pizza',
    place: 12,
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Fried Chicken ',
    place: 8,
  },
];

const mostPopular = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1542444256-9dd3e45c9b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80',
    title: 'Arabian Salad',
    place: 8,
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    title: 'Paperoni Pizza',
    place: 12,
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    title: 'Toast bread with blueberry ',
    place: 8,
  },
];

const locationPopular = [
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Kemang',
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Chevron',
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    title: 'Ngopi kuy',
  },
];

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
              onPress={() =>
                navigation.navigate('AllFood', {item: mostPopular})
              }>
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
                <Card item={item} key={key} navigation={navigation} />
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
          <View
            style={{marginTop: 10, flexDirection: 'row', marginVertical: 20}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={dummyData2}
              renderItem={({item, key}: any) => (
                <CardMini item={item} key={key} />
              )}
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
                <LocationCard item={item} key={key} />
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: 300,
    backgroundColor: 'red',
    borderRadius: 5,
    flexDirection: 'column',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 10,
    justifyContent: 'flex-start',
  },
});
