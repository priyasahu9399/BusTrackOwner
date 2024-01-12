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
  topContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: height * 0.02,
  },
  dropdown: {
    alignSelf: 'flex-end',
    width: width * 0.35,
    height: height * 0.043,
    marginBottom: height * 0.02,
  },
  dropcontain: {height: height * 0.18, width: width * 0.35},
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
    marginHorizontal: width * 0.01,
  },
  rowdate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginLeft: height * 0.015,
    justifyContent: 'center',
    borderWidth: 1,
    height: height * 0.042,
    paddingHorizontal: width * 0.01,
    borderColor: COLORS.gray20,
    borderRadius: 5,
    textAlign: 'center',
  },
});
