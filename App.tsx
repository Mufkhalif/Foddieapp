import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faSearch, faBell} from '@fortawesome/free-solid-svg-icons';

import MyTabBar from './MyTabBar';
import Home from './pages/home/home';
import Location from './pages/location/';
import Favourite from './pages/favourite/';
import Account from './pages/account/';
import Detail from './pages/detailfood/Detail';
import AllFood from './pages/allfood/AllFood';

const {width} = Dimensions.get('window');
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <FontAwesomeIcon icon={faBars} color="#ccc" size={22} />
          <Text style={styles.activeTitle}>Restaurants</Text>
          <View style={{width: 60}} />
          <FontAwesomeIcon icon={faSearch} color="#ccc" size={22} />
          <FontAwesomeIcon icon={faBell} color="#ccc" size={22} />
        </View>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} swipeEnabled>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Location" component={Location} />
          <Tab.Screen name="Favourite" component={Favourite} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="HomeScreen">
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AllFood" component={AllFood} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  activeTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    fontWeight: 'bold',
  },
  header: {
    marginTop: 10,
    width,
    height: 40,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
