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
    marginBottom: height * 0.02,
  },
  rowField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  photoBox: {
    borderWidth: 1,
    width: width * 0.3,
    height: height * 0.15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightgray,
    borderRadius: 60,
    borderColor: COLORS.gray30,
    marginTop: height * 0.03,
  },
  photo: {
    width: width * 0.3,
    height: height * 0.15,
    resizeMode: 'contain',
    borderRadius: 60,
  },
  photoText: {
    alignSelf: 'center',
    ...FONTS.fourHundred,
    fontSize: 12,
    color: COLORS.gray60,
    marginVertical: height * 0.01,
  },
  camera: {
    width: width * 0.07,
    height: height * 0.04,
    resizeMode: 'contain',
    position: 'absolute',
    right: 6,
    bottom: -4,
    tintColor: COLORS.gray60,
  },
});
