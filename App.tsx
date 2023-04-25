import React from 'react';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {startServer} from './mocks/startServer';
import {SignIn} from './src/screens/SignIn';
import {HomeTabNavigation} from './src/navigation/HomeTabNavigation';

startServer();

const Stack = createNativeStackNavigator();

const App = () => {
  const isAuthenticated = useSelector<{
    auth: {
      loggedIn: boolean;
    };
  }>(state => state.auth.loggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen
              name="HomeTabNavigation"
              component={HomeTabNavigation}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
