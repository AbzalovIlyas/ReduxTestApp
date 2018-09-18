const React = require('react-native');
const { Dimensions } = React;
import { Platform } from 'react-native';

const platform = Platform.OS;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  logo: {
    marginTop: deviceHeight * 0.1919,
    marginLeft: -65,
  },
  focused: {
    marginTop: deviceHeight * 0.1,
    marginLeft: -65,
  },
  logoPic: {
    width: deviceWidth,
  },
  pinContainer: {
    width: deviceWidth * 0.84,
    height: deviceHeight * 0.0659,
    marginTop: deviceHeight * 0.1409,
    alignSelf: 'center',
    zIndex: 20,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 22,
    justifyContent: 'flex-end',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d8d8d8',
  },
  passwordInput: {
    width: deviceWidth * 0.84,
    alignSelf: 'center',
    color: '#000',
    position: 'absolute',
    fontFamily: platform === 'ios' ? 'System' : 'SFUIDisplay',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  eyeContainer: {
    borderLeftWidth: 1,
    borderLeftColor: '#d8d8d8',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingLeft: 8,
    marginRight: 8,
    borderStyle: 'solid',
  },
  eye: {
    width: deviceWidth * 0.048,
    height: deviceHeight * 0.0208,
  },
};
