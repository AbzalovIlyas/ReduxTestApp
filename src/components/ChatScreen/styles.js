const React = require('react-native');
const { Dimensions } = React;
import { Platform } from 'react-native';

const platform = Platform.OS;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    marginLeft: deviceWidth * 0.04,
    marginRight: deviceWidth * 0.04,
    marginBottom: deviceHeight * 0.03,
    marginTop: deviceHeight * 0.03,
  },
  bubble: {
    left: {
      backgroundColor: '#fff',
      borderRadius: 22,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#d8d8d8',
    },
  },
  circle: {
    left: {
      borderBottomLeftRadius: 22,
      borderTopLeftRadius: 22,
      borderBottomRightRadius: 22,
      borderTopRightRadius: 22,
    },
    right: {
      borderBottomLeftRadius: 22,
      borderTopLeftRadius: 22,
      borderBottomRightRadius: 22,
      borderTopRightRadius: 22,
    },
  },
  text: {
    borderRightWidth: 1,
    borderRightColor: '#d8d8d8',
    paddingRight: deviceWidth * 0.07,
    marginLeft: deviceWidth * 0.04,
  },
  toolbarContainer: {
   flexDirection: 'row',
   flex: 1,
   alignItems: 'flex-end',
 },
  toolbar: {
    borderRadius: 22,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d8d8d8',
  },
  ava: {
    width: deviceWidth * 0.12,
    height: deviceWidth * 0.12,
  },
};
