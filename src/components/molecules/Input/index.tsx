/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getLocationsListCall } from '../../../services/calls';
import { colors } from '../../../styles/colors';

import {
  InputContainer,
  InputText,
  InputTextContainer,
  InputIconContainer,
} from './styles';

type InputProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  data?: string[];
  placeholder: string;
  locationsList?: string[];
  onPressIn?: void;
  setMyLocations?: (value: string[]) => void;
  value?: string;
  onChangeText: (value: string) => void;
} & TextInputProps;

export function Input({
  onPressIn,
  onChangeText,
  value,
  setMyLocations,
  placeholder,
  mb,
  mt,
}: InputProps) {
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <InputContainer ml={15} mt={mt || 30} mb={mb} style={styles.shadow}>
      <InputTextContainer>
        <InputIconContainer>
          <Icon name="search" size={14} color={colors.primary} />
        </InputIconContainer>
        <InputText
          onPressIn={onPressIn}
          style={styles.shadow}
          defaultValue={value}
          placeholder={placeholder}
          placeholderTextColor="#828282"
          onChangeText={value => {
            onChangeText(value);
            setSelectedLocation(value);
          }}
        />
      </InputTextContainer>
    </InputContainer>
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
