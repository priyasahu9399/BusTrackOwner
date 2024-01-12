import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: width * 0.05,
  },
  busimg: {
    width: width * 0.6,
    height: height * 0.19,
    resizeMode: 'contain',
    alignSelf: 'center',
    opacity: 0.2,
  },
  busimgbox: {
    backgroundColor: '#FFBD82',
    height: height * 0.19,
  },
  hello: {
    color: COLORS.black,
    fontSize: 24,
    ...FONTS.sixHundred,
    marginVertical: width * 0.05,
  },
  rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  icons: {
    width: width * 0.07,
    height: height * 0.03,
    resizeMode: 'contain',
    marginRight: width * 0.02,
    tintColor: COLORS.primary,
  },
  iconsText: {
   //  color: '#717171',
    color: COLORS.gray70,
    fontSize: 14,
    ...FONTS.fourHundred,
    marginBottom:-3
  },
});
