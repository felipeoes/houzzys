import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardHightLightText } from '../../components';
import ProfileItemsList, {
  ProfileItemProps,
} from '../../components/organisms/ProfileItemsList';
import { ScreenContainer } from '../Home/styles';
import {
  LogOutView,
  ProfileContentContainer,
  ProfileHeader,
  ProfileImage,
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const profileItems: ProfileItemProps[] = [
  {
    title: 'My favorite houses',
    iconName: 'home',
  },
  {
    title: 'My proposals',
    iconName: 'file',
  },
];
const navigation = useNavigation();

function logout() {
  AsyncStorage.clear();
  navigation.navigate('Login');
}
export function Profile() {
  return (
    <ScreenContainer>
      <ProfileHeader>
        <CardHightLightText>Hello, Felipe</CardHightLightText>
        <LogOutView>
          <Icon name="sign-out" size={20} onPress={logout} />
        </LogOutView>
      </ProfileHeader>
      <ProfileImage
        source={{
          uri: 'https://source.unsplash.com/random',
        }}
      />
      <ProfileContentContainer>
        <ProfileItemsList data={profileItems} loading={false} />
      </ProfileContentContainer>
    </ScreenContainer>
  );
}
