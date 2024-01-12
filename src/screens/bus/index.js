import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import OwnerStaffBusCart from './../../component/carts/ownerstaffbuslistCart';
import styles from './styles';
import AllBus from './../allBus/index';
import AddBus from './../addBus/index';
import EditBus from './../editBus/index';

const {width, height} = Dimensions.get('window');

const Bus = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View style={styles.wrap}>
          <OwnerStaffBusCart
            image={images.busall}
            title="All Bus"
            onPress={() => navigation.navigate('AllBus')}
          />
          <OwnerStaffBusCart
            image={images.busadd}
            title="Add Bus"
            onPress={() => navigation.navigate('AddBus')}
          />
          <OwnerStaffBusCart
            image={images.busedit}
            title="Edit Bus"
            onPress={() => navigation.navigate('EditBus')}
          />
          <OwnerStaffBusCart image={images.busdelete} title="Delete staff" />
        </View>
      </View>
    </View>
  );
};

export default Bus;
