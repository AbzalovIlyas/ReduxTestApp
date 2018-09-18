const React = require('react-native');
const { Dimensions } = React;

const deviceWidth = Dimensions.get('window').width;

export default {
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  iconResult: {
    width: deviceWidth * 0.4826,
    height: deviceWidth * 0.4826,
    zIndex: 20,
  },
};
