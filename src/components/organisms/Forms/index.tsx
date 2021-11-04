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
import { useHousesStore } from '../../../services/stores';

type FormProps = {
  onClose: () => void;
  type: boolean;
};

export function Form({ onClose, type }: FormProps) {
  const { housesList, setFilteredHousesList } = useHousesStore();
  const { useFiltered, setUseFiltered } = useHousesStore();

  const { onFilterHouseList } = useHousesHooks();
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  function handleOnChangePrice(values: number[]) {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
    handleForm([priceMin, priceMax], 'price');
  }

  const [form, setForm] = useState({
    beds: '0',
    price: [],
    baths: '0',
    garages: '0',
  });

  const onPressApply = useCallback(() => {
    onFilterHouseList(form, type);
    setUseFiltered(true);
    onClose();
  }, [form, type]);

  function onPressCleanFilter() {
    setFilteredHousesList(housesList);
    setUseFiltered(true);
    onClose();
  }

  const handleForm = useCallback((value, field, typeIcon?) => {
    if (typeIcon && typeIcon === 'increment') {
      value = (Number(value) + 1).toString();

      setForm(prevState => ({
        ...prevState,
        [field]: value,
      }));
    } else if (typeIcon && typeIcon === 'decrement' && value > 0) {
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
        <Button
          width={150}
          height={40}
          fs={16}
          text="Clean filter"
          containerColor="white"
          textColor={colors.terciary}
          onPress={onPressCleanFilter}
        />
        <Button
          width={150}
          height={40}
          fs={16}
          text="Apply filter"
          onPress={onPressApply}
        />
      </FormButtonContainer>
    </>
  );
}

const styles = StyleSheet.create({
  buttonDisabled: {
    backgroundColor: '#f4f4f4',
  },
});
