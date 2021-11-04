/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
  HeaderContainer,
} from './styles';
import {
  Title,
  Input,
  IconButton,
  Loading,
  FilterModal,
} from '../../components/index';
import { useHousesStore } from '../../services/stores';

import HousesList from '../../components/organisms/HousesList';
import { LocationsModal } from '../../components/organisms/LocationsModal';

export function HomeScreen() {
  const {
    housesList,
    loadingHousesList,
    filteredHousesList,
    setFilteredHousesList,
    useFiltered,
    setUseFiltered,
  } = useHousesStore();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [locationsModalVisible, setLocationsModalVisible] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const toggleFilterModal = useCallback(() => {
    setFilterModalVisible(prevState => !prevState);
  }, []);

  const toggleLocationsModal = useCallback(() => {
    setLocationsModalVisible(prevState => !prevState);
  }, []);

  function handleOnChangeText(value: string) {
    setValueInput(value);
  }

  const handleOnChooseData = useCallback(() => {
    if (useFiltered) {
      console.log('use filtered');
      return filteredHousesList;
    }

    console.log('use normal');

    return housesList;
  }, [housesList, filteredHousesList]);

  useEffect(() => {
    if (locationsModalVisible === false && valueInput !== '') {
      console.log(valueInput);
      const houses = housesList.filter(house => {
        if (house.status === 'for_rent') {
          const fullAddressForRent =
            house.location.address.line +
            ', ' +
            house.location.address.city +
            ', ' +
            house.location.address.state;

          return fullAddressForRent === valueInput;
        } else {
          const fullAddressForSale =
            house.location.address.city + ', ' + house.location.address.state;
          return fullAddressForSale === valueInput;
        }
      });

      if (houses.length > 0) {
        setFilteredHousesList(houses);
        setUseFiltered(true);
      }
    }
  }, [locationsModalVisible]);

  return (
    <ScreenContainer>
      <HousesList data={handleOnChooseData()} loading={loadingHousesList}>
        <ContentContainer>
          <HeaderContainer>
            <Input
              mb={34}
              onPressIn={toggleLocationsModal}
              placeholder="Type the address"
              defaultValue={valueInput}
              value={valueInput}
              onChangeText={(value: string) => handleOnChangeText(value)}
            />
          </HeaderContainer>

          <TopContainer>
            <TitleContainer>
              <Title>Find your home here</Title>
            </TitleContainer>
            <IconButton
              iconText="Filter"
              iconName="filter-list"
              custom
              onPress={toggleFilterModal}
            />
          </TopContainer>
          {loadingHousesList && <Loading />}
        </ContentContainer>
      </HousesList>
      {filterModalVisible && (
        <FilterModal visible={filterModalVisible} onClose={toggleFilterModal} />
      )}
      {locationsModalVisible && (
        <LocationsModal
          visible={locationsModalVisible}
          onClose={toggleLocationsModal}
          onChangeTextInput={(value: string) => handleOnChangeText(value)}
        />
      )}
    </ScreenContainer>
  );
}
