import React from 'react';
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS} from './../../constants';
import styles from './styles';
import Home from './../../screens/home/index';
import Bus from './../../screens/bus/index';
import Profile from './../../screens/Profile/index';
import Staff from './../../screens/staff/index';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const Toggle = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icons.toggle} style={styles.toggle} />
    </TouchableOpacity>
  );
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: {backgroundColor: COLORS.white},
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarLabel: 'Home',
          headerLeft: () => (
            <View style={styles.row}>
              <Toggle onPress={() => navigation.openDrawer()} />
              <Image source={images.logoc} style={styles.logoicon} />
              <Text style={styles.logoText}>Buddy</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image source={icons.notification} style={styles.notification} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Staff"
        component={Staff}
        options={{
          tabBarLabel: 'Staff',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.staff}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bus"
        component={Bus}
        options={{
          tabBarLabel: 'Bus',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.busBottom}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.profile}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.gray1},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
