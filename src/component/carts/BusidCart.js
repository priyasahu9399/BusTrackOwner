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

const BusIdCart = ({
  onPress,
  name,
  driverlocation,
  image,
  busNo,
  time,
  navigation,
  ImgBox,
  proImg,
  icons,
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
          {driverlocation}
        </Text>
      </View>
      <View style={styles.right_Box2}>
        <Text numberOfLines={2} style={styles.subtext}>
          {busNo}
        </Text>
        {time && (
          <Text numberOfLines={1} style={styles.subtext}>
            {time}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userBox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    // backgroundColor: '#f0f1f7',
    backgroundColor:COLORS.lightgray,
    width: width * 0.92,
    paddingVertical: width * 0.03,
    borderRadius: 10,
    marginVertical: height * 0.012,
    alignSelf: 'center',
    paddingLeft: width * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_Box: {
    marginLeft: width * 0.02,
    width: width * 0.47,
  },
  right_Box2: {
    marginLeft: width * 0.01,
    width: width * 0.28,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 13,
    marginBottom: -2,
  },
  subtext: {
    ...FONTS.fiveHundred,
    color: COLORS.lightgray2,
    fontSize: 11,
  },
  profileImg: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'stretch',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray30,
  },
});

export default BusIdCart;
