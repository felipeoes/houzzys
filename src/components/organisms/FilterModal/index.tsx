/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal } from '../../index';
import { FilterContainer } from './styles';
import { ScreenLine } from '../../../screens/HomeDetailScreen/styles';
import { View } from 'react-native';
import { IconButton } from '../../index';
import { Form } from '../Forms';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function FilterModal({ visible, onClose }: FilterModalProps) {
  const [coloring, setColoring] = useState(true);
  const [bordering, setBordering] = useState(true);
  const [filling, setFilling] = useState(true);
  const [type, setType] = useState(true); // true for rent, false for buy

  function handleOnPressButton(typeValue: boolean) {
    typeValue !== type ? handleOnChangeEffets() : '';
  }

  function handleOnChangeEffets() {
    setType(!type);
    setColoring(!coloring);
    setBordering(!bordering);
    setFilling(!filling);
  }

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
            onPress={() => handleOnPressButton(true)}
            border={!bordering}
            transparent={!filling}
            coloring={!coloring}
            custom
            iconText="Rent"
          />
        </View>
        <IconButton
          onPress={() => handleOnPressButton(false)}
          border={bordering}
          coloring={coloring}
          transparent={filling}
          custom2
          iconText="Buy"
        />
      </View>
      <FilterContainer>
        <Form onClose={onClose} type={type} />
      </FilterContainer>
    </Modal>
  );
}
