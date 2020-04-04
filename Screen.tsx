import * as React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faCompass,
  faHome,
  faUser,
  faHeart,
  faSearch,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

//comps

import Home from './pages/home';
import Location from './pages/location';
import Favourite from './pages/favourite';
import Account from './pages/account';

const {width, height} = Dimensions.get('window');

function MyTabBar({state, descriptors, navigation, position}: any) {
  return (
    <View style={{flexDirection: 'row', paddingTop: 20}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName;

        if (route.name == 'Home') {
          iconName = faHome;
        } else if (route.name == 'Location') {
          iconName = faCompass;
        } else if (route.name == 'Favourite') {
          iconName = faHeart;
        } else if (route.name == 'Account') {
          iconName = faUser;
        }

        console.log(route.name);

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_: any, i: any) => i);

        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i: number) => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: '#fff',
              alignItems: 'center',
              paddingHorizontal: 5,
            }}>
            <FontAwesomeIcon
              icon={iconName}
              color={isFocused ? '#333' : '#ccc'}
              size={22}
            />
            <View style={{height: 10, width: 10}} />
            {isFocused && (
              <View style={{height: 2, width: 100, backgroundColor: '#333'}} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Screen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            marginTop: 10,
            width,
            height: 40,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <FontAwesomeIcon icon={faBars} color="#ccc" size={22} />
          <Text style={styles.activeTitle}>Restaurants</Text>
          <View style={{width: 60}} />
          <FontAwesomeIcon icon={faSearch} color="#ccc" size={22} />
          <FontAwesomeIcon icon={faBell} color="#ccc" size={22} />
        </View>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            swipeEnabled>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Account" component={Account} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default Screen;

const styles = StyleSheet.create({
  activeTitle: {
    fontSize: 24,
    // fontFamily: 'Poppins-Bold',
    color: '#333',
    fontWeight: 'bold',
  },
});
