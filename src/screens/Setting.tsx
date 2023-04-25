import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Setting = () => {
  const navigation = useNavigation<any>();

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container} testID="SettingPage">
      <View style={styles.userInfoContainer}>
        <Image
          source={{uri: 'https://placekitten.com/200/200'}}
          style={styles.avatar}
        />
        <Text style={styles.nickname}>User</Text>
      </View>
      <TouchableOpacity
        testID="NavigateToEditProfile"
        onPress={handleEditProfilePress}
        style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>Version Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editProfileButton: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  listButton: {
    padding: 10,
  },
  listButtonText: {
    fontSize: 16,
  },
});
