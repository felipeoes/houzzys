/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState  } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import {
  Title,
  Loading,
} from '../../components/index';
import { useHousesHooks } from '../../services/hooks';
import { useHousesStore } from '../../services/stores';

import HousesList from '../../components/organisms/HousesList';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

export function Favorites() {
  const { onFilterHouseList } = useHousesHooks();

  const {
    filteredHousesList,
    loadingHousesList,
    setFromProposals
  } = useHousesStore();
 
  const navigation = useNavigation();

  let firstTime = true;
 
  useEffect(() => {
    AsyncStorage.getItem('idUser', (err, value) => {
      if (err) {
          console.log(err);
      } else {
        console.log(value);
        if(!(Number(value) > 0)){
          navigation.navigate('Login');
        }
      }
    })

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
              idUser: value,
              isProposal:false
            }
            onFilterHouseList(form, true);
          }
        }
      });
    }
    
    setFromProposals(true);
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={filteredHousesList}
        loading={loadingHousesList}
        onEndReached={()=>{}}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>See your favorites here</Title>
            </TitleContainer>
          
          </TopContainer>
          {loadingHousesList && <Loading />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
}
