import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import LoginScreen from './components/LoginScreen/LoginScreen';
import ChatScreen from './components/ChatScreen/ChatScreen';
import PinScreen from './components/PinScreen/PinScreen';
import SuccessScreen from './components/SuccessScreen/SuccessScreen';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';

import { LOGIN, CHAT, LOCK, SUCCESS, ERROR } from './constants/screens';

export const Navigator = new StackNavigator(
  {
    [LOGIN]: { screen: LoginScreen },
    [CHAT]: { screen: ChatScreen },
    [LOCK]: { screen: PinScreen },
    [SUCCESS]: { screen: SuccessScreen },
    [ERROR]: { screen: ErrorScreen }
  },
  {
    initialRouteName: LOGIN
  }
);

class Nav extends Component {
  render() {
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navigation
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  navigation: state.navigation,
  messages: state.messages
});

export default connect(mapStateToProps)(Nav);
