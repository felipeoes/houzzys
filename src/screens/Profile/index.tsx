import React, { useEffect, useState } from 'react';
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
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

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
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('email', (err, value) => {
      if (err) {
        console.log(err);
      } else {
        if (value !== undefined) {
          setUsuario(value);
        }
      }
    });
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <ScreenContainer>
      <ProfileHeader>
        <CardHightLightText>Hello, {usuario} </CardHightLightText>
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
