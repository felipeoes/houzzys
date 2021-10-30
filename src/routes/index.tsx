import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  SplashScreen,
  SliderScreens,
  HomeDetailScreen,
  Login,
  Register,
} from '../screens';

export function Navigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SliderScreens" component={SliderScreens} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
