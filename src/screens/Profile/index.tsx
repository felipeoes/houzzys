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

export function Profile() {
  return (
    <ScreenContainer>
      <ProfileHeader>
        <CardHightLightText>Hello, Felipe</CardHightLightText>
        <LogOutView>
          <Icon name="sign-out" size={20} />
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
