import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackScreen from './../navigation/StackNavigator';
import DrawerScreen from './../screens/drawerScreen/index';
import OwnerLogin from './../screens/ownerLogin/index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  const [token, settoken] = useState('null');
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      initialRouteName="Home">
      {token == null ? (
        <>
          <Stack.Screen
            name="OwnerLogin"
            component={OwnerLogin}
            options={{headerShown: false}}
          />
         
        </>
      ) : (
        <Stack.Screen
          name="StackScreen"
          component={StackScreen}
          options={{headerShown: false}}
        />
      )}
    </Drawer.Navigator>
  );
};

export default Root;
