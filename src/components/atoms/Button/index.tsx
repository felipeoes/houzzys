import React from 'react';
import { ButtonText } from '../Text';
import { ButtonContainer } from './styles';

type ButtonProps = {
  text: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  width?: number;
  height?: number;
  fs?: number;
  onPress: () => void;
};

export function Button({ text, onPress, fs, ...props }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <ButtonText fs={fs}>{text}</ButtonText>
    </ButtonContainer>
  );
}
