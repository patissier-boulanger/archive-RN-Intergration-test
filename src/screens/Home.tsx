import {View, Text} from 'react-native';
import React from 'react';
import {homeContainer} from '../container/homeContainer';

function HomeView() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 64,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 36,
          textAlign: 'center',
        }}>
        Welcome!
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 36,
          textAlign: 'center',
        }}>
        Age Restricted Channel
      </Text>
    </View>
  );
}

export const Home = homeContainer(HomeView);
