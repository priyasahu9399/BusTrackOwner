import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const OwnerStaffBusCart = ({navigation, onPress, image, title}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.imagesBox}>
      <Image source={image} style={styles.images} />
      <Text style={styles.imagesText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imagesBox: {
    width: width * 0.42,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    backgroundColor: COLORS.white,
    margin: width * 0.02,
    alignSelf: 'center',
  },
  images: {
    width: width * 0.3,
    height: height * 0.12,
    resizeMode: 'contain',
  },
  imagesText: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    color: COLORS.black,
    textAlign: 'center',
    width: width * 0.3,
  },
});

export default OwnerStaffBusCart;
