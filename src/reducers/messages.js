import { getMessages, addMessage, removeMessage } from "../actions/messagesActions";

const initialState = {};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES_SUCCESS':
      return { messages: action.messages };

    case 'ADD_MESSAGE':
      return { messages: action.messages };

    case 'REMOVE_MESSAGE':
      return { id: action.id };

    default:
      return state;
  }
};

export default messageReducer;