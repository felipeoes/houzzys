import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  SplashScreen,
  SliderScreens,
  HomeDetailScreen,
  Login,
  Register,
  Profile,
} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../styles/colors';
import { StyleSheet } from 'react-native';

function HomeTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.transparentText,

        tabBarStyle: {
          overflow: 'hidden',
        },
        headerShown: false,
      }}
      backBehavior="history"
      shifting={true}
      sceneAnimationEnabled={true}
      activeColor="#000000"
      inactiveColor="#A5A5A5">
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="search" color={color} size={focused ? 26 : 22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: styles.labelStyle,
          tabBarIcon: ({ color, focused }) => (
            <Icon name="user" color={color} size={focused ? 26 : 22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Navigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        initialParams={{ signed: 'false' }}
      />
      <Stack.Screen name="SliderScreens" component={SliderScreens} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    color: colors.primary,
  },
});
