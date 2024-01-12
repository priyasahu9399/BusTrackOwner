import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import UserCart from './../../component/carts/userCart';
import DropdownComponent from './../../component/dropdown/index';

const {width, height} = Dimensions.get('window');
const Time = [
  {label: 'Morning', value: '1'},
  {label: 'After Noon', value: '2'},
  {label: 'Evening', value: '3'},
];
const StaffAttendence = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innerContainer}>
        <DropdownComponent
          placeholder="Morning"
          data={Time}
          dropdownStyle={styles.dropdown}
          containStyle={styles.dropcontain}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.UserCartdata}
          renderItem={({item}) => (
            <UserCart
              name={item.name}
              driver={item.driver}
              image={item.image}
              choose={true}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default StaffAttendence;
