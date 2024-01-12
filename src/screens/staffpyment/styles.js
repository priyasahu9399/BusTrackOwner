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
  input: {
    fontSize: 13,
    padding: width * 0.01,
    color: COLORS.black,
    marginLeft: width * 0.02,
  },
  date: {
    width: width * 0.05,
    height: height * 0.033,
    resizeMode: 'contain',
    marginHorizontal: width * 0.007,
  },
  rowdate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: height * 0.02,
    justifyContent: 'center',
    borderWidth: 1,
    height: height * 0.042,
    paddingHorizontal: width * 0.01,
    borderColor: COLORS.gray20,
    borderRadius: 5,
    textAlign: 'center',
  },
});
