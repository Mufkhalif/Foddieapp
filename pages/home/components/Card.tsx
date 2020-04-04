import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  titleFood,
  subtitleFood,
  subsemititleFood,
} from '../../../constants/fonts/index';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default ({item, navigation}: any) => {
  const [inActive, setActive] = React.useState(0);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detail', {
          item,
        })
      }>
      <View style={{flex: 1.6, backgroundColor: '#fff'}}>
        <Image source={{uri: item.url}} style={styles.imageFood} />
      </View>
      <View style={styles.content}>
        <Text style={{...titleFood, color: '#333', fontSize: 18}}>
          {item.title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#ccc" size={16} />
          <Text
            style={{
              marginLeft: 5,
              ...subtitleFood,
              color: 'grey',
              fontSize: 12,
            }}>
            Tebet Barat
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...subsemititleFood,
              color: '#333',
              fontSize: 14,
              marginTop: 10,
            }}>
            Asia, Thai, Indian, Chiness
          </Text>
          <View style={{marginTop: 10}}>
            <FontAwesomeIcon icon={faChevronRight} color="#ccc" size={14} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    marginVertical: 10,
    height: 220,
    width: 300,
    backgroundColor: 'red',
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    shadowOffset: {width: 5, height: 4},
    shadowColor: '#DBDDEC',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  imageFood: {flex: 1, borderTopLeftRadius: 5, borderTopRightRadius: 5},
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
