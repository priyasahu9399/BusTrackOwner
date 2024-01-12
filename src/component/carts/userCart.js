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

const UserCart = ({
  onPress,
  name,
  driver,
  image,
  navigation,
  ImgBox,
  choose,
  proImg,
}) => {
  const [chooseicons, setChooseIcons] = useState(choose);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.userBox}>
      <Image style={[styles.profileImg, proImg]} source={image} />
      <View style={styles.right_Box}>
        <Text numberOfLines={2} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.subtext}>
          {driver}
        </Text>
      </View>
      {choose && (
        <View style={styles.right_Box2}>
          <TouchableOpacity>
            <Image source={icons.cross} style={styles.crossright} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.right} style={styles.crossright} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userBox: {
    borderWidth: 1,
    borderColor: COLORS.gray10,
    backgroundColor: COLORS.lightgray,
    width: width * 0.92,
    padding: width * 0.03,
    borderRadius: 10,
    marginVertical: height * 0.01,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_Box: {
    marginLeft: width * 0.04,
    width: width * 0.5,
  },
  name: {
    ...FONTS.fiveHundred,
    color: COLORS.black,
    fontSize: 14,
    marginBottom: -4,
  },
  subtext: {
    ...FONTS.fiveHundred,
    color: COLORS.lightgray2,
    fontSize: 11,
    marginBottom: -2,
  },

  profileImg: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'stretch',
    borderRadius: 30,
  },
  right_Box2: {
    flexDirection: 'row',
  },
  crossright: {
    width: width * 0.07,
    height: height * 0.035,
    resizeMode: 'contain',
    marginLeft: width * 0.02,
  },
});

export default UserCart;
