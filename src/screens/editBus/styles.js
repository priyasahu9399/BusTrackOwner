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
  busimg: {
    resizeMode: 'contain',
    width: width * 0.8,
    height: height * 0.25,
  },
  busimgbox: {
    width: width,
    height: height * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editbox: {
    position: 'absolute',
    right: 15,
    top: 10,
    padding: width * 0.02,
  },
  edit: {
    width: width * 0.05,
    height: height * 0.03,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.007,
    justifyContent: 'center',
  },
  marginTop: {
    marginTop: height * 0.03,
  },
  headname: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    width: width * 0.4,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
    width: width * 0.5,
  },
  redText: {
    ...FONTS.fiveHundred,
    color: '#F01D0D',
    fontSize: 13,
    marginBottom: height * 0.005,
  },
  redbox: {marginTop: height * 0.015, width: width * 0.4},
});
