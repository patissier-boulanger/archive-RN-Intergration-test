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

import {startServer} from './util/startServer';

startServer();

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
          <Text>{text}</Text>
          <Button
            testID="BUTTON"
            title="TEST BUTTON"
            onPress={async () => {
              console.log('BUTTON PRESS STARTED');
              try {
                console.log('11 -- PRESSED -- 11');
                try {
                  const response = await fetch('/api/movies');
                  if (response.ok) {
                    setText('OK');
                  } else {
                    setText('FAILED');
                  }
                } catch (error) {
                  console.error(error);
                }
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
