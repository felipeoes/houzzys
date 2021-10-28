/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import {
  FeatureDescriptionContainer,
  FeatureInput,
  FeatureInputContainer,
  FilterCardContainer,
  IconButtoncontainer,
} from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button, DetailText } from '../..';
import { colors } from '../../../styles/colors';
import { useHousesHooks } from '../../../services/hooks/houses';
import { SliderExample } from '../SliderFilter';
import { FilterSubtitle } from '../FilterModal/styles';

type FormProps = {
  onClose: () => void;
};

export function Form({ onClose }) {
  const { onFilterHouseList } = useHousesHooks();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  function handleOnChangePrice(values: number[]) {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
    handleForm([priceMin, priceMax], 'price');
  }

  const [form, setForm] = useState({
    beds: '',
    price: [],
    baths: '',
    garages: '',
  });

  const onPressApply = useCallback(() => {
    onFilterHouseList(form);
    onClose();
    console.log(form);
  }, [form]);

  const handleForm = useCallback((value, field, type?) => {
    if (type && type === 'increment') {
      setForm(prevState => ({
        ...prevState,
        [field]: Number((value += 1)).toString(),
      }));
    } else if (type && type === 'decrement' && value > 0) {
      setForm(prevState => ({
        ...prevState,
        [field]: Number((value -= 1)).toString(),
      }));
    } else {
      setForm(prevState => ({
        ...prevState,
        [field]: value,
      }));
    }
  }, []);

  var cardsList: any = [];

  const cards = [
    {
      title: 'Bedrooms',
      iconName: 'bed',
      iconSize: 24,
      value: form.beds,
      field: 'beds',
    },
    {
      title: 'Baths',
      iconName: 'bath',
      iconSize: 26,
      value: form.baths,
      field: 'baths',
    },
    {
      title: 'Garages',
      iconName: 'car',
      iconSize: 24,
      value: form.garages,
      field: 'garages',
    },
  ];

  cards.forEach(card => {
    cardsList.push(
      <FilterCardContainer>
        <FeatureDescriptionContainer>
          <IconFontAwesome
            name={card.iconName}
            size={card.iconSize || 24}
            color={colors.terciary}
          />
          <DetailText ml={10}>{card.title}</DetailText>
        </FeatureDescriptionContainer>
        <FeatureInputContainer>
          <IconButtoncontainer
            onPress={() => handleForm(card.value, card.field, 'decrement')}>
            <IconFontAwesome name="minus" size={16} color={colors.terciary} />
          </IconButtoncontainer>
          <FeatureInput
            onChangeText={value => handleForm(value, card.field)}
            defaultValue="0"
            // value={card.value}
            maxLength={2}
            keyboardType="numeric"
          />

          <IconButtoncontainer
            onPress={() => handleForm(card.value, card.field, 'increment')}>
            <IconFontAwesome name="plus" size={16} color={colors.terciary} />
          </IconButtoncontainer>
        </FeatureInputContainer>
      </FilterCardContainer>,
    );
  });

  return (
    <>
      <FilterSubtitle>Price</FilterSubtitle>
      <SliderExample onChangePrice={handleOnChangePrice} />
      <FilterSubtitle>Features</FilterSubtitle>
      {cardsList}
      <Button mt={24} text="Aplicar" onPress={onPressApply} />
    </>
  );
}
