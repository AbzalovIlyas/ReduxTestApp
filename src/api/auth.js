import { AsyncStorage } from 'react-native';

export const login = async (password) => {
  try {
    const storedPassword = await AsyncStorage.getItem('AppPassword');

    return storedPassword === password;
  } catch (err) {
    console.log(err);
  }
};
