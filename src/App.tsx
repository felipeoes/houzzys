import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import { Navigator } from './routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent />
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
