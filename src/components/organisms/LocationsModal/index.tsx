/* eslint-disable react-hooks/exhaustive-deps */
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
import { Loading } from '../../molecules';

type LocationsModalProps = {
  visible: boolean;
  onClose: () => void;
  children?: JSX.Element;
  onChangeTextInput: (value: string) => void;
  width?: number;
  height?: number;
};

export function LocationsModal({
  visible,
  onClose,
  onChangeTextInput,
  width,
  height,
}: LocationsModalProps) {
  const [locations, setLocations] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [heightModal, setHeightModal] = useState(100);

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

  function onCloseModal() {
    setHeightModal(0);
  }

  function handleOnGetLocationsList() {
    const locs = getLocationsListCall();
    return locs;
  }

  useEffect(() => {
    if (filteredLocations.length === 0) {
      const locs = handleOnGetLocationsList();
      setFilteredLocations(locs);
      setLocations(locs);
      console.log('ENTREI NO FILTERED');
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
    <Modal
      visible={visible}
      onClose={onClose}
      title="Search"
      background
      heightModal={heightModal}>
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

      <LocationsListContainer>
        {loading && <Loading />}
        {!loading && locationsList}
      </LocationsListContainer>
    </Modal>
  );
}
