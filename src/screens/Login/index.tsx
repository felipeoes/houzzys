import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, DetailSubTitle, DetailText, Modal } from '../../components';
import { ScreenContainer } from '../Home/styles';
import { ImageBackground, ScreenLine } from '../HomeDetailScreen/styles';
import {
  LoginContainer,
  LoginInput,
  RegisterHighlightText,
  InputContainer,
  RegisterHighlightTextContainer,
} from './styles';

import { getUserAuth, FilteringParamsProps } from '../../services/calls';
import { getData } from '../../services/stores/db';

import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginModalProps = {
  visible: boolean;
  onClose: () => void;
  navigation: () => void;
};

export function Login({ visible }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // check if screen is focused
  const isFocused = useIsFocused();

  // listen for isFocused, if useFocused changes
  // call the function that you use to mount the component.

  useEffect(() => {
    let idUser: number = 0;
    setTimeout(() => {
      AsyncStorage.getItem('idUser').then(value => {
        idUser = Number(value);
      });
    }, 1);
    if (idUser > 0) {
      navigation.navigate('Home');
    }
  }, [isFocused]);

  async function handleOnPressLogin() {
    let idUser: number = 0;
    setTimeout(() => {
      AsyncStorage.getItem('idUser').then(value => {
        idUser = Number(value);
      });
    }, 1);

    if (idUser > 0) {
      navigation.navigate('Home');
    } else if (username != '' && password != '') {
      const user: FilteringParamsProps = {
        type: 'login',
        email: username,
        password: password,
        price: [0, 0],
      };
      await getUserAuth(user);
      setTimeout(() => {
        AsyncStorage.getItem('idUser').then(value => {
          console.log('idusuario: ' + value);
          if (Number(value) > 0) {
            navigation.navigate('Home');
          }
        });
      }, 100);
    }
  }

  function handleOnPressRegisterText() {
    navigation.navigate('Register');
  }
  return (
    <ScreenContainer>
      <ImageBackground
        height={50}
        source={require('../../assets/image/welcome.png')}
      />
      <Modal
        title="Sign In"
        visible={visible}
        onClose={() => navigation.goBack()}
        width={500}
        bRight={60}
        bLeft={60}>
        <ScreenLine />

        <LoginContainer>
          <InputContainer>
            <DetailSubTitle mb={-5}>Email</DetailSubTitle>
            <LoginInput
              style={styles.shadow}
              placeholder="Digite o seu email"
              onChangeText={value => setUsername(value)}
            />
          </InputContainer>
        </LoginContainer>

        <LoginContainer>
          <InputContainer>
            <DetailSubTitle mb={-5}>Password</DetailSubTitle>
            <LoginInput
              style={styles.shadow}
              placeholder="Digite a sua senha"
              onChangeText={value => setPassword(value)}
              secureTextEntry
            />
          </InputContainer>
          <Button
            text="Login"
            mt={30}
            height={70}
            onPress={handleOnPressLogin}
          />
        </LoginContainer>
        <DetailText mt={15}>
          Don't have an account yet?
          <RegisterHighlightTextContainer onPress={handleOnPressRegisterText}>
            <RegisterHighlightText>{''} Register now!</RegisterHighlightText>
          </RegisterHighlightTextContainer>
        </DetailText>
      </Modal>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
  },
});
