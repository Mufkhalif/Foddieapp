import * as React from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import {useSpringTransition} from 'react-native-redash';
import Animated, {
  Value,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import SpringContainer from './SpringContainer';
import {titleFood} from '../../../constants/fonts';

const {width, height} = Dimensions.get('window');

export default ({route, navigation, active}: any) => {
  const {item} = route.params;

  const status = useSpringTransition(active == 'review' ? true : false);

  const transX = interpolate(status, {
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  return (
    <Animated.View style={{transform: [{translateX: transX}]}}>
      <View style={styles.middleContainer}>
        <View style={styles.headerCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1586232903370-8bca5d0e3c50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              }}
              style={{flex: 1}}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'column',
            }}>
            <Text style={styles.fontUser}>Jhonson walker</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.fontReview}>130 Reviews</Text>
              <Text style={styles.fontFollower}>2k Followers</Text>
            </View>
          </View>
          <View style={styles.buttonCall}>
            <Text style={styles.titleCall}>Follow</Text>
          </View>
        </View>
        <View style={{marginRight: 5, flexDirection: 'row', marginTop: 5}}>
          <View style={{marginRight: 5}}>
            <FontAwesomeIcon icon={faStar} color={'#FFC357'} size={15} />
          </View>
          <View style={{marginRight: 5}}>
            <FontAwesomeIcon icon={faStar} color={'#FFC357'} size={15} />
          </View>
          <View style={{marginRight: 5}}>
            <FontAwesomeIcon icon={faStar} color={'#FFC357'} size={15} />
          </View>
          <View style={{marginRight: 5}}>
            <FontAwesomeIcon icon={faStar} color={'#FFC357'} size={15} />
          </View>
          <View style={{marginRight: 5}}>
            <FontAwesomeIcon icon={faStar} color={'#ccc'} size={15} />
          </View>
        </View>
        <View style={{height: 80, marginTop: 5}}>
          <Text style={{textAlign: 'left'}}>
            readable content of a page when looking at its layout. The point of
            using Lorem Ip using Lorem Ipsum is that it has a more-or-less
            normal dis like).
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  middleContainer: {
    marginTop: 10,
    alignSelf: 'center',
    // height: 260,
    backgroundColor: '#fff',
    width: width - 30,
    marginHorizontal: 20,
    borderRadius: 5,
    padding: 10,
    shadowOffset: {width: 5, height: 4},
    shadowColor: '#DBDDEC',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonCall: {
    backgroundColor: '#C1E6E6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  titleCall: {
    color: '#71C7AF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerCard: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 25,
    overflow: 'hidden',
  },
  fontReview: {
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#333',
  },
  fontFollower: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#333',
  },
  fontUser: {...titleFood, color: '#333', fontSize: 16, width: 190},
});
