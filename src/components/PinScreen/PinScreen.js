import React, { Component } from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';

import { login } from '../../api/auth';
 
import styles from './styles';

class PinScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      passwordCount: 0
    };
  }

  navigationCheckout = (symbols) => {
    if (symbols === 3) {
      this.props.navigation.navigate('SuccessScreen');
    }
  };

  _login = async (symbols, password) => {
    const result = await login(password);

    if (result) {
      this.navigationCheckout(symbols);
    } else {
      this.props.navigation.navigate('ErrorScreen');
    }
  };

  renderKeyBoardButton = (number) => {
    return (
      <TouchableOpacity
        disabled={this.state.passwordCount >= 4}
        onPress={async () => {
          if (this.state.passwordCount < 4) {
            this.setState({
              password: this.state.password + number,
              passwordCount: this.state.passwordCount + 1
            });
          }

          if (this.state.passwordCount === 3) {
            this._login(this.state.passwordCount, this.state.password + number);
          }
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{number}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderDeleteButton = () => {
    return (
      <TouchableOpacity
        disabled={this.state.passwordCount <= 0}
        onPress={() => {
          if (this.state.passwordCount > 0) {
            this.setState({
              password: this.state.password.slice(0, -1),
              passwordCount: this.state.passwordCount - 1
            });
          }
        }}
      >
        <View style={styles.buttonDel}>
          <Image style={styles.picDel} source={require('../../images/delete.png')} />
        </View>
      </TouchableOpacity>
    );
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
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}
        <Image style={styles.logo} source={require('../../images/logoPin.png')} />
        <View style={styles.dotContainer}>
          <View style={[styles.circle, this.state.passwordCount >= 1 ? { backgroundColor: '#fff' } : undefined]} />
          <View style={[styles.circle, this.state.passwordCount >= 2 ? { backgroundColor: '#fff' } : undefined]} />
          <View style={[styles.circle, this.state.passwordCount >= 3 ? { backgroundColor: '#fff' } : undefined]} />
          <View style={[styles.circle, this.state.passwordCount >= 4 ? { backgroundColor: '#fff' } : undefined]} />
        </View>
        <View style={styles.picContainer}>
          <View style={styles.pinRow}>
            {this.renderKeyBoardButton('1')}
            {this.renderKeyBoardButton('2')}
            {this.renderKeyBoardButton('3')}
          </View>
          <View style={styles.pinRow}>
            {this.renderKeyBoardButton('4')}
            {this.renderKeyBoardButton('5')}
            {this.renderKeyBoardButton('6')}
          </View>
          <View style={styles.pinRow}>
            {this.renderKeyBoardButton('7')}
            {this.renderKeyBoardButton('8')}
            {this.renderKeyBoardButton('9')}
          </View>
          <View style={styles.pinRowLast}>
            {this.renderKeyBoardButton('0')}
            {this.renderDeleteButton()}
          </View>
        </View>
      </View>
    );
  }
}

export default PinScreen;
