import React, { useEffect, useState } from 'react';
import { Input, Modal } from '../../index';
import { ScreenLine } from '../../../screens/HomeDetailScreen/styles';

import {
  LocationsListContainer,
  LocationsModalContainer,
  LocationText,
  LocationTextContainer,
} from './styles';
import { getLocationsListCall } from '../../../services/calls';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardTitle } from '../../atoms';

type LocationsModalProps = {
  data: string[];
  visible: boolean;
  onClose: () => void;
  children?: JSX.Element;
  onChangeTextInput: (value: string) => void;
};

export function LocationsModal({
  visible,
  onClose,
  onChangeTextInput,
}: LocationsModalProps) {
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const locationsList = filteredLocations.map((location, index) => {
    return (
      <>
        <LocationTextContainer
          key={index}
          onPress={() => {
            setSelectedLocation(location);
            onChangeTextInput(location);
          }}>
          <Icon name="map-marker" size={25} />
          <LocationText>{location}</LocationText>
        </LocationTextContainer>
        <ScreenLine mt={2} />
      </>
    );
  });

  let locations = [
    'cas 123, rua 10',
    'asjajs, loajs',
    'cas 123, rua 10',
    'asjajs, loajs',
    'cas 123, rua 10',
    'asjajs, loajs',
    'asasasas,01029',
  ];

  useEffect(() => {
    // locations = getLocationsListCall();
    setFilteredLocations(locations);
  }, []);

  const findLocation = query => {
    if (query) {
      const regex = new RegExp(`${query.trim()}`, 'i');
      setFilteredLocations(
        filteredLocations.filter(
          (location: string) => location.search(regex) >= 0,
        ),
      );
    } else {
      setFilteredLocations(locations);
    }
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Search" background>
      <ScreenLine />
      <CardTitle ml={40} mt={24}>
        Type the address and make sure {'\n'}you select a location to search for
      </CardTitle>
      <LocationsModalContainer>
        <Input
          mt={15}
          placeholder="Type the address"
          value={selectedLocation}
          onChangeText={(value: string) => {
            findLocation(value);
            onChangeTextInput(value);
          }}
          onEndEditing={value => setSelectedLocation(value.target.toString())}
        />
      </LocationsModalContainer>
      <LocationsListContainer>{locationsList}</LocationsListContainer>
    </Modal>
  );
}
