import * as React from 'react';
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
import {
  faMapMarkerAlt,
  faChevronLeft,
  faPhone,
  faBoxOpen,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

const {width, height} = Dimensions.get('window');

export default ({route, navigation}: any) => {
  const {item} = route.params;

  return (
    <SafeAreaView>
      <StatusBar translucent barStyle="dark-content" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.buttonBack}>
        <FontAwesomeIcon icon={faChevronLeft} color="#fff" size={25} />
      </TouchableOpacity>
      <View style={{width, height: 300, backgroundColor: 'red'}}>
        <Image source={{uri: item.url}} style={{flex: 1}} />
      </View>
      <View style={styles.buttonTop}>
        <TouchableOpacity>
          <Text style={styles.activeTab}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inActiveTab}>Review</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.inActiveTab}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.mapContainer}>
          <Image
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKA-XOTjgZsQwDxNEYwUCkqvtaOr-_8hwpfusutYlsxuWly5-c&usqp=CAU',
            }}
            style={{flex: 1}}
          />
        </View>
        <View style={styles.rightTab}>
          <Text style={styles.rightTitle}>{item.title}</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 6}}>
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#ccc" size={16} />
            <Text
              style={{
                fontFamily: 'Poppins',
                marginLeft: 5,
                color: 'grey',
                fontSize: 12,
              }}>
              Tebet Barat
            </Text>
          </View>
          <View style={styles.containerSchadule}>
            <Text
              style={{
                fontFamily: 'Poppins',
                marginLeft: 5,
                color: '#56ABE1',
                fontSize: 13,
              }}>
              OPEN 9:30 AM to 10.30 PM
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerLast}>
        <View style={styles.containerContentLast}>
          <FontAwesomeIcon icon={faPhone} color="#ccc" size={24} />
          <View style={{flexDirection: 'column', padding: 10, flex: 2}}>
            <Text style={styles.titleContent}>Contact</Text>
            <Text style={styles.subContent}>+621923898293</Text>
          </View>
          <View style={styles.buttonCall}>
            <Text style={styles.titleCall}>Call</Text>
          </View>
        </View>
        <View style={styles.containerContentLast}>
          <FontAwesomeIcon icon={faBoxOpen} color="#ccc" size={24} />
          <View style={{flexDirection: 'column', padding: 10, flex: 2}}>
            <Text style={styles.titleContent}>Cuisines</Text>
            <Text style={styles.subContent}>asia, thai, korean</Text>
          </View>
        </View>
        <View style={styles.containerContentLast}>
          <FontAwesomeIcon icon={faWallet} color="#ccc" size={24} />
          <View style={{flexDirection: 'column', padding: 10, flex: 2}}>
            <Text style={styles.titleContent}>Average Cost</Text>
            <Text style={styles.subContent}>Rp 3.000 - Rp. 200.000</Text>
          </View>
        </View>
      </View>
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
