import React, {useState, useEffect} from 'react';
import {
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
import OwnerStaffBusCart from './../../component/carts/ownerstaffbuslistCart';
import StaffList from './../staffList/index';
import StaffAttendence from './../staffAttendence/index';
import StaffPyment from './../staffpyment/index';

const {width, height} = Dimensions.get('window');

const Staff = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View style={styles.wrap}>
          <OwnerStaffBusCart
            image={images.staffall}
            title="All staff"
            onPress={() => navigation.navigate('StaffList')}
          />
          <OwnerStaffBusCart
            image={images.staffadd}
            title="Add staff"
            onPress={() => navigation.navigate('StaffAttendence')}
          />
          <OwnerStaffBusCart
            image={images.staffattendence}
            title="Today Attendance"
            onPress={() => navigation.navigate('StaffPyment')}
          />
          <OwnerStaffBusCart image={images.staffdelete} title="Delete staff" />
        </View>
      </View>
    </View>
  );
};

export default Staff;
