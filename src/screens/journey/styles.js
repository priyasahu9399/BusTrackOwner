import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from './../../constants/index';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  mapview: {width: width * 0.9, height: height * 0.5},
  mapimage: {
    width: width * 0.06,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  location: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
    marginRight: width * 0.03,
  },
  rowfield: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationHeading: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
  },
  time: {
    ...FONTS.fiveHundred,
    color: COLORS.gray50,
    fontSize: 12,
  },
  borderheight: {
    borderColor: '#FF0000',
    height: height * 0.25,
    borderRightWidth: 2,
    width: width * 0.01,
    marginLeft: width * 0.022,
    marginVertical: height * -0.01,
    borderStyle: 'dashed',
    // marginBottom:height * -0.01
  },
  redbus: {
    width: width * 0.16,
    height: height * 0.05,
    resizeMode: 'stretch',
    marginRight: width * 0.02,
    borderRadius: 6,
  },
});
