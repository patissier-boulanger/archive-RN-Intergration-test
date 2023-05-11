import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../redux/modules/authSlice';

export const SignIn = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          password: password,
        }),
      });

      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        Alert.alert(
          '로그인에 실패하였습니다',
          '아이디와 비밀번호를 확인해주세요.',
          [{text: '확인'}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <TextInput
        style={styles.input}
        testID="Id"
        placeholder="ID"
        value={id}
        onChangeText={setId}
      />
      <TextInput
        style={styles.input}
        testID="Password"
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        testID="LoginButton"
        style={styles.button}
        onPress={handleSignIn}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#5B6CF6',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoImage: {
    width: '50%',
    height: '30%',
    resizeMode: 'contain',
  },
});
