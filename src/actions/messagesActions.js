import { NavigationActions } from 'react-navigation';

import { storedMessages } from '../api/messages';

export const getMessagesSuccess = (messages) => ({
  type: 'GET_MESSAGES_SUCCESS',
  messages
});

export const getMessagesFailure = (error) => ({
  type: 'GET_MESSAGES_FAILURE',
  error
});

export const getMessages = (data) => (dispatch) => {
  storedMessages(data)
    .then((msgData) => {
      if (msgData.success) {
        try {
          dispatch(getMessagesSuccess(msgData.messages));
        } catch (err) {
          console.log(err);
        }
      } else {
        dispatch(getMessagesFailure(msgData));
      }
    })
    .catch((err) => {
      dispatch(getMessagesFailure(err));
    });

  return {
    type: 'GET_MESSAGES'
  };
};

export const addMessage = (messages) => ({
  type: 'ADD_MESSAGE',
  messages
});
export const removeMessage = (id) => ({
  type: 'REMOVE_MESSAGE',
  id
});
