import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    width: width * 0.92,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  signin: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.03,
    marginBottom: height * 0.1,
  },
  agree: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: COLORS.lightblack,
    marginHorizontal: width * 0.01,
  },
  blueText: {
    fontSize: 12,
    ...FONTS.fiveHundred,
    color: '#1080E9',
  },
  label: {
    ...FONTS.fiveHundred,
    fontSize: 15,
    color: COLORS.black,
    marginBottom: height * -0.03,
  },
});
