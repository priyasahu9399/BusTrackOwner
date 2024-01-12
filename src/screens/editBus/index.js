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
import Journey from "./../journey/index";

const {width, height} = Dimensions.get('window');

const EditBus = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <LinearGradient
        opacity={0.8}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.6, y: 1.0}}
        colors={['#A7FFDA', '#4AA4B8']}>
        <View style={styles.busimgbox}>
          <Image source={images.blackbus} style={styles.busimg} />
        </View>
        <TouchableOpacity style={styles.editbox}>
          <Image source={icons.edit} style={styles.edit} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={[styles.innerContainer, styles.marginTop]}>
          <View style={styles.rowField}>
            <Text style={styles.headname}>Bus name</Text>
            <Text style={styles.name}>Shiva bus</Text>
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
        <View style={styles.redbox}>
          <TouchableOpacity>
            <Text style={styles.redText}>Remove Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Journey')}>
            <Text style={styles.redText}>Track Bus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditBus;
