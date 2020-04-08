import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const {width} = Dimensions.get('window');

export default ({active, onActive, tabItem}: any) => {
  const [list, setList] = useState(tabItem ? tabItem : []);

  return (
    <View style={styles.buttonTop}>
      {list.map((item: string) => {
        return (
          <TouchableOpacity key={item} onPress={() => onActive(item.toLowerCase())}>
            <Text
              style={
                active == item.toLocaleLowerCase()
                  ? styles.activeTab
                  : styles.inActiveTab
              }>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
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

  activeTab: {fontFamily: 'Poppins-Bold', fontSize: 15, color: '#333'},
  inActiveTab: {fontFamily: 'Poppins-Medium', fontSize: 15, color: '#333'},
});
