import React, {useState} from 'react';
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
import InputText from './../../component/input/inputText';
import DropdownComponent from './../../component/dropdown/index';
import LongButton from './../../component/button/longButton';

const {width, height} = Dimensions.get('window');

const route = [
  {label: 'bhopal', value: '1'},
  {label: 'indrapuri', value: '2'},
  {label: 'chinar', value: '3'},
  {label: 'minal', value: '4'},
  {label: 'bhopal', value: '5'},
  {label: 'ayodhya', value: '6'},
  {label: 'mandideep', value: '7'},
];

const Month = [
  {label: 'january', value: '1'},
  {label: 'febrary', value: '2'},
  {label: 'march', value: '3'},
  {label: 'april', value: '4'},
  {label: 'may', value: '5'},
  {label: 'june', value: '6'},
  {label: 'july', value: '7'},
  {label: 'august', value: '8'},
  {label: 'september', value: '9'},
];
const Time = [
  {label: '7AM', value: '1'},
  {label: '10AM', value: '2'},
  {label: '12AM', value: '3'},
];
const AddStudent = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <InputText label="Student name" placeholder="Enter Student name" />
        <InputText label="Student Id" placeholder="Enter Student Id" />
        <InputText label="School name" placeholder="Enter School name" />

        <View style={styles.rowField}>
          <DropdownComponent placeholder="Routes" data={route} />
          <DropdownComponent
            placeholder="Time"
            data={Time}
            containStyle={{height: height * 0.2}}
          />
        </View>
        <InputText label="Bus no" placeholder="Enter bus no" />

        <View style={styles.rowField}>
          <DropdownComponent
            placeholder="Month"
            data={Month}
            dropdownPosition="top"
            
          />
          <InputText
            placeholder="Amount"
            keyboardType="numeric"
            mainBox={{width: width * 0.4, marginTop: height * -0.015}}
          />
        </View>

        <LongButton
          children="Add student"
          buttonStyle={{
            marginTop: height * 0.05,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default AddStudent;
