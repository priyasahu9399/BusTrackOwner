import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS} from './../../constants';
import {images, icons} from './../../constants';
import styles from './styles';
import AddStudent from './../addStudent/index';

const {width, height} = Dimensions.get('window');

const DrawerList = ({text, onPress, icons}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.rowIcon}>
      <Image style={styles.icons} source={icons} />
      <Text style={styles.iconsText}>{text}</Text>
    </TouchableOpacity>
  );
};

const DrawerScreen = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.busimgbox}>
          <Image source={images.logoc} style={styles.busimg} />
        </View>
        <View style={styles.innercontainer}>
          <Text style={styles.hello}>Hello Buddy,</Text>
          <DrawerList
            text="Register student"
            icons={icons.registerstd}
            onPress={() => navigation.navigate('AddStudent')}
          />
          <DrawerList text="Login" icons={icons.login} />
          <DrawerList text="Pay fee" icons={icons.payfee} />
          <DrawerList text="Transaction history" icons={icons.tranhist} />
          <DrawerList text="Term and condition" icons={icons.term} />
          <DrawerList text="Privacy & Policy" icons={icons.privacy} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DrawerScreen;
