import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const LongButton = ({children, onPress, buttonStyle, buttonText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.btn_box, buttonStyle]}>
      <Text style={[styles.btn_text, buttonText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default LongButton;

const styles = StyleSheet.create({
  btn_box: {
    backgroundColor: COLORS.primary,
    width: width * 0.92,
    height: height * 0.065,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    color: COLORS.white,
    ...FONTS.fiveHundred,
    fontSize: 15,
    marginBottom: -3,
  },
});
