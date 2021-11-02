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
  containerColor?: string;
  textColor?: string;
  onPress: () => void;
};

export function Button({
  text,
  onPress,
  fs,
  textColor,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress} {...props}>
      <ButtonText fs={fs} textColor={textColor} {...props}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
}
