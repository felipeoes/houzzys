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
};

export function LocationsModal({
  visible,
  onClose,
  onChangeTextInput,
}: LocationsModalProps) {
  const [locations, setLocations] = useState<string[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [loading, setLoading] = useState(true);

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

  function handleOnGetLocationsList() {
    const locs = getLocationsListCall();
    return locs;
  }

  useEffect(() => {
    const locs = handleOnGetLocationsList();
    setFilteredLocations(locs);
    setTimeout(() => {
      console.log(locations);
      setLoading(false);
    }, 2000);
    setLocations(locs);
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

      <LocationsListContainer>
        {loading && <Loading />}
        {!loading && locationsList}
      </LocationsListContainer>
    </Modal>
  );
}
