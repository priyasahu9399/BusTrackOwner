import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const PersonPymentCart = ({
  onPress,
  name,
  driverid,
  image,
  navigation,
  ImgBox,
  proImg,
  status,
  rupee,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.userBox, styles.row]}>
      <Image style={[styles.profileImg, proImg]} source={image} />
      <View style={styles.right_Box}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.subtext}>
          {driverid}
        </Text>
      </View>

      <View>
        <Text style={styles.rupee}>₹ {rupee}</Text>

        <Text style={styles.subtext}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userBox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    backgroundColor: COLORS.lightgray,
    width: width * 0.92,
    paddingVertical: width * 0.03,
    borderRadius: 10,
    marginVertical: height * 0.01,
    alignSelf: 'center',
    paddingLeft: width * 0.02,
  },
  profileImg: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'stretch',
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_Box: {
    marginLeft: width * 0.03,
    width: width * 0.58,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom: -2,
  },
  subtext: {
    ...FONTS.fiveHundred,
    color: COLORS.lightgray2,
    fontSize: 11,
  },
  rupee: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -5,
  },

  status: {
    ...FONTS.fiveHundred,
    fontSize: 12,
    color: '#17F448',
  },
});

export default PersonPymentCart;
