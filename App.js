import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Screens/Home';
import Detail from './Screens/Details';
import Settings from './Screens/Settings';

import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: { screen: Home, navigationOptions: { title: 'Home' } },
  Detail: { screen: Detail, navigationOptions: { title: 'Detail' } },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: { title: 'Settings' },
  },
});

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  { initialRouteName: 'Home' }
);
export default createAppContainer(AppNavigator);
