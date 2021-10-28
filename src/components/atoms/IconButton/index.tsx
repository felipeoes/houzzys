import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  IconButtonContainer,
  IconButtonProps,
  IconText,
  IconButtonCustom,
  IconButtonCustom2,
} from './styles';

export function IconButton({
  transparent = false,
  iconName,
  coloring,
  border,
  custom,
  custom2,
  iconText,
  fill = false,
  onPress,
}: IconButtonProps) {
  if (custom) {
    return (
      <IconButtonCustom
        border={border}
        onPress={onPress}
        transparent={transparent}>
        <IconText coloring={coloring}>{iconText}</IconText>
        <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={28} />
      </IconButtonCustom>
    );
  }

  if (custom2) {
    return (
      <IconButtonCustom2
        border={border}
        onPress={onPress}
        transparent={transparent}>
        <IconText coloring={coloring}>{iconText}</IconText>
        <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={28} />
      </IconButtonCustom2>
    );
  }

  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={28} />
    </IconButtonContainer>
  );
}
