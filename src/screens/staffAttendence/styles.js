import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  dropdown: {
    alignSelf: 'flex-end',
    width: width * 0.35,
    height: height * 0.043,
    marginVertical: height * 0.02,
  },
  dropcontain: {height: height * 0.18, width: width * 0.35},
});
