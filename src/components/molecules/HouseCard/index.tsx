import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { CardTitle, CardDescription, CardHightLightText } from '../../index';
import { PropertiesProps } from '../../../services/calls';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
} from './styles';
import { useHousesStore } from '../../../services/stores/index';

type HouseCardProps = {
  item: PropertiesProps;
  imageSource: string;
  title: string;
  description: string;
  price: number;
} & ImageSourcePropType;

export function HouseCard({
  imageSource,
  title,
  description,
  price,
  item,
}: HouseCardProps) {
  const navigation = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  function handleOnPressItemContainer() {
    setSelectedHouse(item);
    navigation.navigate('HomeDetailScreen');
  }

  return (
    <CardContainer onPress={handleOnPressItemContainer} style={styles.shadow}>
      <CardImage source={{ uri: imageSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {item.status === 'for_rent' ? (
            <CardHightLightText>U$ {Number(price)}/mo</CardHightLightText>
          ) : (
            <CardHightLightText>
              U${' '}
              {Number(price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </CardHightLightText>
          )}
        </TextContainerLeft>
      </TextContainer>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
