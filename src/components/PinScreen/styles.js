const React = require('react-native');
const { Dimensions } = React;
import { Platform } from 'react-native';

const platform = Platform.OS;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  logo: {
    width: deviceWidth * 0.6266,
    height: deviceHeight * 0.1,
    zIndex: 20,
    top: deviceHeight * 0.0539,
    left: deviceWidth * 0.08,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: deviceHeight * 0.16,
    zIndex: 20,
    justifyContent: 'center', 
  },
  circle: {
    width: deviceWidth * 0.0373,
    height: deviceWidth * 0.0373,
    borderColor: '#fff',
    borderRadius: (deviceWidth * 0.0373) / 2,
    borderStyle: 'solid',
    borderWidth: 2,
    marginLeft: deviceWidth * 0.042,
    marginRight: deviceWidth * 0.042,
  },
  picContainer: {
    flexDirection: 'column',
    marginTop: deviceHeight * 0.04,
    zIndex: 20,
  },
  pinRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: deviceHeight * 0.025,
  },
  pinRowLast: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: deviceHeight * 0.025,
    marginRight: 28,
  },
  button: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    width: deviceWidth * 0.21,
    height: deviceWidth * 0.21,
    borderColor: '#fff',
    borderRadius: (deviceWidth * 0.21) / 2,
    borderStyle: 'solid',
    borderWidth: 2,
    marginLeft: deviceWidth * 0.035,
    marginRight: deviceWidth * 0.035,
  },
  buttonText: {
    fontFamily: platform === 'ios' ? 'System' : 'SFUIDisplay',
    fontSize: 36.5,
    fontWeight: '100',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 5,
    backgroundColor: 'transparent',
  },
  buttonDel: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    width: deviceWidth * 0.21,
    height: deviceWidth * 0.21,
    borderColor: 'transparent',
    borderRadius: (deviceWidth * 0.21) / 2,
    borderStyle: 'solid',
    borderWidth: 1,
    marginLeft: deviceWidth * 0.035,
    marginRight: deviceWidth * 0.035,
  },
  picDel: {
    width: deviceWidth * 0.12,
    height: deviceHeight * 0.05,
  },
};
