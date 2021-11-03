import React from 'react';
import { Title } from '../../index';
import {
  ModalContainer,
  ModalBackground,
  BottomScreenContainer,
  HeaderContainer,
  IconView,
} from './styles';

type ModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
  bRight?: number;
  bLeft?: number;
  background?: boolean;
  widthModal?: number;
  heightModal?: number;
};
import Icon from 'react-native-vector-icons/MaterialIcons';

export function Modal({
  title,
  visible,
  children,
  onClose,
  width,
  bRight,
  bLeft,
  background,
  widthModal,
  heightModal,
}: ModalProps) {
  return (
    <ModalContainer
      widthModal={widthModal}
      heightModal={heightModal}
      transparent
      visible={visible}
      onRequestClose={onClose}>
      {background && (
        <ModalBackground>
          <BottomScreenContainer width={width} bRight={bRight} bLeft={bLeft}>
            <IconView onPress={onClose}>
              <Icon name="close" size={30} />
            </IconView>
            <HeaderContainer>
              <Title>{title}</Title>
            </HeaderContainer>

            {children}
          </BottomScreenContainer>
        </ModalBackground>
      )}
      <BottomScreenContainer
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        width={width}
        bRight={bRight}
        bLeft={bLeft}>
        <IconView onPress={onClose}>
          <Icon name="close" size={30} />
        </IconView>
        <HeaderContainer>
          <Title>{title}</Title>
        </HeaderContainer>

        {children}
      </BottomScreenContainer>
    </ModalContainer>
  );
}
