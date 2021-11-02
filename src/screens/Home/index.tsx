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
import { useHousesHooks } from '../../services/hooks';
import { useHousesStore } from '../../services/stores';

import HousesList from '../../components/organisms/HousesList';
import { LocationsModal } from '../../components/organisms/LocationsModal';

export function HomeScreen() {
  const { onGetHouses } = useHousesHooks();
  const { housesList, loadingHousesList, setHousesList } = useHousesStore();
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

  // useEffect(() => {
  //   if (locationsModalVisible === false && valueInput !== '') {
  //     console.log('entrei para o filtro');
  //     console.log(valueInput);
  //     const houses = housesList.filter(house => {
  //       const fullAddress =
  //         house.location.address.line +
  //         ', ' +
  //         house.location.address.city +
  //         ', ' +
  //         house.location.address.state;

  //       console.log('aquii', fullAddress);

  //       return fullAddress === valueInput;
  //     });
  //     setHousesList(houses);
  //     console.log('filtro endereço', houses.length);
  //   }
  // }, [locationsModalVisible]);

  let firstTime = true;

  useEffect(() => {
    onGetHouses();
    setTimeout(() => {
      if (firstTime) {
        firstTime = false;
      }
    }, 2000);

    // locations = getLocationsListCall();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
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
