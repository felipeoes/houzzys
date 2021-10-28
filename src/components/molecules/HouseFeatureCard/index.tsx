import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { DetailText } from '../../atoms';
import { FeatureCardContainer } from './styles';
import { colors } from '../../../styles/colors';

export type IconButtonProps = {
  featureText: string;
  iconName: string;
};

export function HouseFeatureCard({ featureText, iconName }: IconButtonProps) {
  return (
    <FeatureCardContainer>
      <IconFontAwesome name={iconName} color={colors.terciary} size={26} />

      <DetailText mt={6}>{featureText}</DetailText>
    </FeatureCardContainer>
  );
}
