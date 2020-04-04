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
import {
  faMapMarkerAlt,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const {width, height} = Dimensions.get('window');

export default ({item}: any) => {
  const [inActive, setActive] = React.useState(0);

  console.disableYellowBox = true;

  return (
    <View style={styles.card}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Image source={{uri: item.url}} style={{flex: 1}} />
      </View>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={{...titleFood, color: '#fff', fontSize: 16}}>
          {item.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    height: 150,
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
  overlay: {
    flex: 1,
    width: 300,
    height: 300,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2,
  },
  content: {
    width,
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
