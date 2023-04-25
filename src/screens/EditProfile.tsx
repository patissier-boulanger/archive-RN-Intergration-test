import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from 'react-native';

export const EditProfile = ({hasAgeRestriction}: any) => {
  const [age, setAge] = useState('');
  const [ageInputError, setAgeInputError] = useState('');

  const handleBirthdayChange = (value: string) => {
    if (value === '' || /^\d+$/.test(value)) {
      setAge(value);
      setAgeInputError('');
    } else {
      setAge(value);
      setAgeInputError('Birthday must be a number');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <Pressable onPress={dismissKeyboard} style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>User Age</Text>
        <TextInput
          style={[styles.input, !!ageInputError && styles.inputError]}
          testID="Age"
          placeholder="Age"
          value={age}
          onChangeText={handleBirthdayChange}
        />
        {!!ageInputError && (
          <Text style={styles.errorText}>{ageInputError}</Text>
        )}
      </View>
      {hasAgeRestriction && (
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Age Restriction</Text>
          <Switch style={styles.switch} value={false} />
        </View>
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    color: '#666',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
