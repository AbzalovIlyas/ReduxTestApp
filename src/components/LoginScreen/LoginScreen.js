import React, { Component } from 'react';
import { View, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';

import Image from 'react-native-remote-svg';

import { setPin, fetchPin } from '../../api/pin';

import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordInvisible: true,
      focused: false
    };
  }

  async componentDidMount() {
    const storedPin = await fetchPin();

    if (storedPin === null) {
      console.log('None pins is setted');
    } else {
      this.props.navigation.navigate('PinScreen');
    }
  }

  passwordSecureController = () => {
    this.setState({ passwordInvisible: !this.state.passwordInvisible });
  };

  navigationCheckout = (symbols, password) => {
    if (symbols === 3) {
      this.props.navigation.navigate('ChatScreen');

      setPin(password);
    }
  };

  render() {
    const gradientHeight = 1000;
    const gradientBackground = '#32ccbc';
    const data = Array.from({ length: gradientHeight });

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden barStyle="light-content" />
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              top: gradientHeight - i - 1,
              right: 0,
              left: 0,
              zIndex: 0,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}
        <View style={this.state.focused ? styles.focused : styles.logo}>
          <Image source={require('../../images/logo.svg')} style={styles.logoPic} />
        </View>
        <View style={styles.pinContainer}>
          <View style={styles.container}>
            <TextInput
              maxLength={4}
              textAlign={'center'}
              allowFontScaling={false}
              secureTextEntry={this.state.passwordInvisible}
              placeholderTextColor="#fff"
              placeholder=""
              value={this.state.password}
              keyboardType="numeric"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              style={styles.passwordInput}
              onChangeText={(password) => {
                this.setState({ password });
                this.navigationCheckout(this.state.password.length, password);
              }}
              onFocus={() => {
                this.setState({ focused: true });
              }}
              onEndEditing={() => {
                this.setState({ focused: false });
              }}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                this.passwordSecureController();
              }}
            >
              <View style={styles.eyeContainer}>
                <Image style={styles.eye} source={require('../../images/open_eye.png')} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
