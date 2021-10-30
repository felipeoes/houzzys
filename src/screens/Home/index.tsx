/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
  InputContainer,
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

function InputModal({ housesList, onPress }) {
  return (
    <InputContainer>
      <Input
        placeholder="Type the address"
        housesList={housesList}
        onPressIn={onPress}
      />
    </InputContainer>
  );
}

export function HomeScreen() {
  const { onGetHouses } = useHousesHooks();
  const { housesList, loadingHousesList } = useHousesStore();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [locationsModalVisible, setLocationsModalVisible] = useState(false);

  const toggleFilterModal = useCallback(() => {
    setFilterModalVisible(prevState => !prevState);
  }, []);

  const toggleLocationsModal = useCallback(() => {
    setLocationsModalVisible(prevState => !prevState);
  }, []);

  let firstTime = true;

  useEffect(() => {
    setTimeout(() => {
      if (firstTime) {
        firstTime = false;
      }
    }, 2000);
    onGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <HeaderContainer>
            <InputModal
              housesList={housesList}
              onPress={toggleLocationsModal}
            />
            {/* <InputContainer>
              <Input
                placeholder="Type the address"
                housesList={housesList}
                onPressIn={toggleLocationsModal}
              />
            </InputContainer> */}
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
          inputModal={InputModal({ housesList })}
        />
      )}
    </ScreenContainer>
  );
}
