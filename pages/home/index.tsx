import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Detail from './detail';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
