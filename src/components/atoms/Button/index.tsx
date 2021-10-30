import React from 'react';
import { ButtonText } from '../Text';
import { ButtonContainer } from './styles';

type ButtonProps = {
  text: string;
  mt: number;
  width?: number;
  height?: number;
  onPress: () => void;
};

export function Button({ text, onPress, ...props }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
