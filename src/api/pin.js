import { AsyncStorage } from 'react-native';

export const setPin = async (password) => {
  try {
    return await AsyncStorage.setItem('AppPassword', password);
  } catch (err) {
    console.log(err);
  }
};

export const fetchPin = async () => {
  try {
    const password: string | null = await AsyncStorage.getItem('AppPassword');
    if (password !== null) {
      return password;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
