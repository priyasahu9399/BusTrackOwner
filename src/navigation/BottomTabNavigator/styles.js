import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    width: width * 0.08,
    height: height * 0.046,
    resizeMode: 'stretch',
    marginHorizontal: width * 0.03,
    tintColor: COLORS.black,
  },
  notification: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'stretch',
    tintColor: COLORS.black,
    marginHorizontal: width * 0.04,
  },
  logoText: {
    color: COLORS.primary,
    fontSize: 18,
    ...FONTS.sixHundred,
    marginBottom: -4,
  },
  logoicon: {
    width: width * 0.16,
    height: height * 0.06,
    resizeMode: 'stretch',
  },
  icon_set: {
    marginTop: height * 0.01,
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'stretch',
    marginBottom: -2,
  },
  tablebal: {
    ...FONTS.fiveHundred,
    fontSize: 12,
  },
  headerTitle: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 18,
  },
});
