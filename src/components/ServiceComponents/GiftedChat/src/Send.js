/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Send({ text, containerStyle, onSend, children, textStyle, label }) {
  if (text.trim().length > 0) {
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={() => {
          onSend({ text: text.trim() }, true);
        }}
        accessibilityTraits="button"
      >
        <Icon name='md-send' size={27} style={[styles.icon, {color: '#32ccbc'}]} />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={() => {
          onSend({ text: text.trim() }, true);
        }}
        accessibilityTraits="button"
      >
        <Icon name='md-send' size={27} style={[styles.icon, {color: '#d8d8d8'}]} />
      </TouchableOpacity>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'center',
  },
  icon: {
    marginTop: 3,
    marginLeft: 8,
    marginRight: 8,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  containerStyle: {},
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  containerStyle: ViewPropTypes.style,
};
