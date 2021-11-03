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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FilteringParamsProps
} from '../../services/calls';

export function Proposals() {
  const { onFilterHouseList } = useHousesHooks();
  const { onGetHouses } = useHousesHooks();

  const {
    filteredHousesList,
    loadingHousesList,
    setLoadingHousesList,
  } = useHousesStore();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [locationsModalVisible, setLocationsModalVisible] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [locationsList, setLocationsList] = useState<string[]>(['']);

  const toggleFilterModal = useCallback(() => {
    setFilterModalVisible(prevState => !prevState);
  }, []);

  const toggleLocationsModal = useCallback(() => {
    setLocationsModalVisible(prevState => !prevState);
  }, []);

  function handleOnChangeText(value: string) {
    setValueInput(value);
  }

  let firstTime = true;
 
  useEffect(() => {
    if(firstTime){

      AsyncStorage.getItem('idUser', (err, value) => {
        if (err) {
            console.log(err);
        } else {
          console.log(value);
          if(Number(value)>0){
            let form={
              beds: '0',
              price: [],
              baths: '0',
              garages: '0',
              idUser: value
            }
            onFilterHouseList(form, true);
          }
        }
      });
    }
    
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
        data={filteredHousesList}
        loading={loadingHousesList}
        onEndReached={()=>{}}>
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
              <Title>See your proposals here</Title>
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
          data={locationsList}
          visible={locationsModalVisible}
          onClose={toggleLocationsModal}
          onChangeTextInput={(value: string) => handleOnChangeText(value)}
        />
      )}
    </ScreenContainer>
  );
}
