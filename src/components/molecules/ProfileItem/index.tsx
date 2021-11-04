import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ProfileIconContainer,
  ProfileItemContainer,
  ProfileItemTitle,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenLine } from '../../../screens/HomeDetailScreen/styles';
import { colors } from '../../../styles/colors';

type ProfileItemProps = {
  title: string;
  iconName: string;
};

export function ProfileItem({ title, iconName }: ProfileItemProps) {
  const navigation = useNavigation();

  function handleOnPressItemContainer() {
    if (iconName === 'home') {
      navigation.navigate('Favorites');
    } else if (iconName === 'file') {
      navigation.navigate('Proposals');
    }
  }

  return (
    <>
      <ProfileItemContainer onPress={handleOnPressItemContainer}>
        <ProfileIconContainer>
          <Icon name={iconName} size={25} color={colors.terciary} />
        </ProfileIconContainer>
        <ProfileItemTitle>{title}</ProfileItemTitle>
      </ProfileItemContainer>
      <ScreenLine style={{ marginTop: 4 }} />
    </>
  );
}
