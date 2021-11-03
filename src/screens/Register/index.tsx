import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Button, DetailSubTitle, DetailText, Modal,ErrorText } from '../../components';
import { ScreenContainer } from '../Home/styles';
import { ImageBackground, ScreenLine } from '../HomeDetailScreen/styles';
import {
  LoginContainer,
  LoginInput,
  RegisterHighlightText,
  InputContainer,
  RegisterHighlightTextContainer,
} from '../Login/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData,saveData} from '../../services/stores/db';
import {
  FilteringParamsProps,
  registerUser
} from '../../services/calls';

type RegisterModalProps = {
  visible: boolean;
  onClose: () => void;
  navigation: () => void;
};

export function Register({ visible }: RegisterModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [textoErro, setTextoErro] = useState('');


  const navigation = useNavigation();
  async function handleOnPressRegister() {
    setTextoErro("");

    console.log("senha: "+password);
    console.log("user: "+username);
    if(password !== passwordConfirm){
      setTextoErro("As senhas estão diferentes");
      return;
    }
    if(username === ''){
      setTextoErro("Preencha o email");
      return;
    }
    if(password === ''){
      setTextoErro("Preencha a senha");
      return;
    }
    if(textoErro === ""){
      const user:FilteringParamsProps={
        type:"register",
        email:username,
        password:password,
        price:[0,0]
      }
      await registerUser(user);
      setTimeout(() => {
        AsyncStorage.getItem("idUser").then((value) => {
          console.log("idusuario: " + value);
          if(Number(value)>0){
            navigation.navigate('Home');
          }else{
            setTextoErro("Não foi possível realizar o cadastro");
          }
        });
      }, 100);
    }
  }

  function handleOnPressLoginText() {
    AsyncStorage.clear();
    navigation.navigate('Favorites');
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
        width={580}
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
          <DetailSubTitle mb={-5}>Confirm Password</DetailSubTitle>
            <LoginInput
              style={styles.shadow}
              placeholder="Confirm your password"
              onChangeText={value => setPasswordConfirm(value)}
              secureTextEntry
            />
          </InputContainer>

          <Button
            text="Register"
            mt={13}
            height={70}
            onPress={handleOnPressRegister}
          />
        </LoginContainer>
        {textoErro!='' ?(<ErrorText textColor="red">{textoErro}</ErrorText>)
        :null
        }
        
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
