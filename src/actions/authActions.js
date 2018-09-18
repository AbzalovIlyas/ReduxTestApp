import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import callApi from '../helpers/api';

export const signUpSuccess = (userData) => ({
  type: 'SIGN_UP_SUCCESS',
  userData
});

export const signUpFailure = (error) => ({
  type: 'SIGN_UP_FAILURE',
  error
});

export const signUp = (data) => (dispatch) => {
  callApi({
    type: 'signUp',
    timeOut: 1000
  })
    .then((userData) => {
      if (userData.success) {
        try {
          AsyncStorage.setItem('appPassword', userData.token)
            .then(() => {
              dispatch(signUpSuccess(userData.user));
              dispatch(
                NavigationActions.reset({
                  index: 0,
                  key: null,
                  actions: [NavigationActions.navigate({ routeName: 'ChatScreen' })]
                })
              );
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        dispatch(signUpFailure(userData.message));
      }
    })
    .catch((err) => {
      dispatch(signUpFailure(err));
    });
  return {
    type: 'SIGN_UP'
  };
};

export const signInSuccess = (userData) => ({
  type: 'SIGN_IN_SUCCESS',
  userData
});

export const signInFailure = (error) => ({
  type: 'SIGN_IN_FAILURE',
  error
});

export const signIn = (data) => (dispatch) => {
  callApi({
    type: 'login',
    timeOut: 1000
  })
    .then((response) => response.json())
    .then((userData) => {
      if (!userData.error) {
        try {
          AsyncStorage.setItem('appPassword', userData.token).then(() => {
            dispatch(signInSuccess(userData.user));
            dispatch(
              NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'UserAccount' })]
              })
            );
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        dispatch(signInFailure(userData.message));
      }
    })
    .catch((err) => {
      dispatch(signInFailure(err));
    });
  return {
    type: 'SIGN_IN'
  };
};
