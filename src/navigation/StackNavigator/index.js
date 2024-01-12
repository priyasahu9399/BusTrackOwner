import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants/theme';
import BottomTab from './../BottomTabNavigator/index';
import styles from './styles';
import StaffList from './../../screens/staffList/index';
import EditStaff from './../../screens/editStaff/index';
import AllBus from './../../screens/allBus/index';
import AddBus from './../../screens/addBus/index';
import EditBus from './../../screens/editBus/index';
import Journey from './../../screens/journey/index';
import StaffAttendence from './../../screens/staffAttendence/index';
import StaffPyment from './../../screens/staffpyment/index';
import AddStudent from './../../screens/addStudent/index';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackScreen = ({navigation, route}) => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StaffList"
        component={StaffList}
        options={{
          title: 'All staff',
        }}
      />
      <Stack.Screen
        name="EditStaff"
        component={EditStaff}
        options={{
          title: 'Edit staff',
        }}
      />
      <Stack.Screen
        name="AllBus"
        component={AllBus}
        options={{
          title: 'All bus',
        }}
      />
      <Stack.Screen
        name="AddBus"
        component={AddBus}
        options={{
          title: 'Add bus',
        }}
      />
      <Stack.Screen
        name="EditBus"
        component={EditBus}
        options={{
          title: 'Edit Bus',
        }}
      />
      <Stack.Screen name="Journey" component={Journey} />
      <Stack.Screen
        name="StaffAttendence"
        component={StaffAttendence}
        options={{
          title: 'Add staff',
        }}
      />
      <Stack.Screen
        name="StaffPyment"
        component={StaffPyment}
        options={{
          title: 'Pyment',
        }}
      />

      <Stack.Screen
        name="AddStudent"
        component={AddStudent}
        options={{
          title: 'Add student',
        }}
      />
      {/* AddStudent */}
    </Stack.Navigator>
  );
};

export default StackScreen;
