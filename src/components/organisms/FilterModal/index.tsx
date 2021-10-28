/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import { useHousesHooks } from '../../../services/hooks';
import { Input, Button, Modal, InputLabel } from '../../index';
import {
  FilterContainer,
  FilterPriceView,
  FilterSubText,
  FilterSubtitle,
  FilterTextView,
  InputRowsContainer,
  InputRowsItems,
} from './styles';
import { ScreenLine } from '../../../screens/HomeDetailScreen/styles';
import { View } from 'react-native';
import { IconButton } from '../../index';
import { SliderExample } from '../SliderFilter';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function FilterModal({ visible, onClose }: FilterModalProps) {
  const { onFilterHouseList } = useHousesHooks();
  const [coloring, setColoring] = useState(true);
  const [bordering, setBordering] = useState(true);
  const [filling, setFilling] = useState(true);
  //const [zIndex, setZIndex] = useState(-999);

  function handleOnPressButton() {
    setColoring(!coloring);
    setBordering(!bordering);
    setFilling(!filling);
    // if (zIndex === -999) {
    //   setZIndex(999);
    // } else {
    //   setZIndex(-999);
    // }
  }
  const [form, setForm] = useState({
    size: '5',
    price: '',
    garages: '',
    baths: '',
  });

  const onPressApply = useCallback(() => {
    onFilterHouseList(form);
    onClose();
  }, [form]);

  const handleForm = useCallback((value, field) => {
    setForm(prevState => ({ ...prevState, [field]: value }));
  }, []);

  return (
    <Modal visible={visible} onClose={onClose} title="Filter" background>
      <ScreenLine />
      <View
        style={{
          width: 350,
          marginTop: 30,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{ zIndex: 2, marginRight: -16 }}>
          <IconButton
            onPress={handleOnPressButton}
            border={!bordering}
            transparent={!filling}
            coloring={!coloring}
            custom
            iconText="Rent"
          />
        </View>
        <IconButton
          onPress={handleOnPressButton}
          border={bordering}
          coloring={coloring}
          transparent={filling}
          custom2
          iconText="Buy"
        />
      </View>
      <FilterContainer>
        <SliderExample />

        <FilterSubtitle>Features</FilterSubtitle>
        <InputLabel mt={12} mb={6}>
          Size
        </InputLabel>
        <InputRowsContainer>
          <InputRowsItems>
            <Input
              value={form.sizeMin}
              onChangeText={value => handleForm(value, 'sizeMin')}
              keyboardType="numeric"
              placeholder="i.e. 77"
            />
          </InputRowsItems>
          <InputRowsItems>
            <Input
              value={form.sizeMax}
              onChangeText={value => handleForm(value, 'sizeMax')}
              keyboardType="numeric"
              placeholder="i.e. 200"
            />
          </InputRowsItems>
        </InputRowsContainer>

        <InputLabel mt={12} mb={6}>
          Preço
        </InputLabel>
        <InputRowsContainer>
          <InputRowsItems>
            <Input
              value={form.priceMin}
              onChangeText={value => handleForm(value, 'priceMin')}
              keyboardType="numeric"
              placeholder="i.e. 500"
            />
          </InputRowsItems>
          <InputRowsItems>
            <Input
              value={form.priceMax}
              onChangeText={value => handleForm(value, 'priceMax')}
              keyboardType="numeric"
              placeholder="i.e. 2000"
            />
          </InputRowsItems>
        </InputRowsContainer>

        <InputLabel mt={12} mb={6}>
          Rooms
        </InputLabel>
        <InputRowsContainer>
          <InputRowsItems>
            <Input
              value={form.bedsMin}
              onChangeText={value => handleForm(value, 'bedsMin')}
              keyboardType="numeric"
              placeholder="i.e. 2"
            />
          </InputRowsItems>
        </InputRowsContainer>

        <InputLabel mt={12} mb={6}>
          Baths
        </InputLabel>
        <InputRowsContainer>
          <InputRowsItems>
            <Input
              value={form.bathsMin}
              onChangeText={value => handleForm(value, 'bathsMin')}
              keyboardType="numeric"
              placeholder="i.e. 1"
            />
          </InputRowsItems>
        </InputRowsContainer>
      </FilterContainer>

      <Button mt={24} text="Aplicar" onPress={onPressApply} />
    </Modal>
  );
}
