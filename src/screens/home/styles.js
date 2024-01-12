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
  rowfield: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userlistBox: {
    backgroundColor: COLORS.white,
    elevation: 3,
    width: width * 0.28,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: height * 0.02,
  },
  userList: {
    ...FONTS.fourHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom: -3,
  },
});
