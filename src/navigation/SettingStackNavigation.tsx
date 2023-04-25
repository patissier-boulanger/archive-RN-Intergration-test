import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Setting} from '../screens/Setting';
import {EditProfile} from '../screens/EditProfile';

const Stack = createNativeStackNavigator();

export function SettingStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
