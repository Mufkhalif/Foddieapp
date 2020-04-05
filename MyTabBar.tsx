import * as React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCompass,
  faHome,
  faUser,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function MyTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={{flexDirection: 'row', paddingTop: 20}}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];

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
