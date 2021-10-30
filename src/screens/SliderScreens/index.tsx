/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  ButtonCircle,
  SliderView,
  SliderText,
  SliderTitle,
  SkipText,
  SkipButton,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const slides = [
  {
    key: 1,
    title: 'Welcome',
    text: 'Are you ready for a \nbrand new experience?',
    image: require('../../assets/image/welcome.png'),
    backgroundColor: 'white',
  },
  {
    key: 2,
    title: 'Rent or buy easily',
    text: 'Find the best homes at the best prices',
    image: require('../../assets/image/buy-house.png'),
    backgroundColor: 'white',
  },
  {
    key: 3,
    title: 'Find the perfect place to live',
    text: "Your dream's home stands here",
    image: require('../../assets/image/relaxing-at-home.png'),
    backgroundColor: 'white',
  },
];

export function SliderScreens() {
  const navigation = useNavigation();

  function handleOnPressDoneButton() {
    navigation.navigate('Home');
  }

  function _renderItem({ item }: any) {
    return (
      <SliderView>
        <SliderTitle>{item.title}</SliderTitle>
        <Image source={item.image} />
        <SliderText>{item.text}</SliderText>
      </SliderView>
    );
  }
  function renderSkipButton() {
    return (
      <>
        <SkipButton
          onPress={handleOnPressDoneButton}
          style={{ marginBottom: 15 }}>
          <SkipText>Skip</SkipText>
        </SkipButton>
        <View style={{ padding: 20, margin: 20 }} />
      </>
    );
  }
  function renderDoneButton() {
    return (
      <ButtonCircle onPress={handleOnPressDoneButton}>
        <Icon name="md-checkmark" color="white" size={24} />
      </ButtonCircle>
    );
  }
  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      dotStyle={{ backgroundColor: '#D3DDE6' }}
      showSkipButton
      showNextButton={false}
      activeDotStyle={{
        backgroundColor: '#232E5C',
        transform: [{ scale: 1.5 }],
      }}
    />
  );
}
