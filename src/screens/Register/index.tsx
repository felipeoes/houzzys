import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
} from '../Login/styles';

type RegisterModalProps = {
  visible: boolean;
  onClose: () => void;
  navigation: () => void;
};

export function Register({ visible }: RegisterModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();

  function handleOnPressRegister() {
    console.log(username);
    console.log(password);
    console.log(passwordConfirm);
  }

  function handleOnPressLoginText() {
    navigation.navigate('SliderScreens');
  }

  return (
    <ScreenContainer>
      <ImageBackground
        height={50}
        source={require('../../assets/image/welcome.png')}
      />
      <Modal
        title="Register"
        visible={visible}
        onClose={() => handleOnPressLoginText()}
        width={500}
        bRight={60}
        bLeft={60}>
        <ScreenLine />

        <LoginContainer>
          <InputContainer>
            <DetailSubTitle mb={-5}>Email</DetailSubTitle>
            <LoginInput
              style={styles.shadow}
              placeholder="Type your email"
              onChangeText={value => setUsername(value)}
            />
          </InputContainer>
        </LoginContainer>

        <LoginContainer>
          <InputContainer>
            <DetailSubTitle mb={-5}>Password</DetailSubTitle>
            <LoginInput
              style={styles.shadow}
              placeholder="Type your password"
              onChangeText={value => setPassword(value)}
              secureTextEntry
            />
          </InputContainer>
        </LoginContainer>

        <LoginContainer>
          <InputContainer>
            <LoginInput
              style={styles.shadow}
              placeholder="Confirm your password"
              onChangeText={value => setPasswordConfirm(value)}
              secureTextEntry
            />
          </InputContainer>

          <Button
            text="Register"
            mt={30}
            height={70}
            onPress={handleOnPressRegister}
          />
        </LoginContainer>

        <DetailText mt={15}>
          Already have an account?
          <RegisterHighlightTextContainer onPress={handleOnPressLoginText}>
            <RegisterHighlightText>Click here to log in!</RegisterHighlightText>
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
