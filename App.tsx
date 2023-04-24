/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [text, setText] = useState('NOT PRESSED');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text
            style={{
              fontSize: 64,
            }}>
            {text}
          </Text>

          <Button
            testID="BUTTON"
            title="TEST BUTTON"
            onPress={async () => {
              console.log('BUTTON PRESS STARTED');

              try {
                setText('PRESSED');

                console.log('11 -- PRESSED -- 11');

                console.log('22 -- PRESSED -- 22');
              } catch (error) {
                console.error(error);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
