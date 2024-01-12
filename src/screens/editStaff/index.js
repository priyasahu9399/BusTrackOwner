import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import OwnerStaffBusCart from './../../component/carts/ownerstaffbuslistCart';

const {width, height} = Dimensions.get('window');

const EditStaff = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.6, y: 1.0}}
        colors={['#A3B8ED', '#4AA4B8']}>
        <View style={styles.staffimgbox}>
          <Image source={images.personimg} style={styles.staffimg} />
        </View>
        <TouchableOpacity style={styles.editbox}>
          <Image source={icons.edit} style={styles.edit} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.innerContainer}>
        <View style={styles.marginTop}>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Staff name</Text>
            <Text style={styles.name}>Shiva kumar</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Routes</Text>
            <Text numberOfLines={1} style={styles.name}>
              bhopal
            </Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Timeing</Text>
            <Text style={styles.name}>10:30 - 01:00 PM</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Contact no</Text>
            <Text style={styles.name}>9876XXX764</Text>
          </View>

          <View style={styles.rowField}>
            <Text style={styles.headname}>Bus no</Text>
            <Text style={styles.name}>JH0A234543</Text>
          </View>
          <View style={styles.rowField}>
            <Text style={styles.headname}>School name</Text>
            <Text style={styles.name}>DVC school Ranchi</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.redText}>Remove staff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditStaff;
