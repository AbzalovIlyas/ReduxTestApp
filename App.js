import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import navigation from './src/reducers/navigation';
import messages from './src/reducers/messages';
import storage from 'redux-persist/lib/storage';

import Routes from './src/routes';

const config = {
  key: 'primary',
  storage
};

const reducer = combineReducers({ navigation, messages });
const store = createStore(reducer, applyMiddleware(thunk), applyMiddleware(logger));

// persistStore(store, null, () => {
//   store.getState();
// });

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Routes />
      </Provider>
    );
  }
}
