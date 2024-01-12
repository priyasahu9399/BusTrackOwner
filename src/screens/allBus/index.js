import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import BusIdCart from './../../component/carts/BusidCart';
import {data} from './../../constants';
import styles from './styles';

const AllBus = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.BusIdCartdata}
          renderItem={({item, index}) => (
            <BusIdCart
              name={item.name}
              driver={item.driver}
              busNo={item.busNo}
              image={item.image}
              driverlocation={item.driverlocation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default AllBus;
