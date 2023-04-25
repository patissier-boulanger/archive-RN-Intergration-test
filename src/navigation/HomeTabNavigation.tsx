import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingStackNavigation} from './SettingStackNavigation';

import {Home} from '../screens/Home';

const Tab = createBottomTabNavigator();

export function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingStackNavigation} />
    </Tab.Navigator>
  );
}
