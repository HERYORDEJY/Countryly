import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const StackNavigator = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'}>
      <StackNavigator.Screen
        name={'Home'}
        component={Home}
        options={{ header: (props) => null }}
      />
      <StackNavigator.Screen
        name={'Details'}
        component={Details}
        options={{ header: (props) => null }}
      />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;
