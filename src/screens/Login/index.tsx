import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input, Modal } from '../../components';
import { ButtonContainer } from '../../components/atoms/Button/styles';
import { InputText } from '../../components/molecules/Input/styles';
import { BottomScreenContainer } from '../../components/molecules/Modal/styles';
import { InputContainer, ScreenContainer } from '../Home/styles';
import { ImageBackground, ScreenLine } from '../HomeDetailScreen/styles';
import { LoginContainer, LoginInput } from './styles';

type LoginModalProps = {
  visible: boolean;
  onClose: () => void;
  navigation: () => void;
};

export function Login({ visible, navigation: { goBack } }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleOnPressLogin() {
    console.log(password);
    console.log(username);
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
        onClose={() => goBack()}
        width={450}
        bRight={60}
        bLeft={60}>
        <ScreenLine />
        <LoginContainer>
          <LoginInput
            style={styles.shadow}
            placeholder="Digite o seu email"
            onChangeText={value => setUsername(value)}
          />
        </LoginContainer>

        <LoginContainer>
          <LoginInput
            style={styles.shadow}
            placeholder="Digite a sua senha"
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
        </LoginContainer>

        <Button text="Login" mt={55} onPress={handleOnPressLogin} />
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
