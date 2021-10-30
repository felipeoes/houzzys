/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import {
  FeatureDescriptionContainer,
  FeatureInput,
  FeatureInputContainer,
  FilterCardContainer,
  FormButtonContainer,
  IconMinuscontainer,
  IconPluscontainer,
} from './styles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button, DetailText } from '../..';
import { colors } from '../../../styles/colors';
import { useHousesHooks } from '../../../services/hooks/houses';
import { SliderExample } from '../SliderFilter';
import { FilterSubtitle } from '../FilterModal/styles';
import { StyleSheet } from 'react-native';

type FormProps = {
  onClose: () => void;
  type: string;
};

export function Form({ onClose, type }) {
  const { onFilterHouseList } = useHousesHooks();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  function handleOnChangePrice(values: number[]) {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
    handleForm([priceMin, priceMax], 'price');
  }

  const [form, setForm] = useState({
<<<<<<< HEAD
    beds: '0',
    price: [],
    baths: '0',
    garages: '0',
=======
    beds: '',
    price: [],
    baths: '',
    garages: '',
>>>>>>> c134ad70406fab515ded2d1832d97e7f16702238
  });

  // function checkDisabledButton(card: any) {
  //   if (card.value > 0) {
  //     setDisabled(false);
  //   }
  //   return card.value <= 0;
  // }
  const onPressApply = useCallback(() => {
    onFilterHouseList(form);
    onClose();
    console.log(form);
  }, [form]);

  const handleForm = useCallback((value, field, type?) => {
    console.log(value, field, type);
    if (type && type === 'increment') {
      value = (Number(value) + 1).toString();

      setForm(prevState => ({
        ...prevState,
        [field]: value,
      }));
    } else if (type && type === 'decrement' && value > 0) {
      value = (Number(value) - 1).toString();
      setForm(prevState => ({
        ...prevState,
        [field]: value,
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
    let disabled = Number(card.value) <= 0;
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
          <IconMinuscontainer
            disabled={disabled}
            style={disabled && styles.buttonDisabled}
            onPress={() => handleForm(card.value, card.field, 'decrement')}>
            <IconFontAwesome
              name="minus"
              size={16}
              color={disabled ? 'white' : colors.terciary}
            />
          </IconMinuscontainer>
          <FeatureInput
            onChangeText={value => handleForm(value, card.field)}
            defaultValue="0"
            value={card.value || '0'}
            maxLength={2}
            keyboardType="numeric"
          />

          <IconPluscontainer
            onPress={() => handleForm(card.value, card.field, 'increment')}>
            <IconFontAwesome name="plus" size={16} color={colors.terciary} />
          </IconPluscontainer>
        </FeatureInputContainer>
      </FilterCardContainer>,
    );
  });

  return (
    <>
      <FilterSubtitle>Price</FilterSubtitle>
      {type === true && (
        <SliderExample
          onChangePrice={handleOnChangePrice}
          type={type}
          min={100}
          max={20000}
          step={100}
        />
      )}
      {type === false && (
        <SliderExample
          onChangePrice={handleOnChangePrice}
          type={type}
          min={50000}
          max={1000000}
          step={1000}
        />
      )}

      <FilterSubtitle>Features</FilterSubtitle>
      {cardsList}
      <FormButtonContainer>
        <Button mt={24} text="Aplicar" onPress={onPressApply} />
      </FormButtonContainer>
    </>
  );
}

const styles = StyleSheet.create({
  buttonDisabled: {
    backgroundColor: '#f4f4f4',
  },
});
