/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionImage, Logo } from './styles';
import LogoName from '../../assets/image/logo.png';
import LogoImage from '../../assets/image/logoImage.png';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { initializeConnection } from '../../services/api';

export function SplashScreen() {
  const navigator = useNavigation();

  initializeConnection();

  function navigateToHome() {
    setTimeout(() => {
      navigator.navigate('SliderScreens');
    }, 3000);
  }

  useEffect(() => {
    navigateToHome();
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />

      <Animatable.View animation="slideInDown">
        <Logo source={LogoImage} resizeMode="contain" />
      </Animatable.View>
      <Animatable.View animation="slideInUp">
        <SectionImage source={LogoName} resizeMode="contain" />
      </Animatable.View>
    </SectionView>
  );
}
