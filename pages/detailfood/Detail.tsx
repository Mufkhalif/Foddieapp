import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';

import Tab from './component/Tab';
import GeneralStatusBarColor from '../../basecomponents/GeneralStatusBarColor';

const {width} = Dimensions.get('window');

export default ({route, navigation}: any) => {
  const {item} = route.params;
  const [active, setActive] = useState('about');
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'absolute',
          width,
          paddingHorizontal: 20,
          paddingTop: 10,
          zIndex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#fff', padding: 10, borderRadius: 30}}>
          <FontAwesomeIcon icon={faHeart} color="red" size={18} />
        </TouchableOpacity>
      </View>
      <View style={{width, height: 300, backgroundColor: 'red'}}>
        <Image source={{uri: item.url}} style={{flex: 1}} />
      </View>
      <View style={styles.buttonTop}>
        <TouchableOpacity onPress={() => setActive('about')}>
          <Text style={styles.activeTab}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive('review')}>
          <Text style={styles.inActiveTab}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive('gallery')}>
          <Text style={styles.inActiveTab}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <Tab {...{route, navigation, active}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonBack: {
    top: 10,
    position: 'absolute',
    zIndex: 20,
    left: 10,
    padding: 10,
  },
  containerLast: {
    marginTop: 10,
    width: width - 30,
    backgroundColor: '#fff',
    height: 210,
    alignSelf: 'center',
    borderRadius: 5,
    shadowOffset: {width: 5, height: 4},
    shadowColor: '#DBDDEC',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  containerContentLast: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  titleContent: {
    marginLeft: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#333',
  },
  subContent: {
    marginLeft: 5,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  buttonCall: {
    backgroundColor: '#C1E6E6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  titleCall: {
    color: '#71C7AF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTop: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: width - 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -25,
    borderRadius: 20,
    shadowOffset: {width: 5, height: 4},
    shadowColor: '#DBDDEC',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  middleContainer: {
    marginTop: 10,
    alignSelf: 'center',
    height: 150,
    backgroundColor: '#fff',
    width: width - 30,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    shadowOffset: {width: 5, height: 4},
    shadowColor: '#DBDDEC',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  mapContainer: {
    width: 120,
    backgroundColor: 'red',
    borderRadius: 5,
    overflow: 'hidden',
  },
  containerSchadule: {
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C8E4FA',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  activeTab: {fontFamily: 'Poppins-Bold', fontSize: 15, color: '#333'},
  inActiveTab: {fontFamily: 'Poppins-Medium', fontSize: 15, color: '#333'},
  rightTab: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rightTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#333',
    width: 150,
  },
});
