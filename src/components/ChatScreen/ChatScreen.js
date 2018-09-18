import React, { Component } from 'react';
import { View, StatusBar, Image, TextInput, TouchableWithoutFeedback, Text, AppState } from 'react-native';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { getMessages, addMessage, removeMessage } from '../../actions/messagesActions';
import _ from 'lodash';
import { GiftedChat, Bubble, Composer, Send, MessageText, InputToolbar } from '../ServiceComponents/GiftedChat';

class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);

    this.props.onGetMessages(true);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.messages !== nextProps.messages) {
      this.onSend(nextProps.messages.messages);
    }

    if (nextProps.messages.id) {
      const messages = this.state.messages;
      this.setState({ messages: messages.filter((message) => message._id !== nextProps.messages.id) });

      nextProps.messages = {};
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      this.props.navigation.navigate('PinScreen');
    }
    this.setState({ appState: nextAppState });
  };

  renderAvatar = () => {
    return <Image source={require('../../images/ava.png')} style={styles.ava} />;
  };

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={styles.bubble}
        containerToNextStyle={styles.circle}
        containerToPreviousStyle={styles.circle}
      />
    );
  };

  renderComposer = (props) => {
    return <Composer {...props} textInputStyle={styles.text} />;
  };

  renderInputToolbar = (props) => {
    return (
      <View style={styles.toolbarContainer}>
        <Image source={require('../../images/ava.png')} style={styles.ava} />
        <InputToolbar
          {...props}
          primaryStyle={styles.toolbar}
          containerStyle={{ borderRadius: 22, borderTopWidth: 0 }}
        />
      </View>
    );
  };

  _addMessage = (message) => {
    const constructedMessage = {
      _id: this.state.messages.length + 1,
      text: message[0].text,
      createdAt: new Date,
      user: {},
      image: '',
    };

    this.props.onAddMessage(constructedMessage);
  };

  _removeMessage = (id) => {
    this.props.onRemoveMessage(id);
  };

  onSend = (messages = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  };

  render() {
    const messages = _.sortBy(this.state.messages, [function(o) { return o._id; }]);
    
    return (
      <View style={styles.container}>
        <StatusBar hidden barStyle="light-content" />
        <GiftedChat
          renderInputToolbar={this.renderInputToolbar}
          alwaysShowSend
          renderBubble={this.renderBubble}
          renderComposer={this.renderComposer}
          removeMessage={(id) => {
            this._removeMessage(id);
          }}
          inverted={false}
          showAvatarForEveryMessage
          renderAvatarOnTop
          showUserAvatar
          renderTime={() => {
            null;
          }}
          renderDay={() => {
            null;
          }}
          placeholder={'Напишите что-то...'}
          renderAvatar={this.renderAvatar}
          messages={messages}
          onSend={(messages) => this._addMessage(messages)}
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({ error: false, messages: state.messages, id: state.id }),
  (dispatch) => ({
    onGetMessages: (data) => {
      dispatch(getMessages(data));
    },
    onAddMessage: (newMsg) => {
      dispatch(addMessage(newMsg));
    },
    onRemoveMessage: (id) => {
      dispatch(removeMessage(id));
    }
  })
)(ChatScreen);
