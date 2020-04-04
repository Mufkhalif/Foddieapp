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
} from '../../../constants/fonts/index';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default ({item}: any) => {
  const [inActive, setActive] = React.useState(0);

  console.disableYellowBox = true;

  return (
    <View style={styles.card}>
      <View style={{flex: 2, backgroundColor: '#fff'}}>
        <Image source={{uri: item.url}} style={{flex: 1}} />
      </View>
      <View style={styles.content}>
        <Text style={{...titleFood, color: '#333', fontSize: 18}}>
          {item.title}
        </Text>
        <View style={styles.subContent}>
          <Text style={styles.titleLocation}>{item.place} Place</Text>
          <View style={{marginTop: 10}}>
            <FontAwesomeIcon icon={faChevronRight} color="#ccc" size={14} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    height: 200,
    width: 150,
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleLocation: {
    ...subsemititleFood,
    color: '#727272',
    fontSize: 14,
    marginTop: 10,
  },
});
