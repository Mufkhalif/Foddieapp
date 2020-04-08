import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import Tab from './component/Tab';
import TopTab from './component/TopTab';

const {width} = Dimensions.get('window');
const tabItem = ['About', 'Review', 'Gallery'];

export default ({route, navigation}: any) => {
  const {item} = route.params;
  const [active, setActive] = useState('about');
  return (
    <SafeAreaView>
      <View style={styles.buttonBack}>
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
      <TopTab {...{active, onActive: setActive, tabItem}} />
      <Tab {...{route, navigation, active}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  buttonBack: {
    position: 'absolute',
    width,
    paddingHorizontal: 20,
    paddingTop: 10,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTab: {fontFamily: 'Poppins-Bold', fontSize: 15, color: '#333'},
  inActiveTab: {fontFamily: 'Poppins-Medium', fontSize: 15, color: '#333'},
});
