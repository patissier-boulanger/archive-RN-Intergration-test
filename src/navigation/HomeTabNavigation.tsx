import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Setting} from '../screens/Setting';

const Tab = createBottomTabNavigator();

export function HomeTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
