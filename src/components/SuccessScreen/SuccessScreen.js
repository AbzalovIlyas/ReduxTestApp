import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'

import styles from './styles';

class SuccessScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('ChatScreen');}, 1000
    );
  }

  render() {
    const gradientHeight = 1000;
    const gradientBackground  = '#32ccbc';
    const data = Array.from({ length: gradientHeight });
    
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          hidden
          barStyle='light-content'
        />
        {data.map((_, i) => (
          <View
            key={i}
            style={{
              position: 'absolute',
              backgroundColor: gradientBackground,
              height: 1,
              top: ((gradientHeight - i) - 1),
              right: 0,
              left: 0,
              zIndex: 2,
              opacity: (1 / gradientHeight) * (i + 1)
            }}
          />
        ))}
        <Image
          style={styles.iconResult}
          source={require('../../images/success.png')}
        />
      </View>
    );
  }
}

export default SuccessScreen
