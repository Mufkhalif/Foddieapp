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

  React.useEffect(() => {
    fetch('http://192.168.0.102/api/masjid/getMasjid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        TTOKEN:
          'eyJpdiI6ImJHWDVWQktZTUduc0RwdUt2Kytjc2c9PSIsInZhbHVlIjoiYXVQZVNZZ25UeXdjNTZjMkxxeW5JTWFZdHVzVnNkT0lndVwvTm1XNGZFQ1NCc2E1R056bzZJM05cL0huRFlERmJVaWRVZ2JOeGU2VjdLVEtqZWlOd1U5Q2U0MG8wOWpFVk9DbERtbkVyY2w4dVNLdWk5OG5Jek9qa1g3MFA5aEZCaCIsIm1hYyI6Ijg4MjJhYjhkNGFjMDEzOWZhMmRjMWJjNjFiNTVlMjlkMjM5ZDE2OWVlZGNhMTJkNTNhMWVhNTdhMzJlMzk1YzIifQ==',
      },
      body: JSON.stringify({
        offset: 2,
        keyword: 'istiqlal',
      }),
    })
      .then((Response) => Response.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

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
