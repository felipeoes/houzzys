/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  HouseFeatureCard,
  IconButton,
  Loading,
} from '../../components';
import { PropertiesProps, getHouseDetailsCall, postFavorite } from '../../services/calls';
import { useHousesStore } from '../../services/stores/index';
import {
  BottomScreenContainer,
  FeaturesContainer,
  ImageBackground,
  ScreenContainer,
  HomeFeaturesContainer,
  ScreenLine,
  ProposalCard,
  ProposalCardTextContainer,
} from './styles';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/stores/db';

import { Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  postProposal,
  FilteringParamsProps
} from '../../services/calls';

export function HomeDetailScreen() {
  const { selectedHouse } = useHousesStore();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState<PropertiesProps>(
    {} as PropertiesProps,
  );

  const [favorite, setFavorite] = useState(false);

  function handleOnPressArrowBack() {
    navigation.goBack();
  }

  let nIntervId;

  function fetchHouseDetails() {
    if (!nIntervId) {
      nIntervId = setInterval(getHouseDetails, 1000);
    }
  }

  function stopFetchingHouseDetails() {
    clearInterval(nIntervId);
    nIntervId = null;
  }

  async function getHouseDetails() {
    const result = getHouseDetailsCall(selectedHouse.property_id);
    if (result) {
      stopFetchingHouseDetails();
    }
    setHouseDetail(result);
    //console.log(result);
  }

  const checkIfHouseIsFavorite = useCallback(async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  }, []);

  const saveFavoriteHouse = useCallback(async () => {
    console.log("handleOnPressFavoriteButton: ");
    AsyncStorage.getItem('idUser', (err, value) => {
      if (err) {
          console.log(err);
      } else {
        console.log(value);
        if(Number(value)>0){
          const user:FilteringParamsProps={
            type:"favorite",
            price:[],
            idUser:value,
            propertyId:selectedHouse.property_id
          }
          postFavorite(user);
          navigation.navigate('Home');
          
        }else{
          navigation.navigate('Login');
        }
      }
    })

    // if (favorite) {
    //   await removeHouseAsFavorite(selectedHouse.property_id);
    //   setFavorite(false);
    //   Alert.alert('Removed!', 'Property unfavorited successfully.');
    // } else {
    //   await saveHouseAsFavorite(selectedHouse.property_id);
    //   setFavorite(true);
    //   Alert.alert('Saved!', 'Property favorited successfully.');
    // }
  }, [favorite]);

  function prettifyTextDetail(detail: string) {
    let splitedDetail = detail.split('_');

    for (let i = 0; i < splitedDetail.length; i++) {
      splitedDetail[i] =
        splitedDetail[i][0].toUpperCase() + splitedDetail[i].substr(1);
    }

    detail = splitedDetail.join(' ');
    return detail;
  }
  function handleOnPressProposalButton() {
    console.log("handleOnPressProposalButton: ");
    AsyncStorage.getItem('idUser', (err, value) => {
      if (err) {
          console.log(err);
      } else {
        console.log(value);
        if(Number(value)>0){
          const user:FilteringParamsProps={
            type:"proposal",
            price:[houseDetail.list_price_max,0],
            idUser:value,
            propertyId:selectedHouse.property_id
          }
          postProposal(user);
          navigation.navigate('Home');
          
        }else{
          navigation.navigate('Login');
        }
      }
    })
  }

  useEffect(() => {
    fetchHouseDetails();

    // setTimeout(() => {
    //   fetchHouseDetails();
    // }, 1000);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    checkIfHouseIsFavorite();
  }, [selectedHouse]);

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          onPress={handleOnPressArrowBack}
          iconName="keyboard-arrow-left"
          transparent
        />
        <IconButton
          onPress={saveFavoriteHouse}
          iconName={favorite ? 'star' : 'star-outline'}
          fill={favorite}
          transparent
        />
      </ImageBackground>
      <BottomScreenContainer>
        {loading || !houseDetail ? (
          <Loading />
        ) : (
          <>
            <DetailTitle>
              {houseDetail.location && houseDetail.location.neighborhoods
                ? houseDetail.location.neighborhoods[0].name
                : houseDetail.location.address.city +
                  ', ' +
                  houseDetail.location.address.state}
            </DetailTitle>

            <DetailText>{`${
              houseDetail.location && houseDetail.location.address
                ? houseDetail.location.address.line
                : 'ADDRESS NOT FOUND'
            } - ${
              houseDetail.location && houseDetail.location.address
                ? houseDetail.location.address.state
                : 'STATE NOT FOUND'
            }`}</DetailText>
            <ScreenLine />
            <ProposalCard>
              <ProposalCardTextContainer>
                <DetailText>Price</DetailText>
                <DetailSubTitle>
                  U${' '}
                  {Number(
                    houseDetail.status === 'for_rent'
                      ? houseDetail.list_price_max
                      : houseDetail.list_price,
                  )}
                  {houseDetail.status === 'for_rent' ? '/mo' : ''}
                </DetailSubTitle>
              </ProposalCardTextContainer>

              <Button
                mt={0}
                width={170}
                height={40}
                mr={15}
                text="Make proposal"
                fs={16}
                onPress={handleOnPressProposalButton}
                style={styles.shadow}
              />
            </ProposalCard>

            <DetailSectionTitle mt={24} mb={12}>
              Details
            </DetailSectionTitle>
            <FeaturesContainer>
              <HouseFeatureCard
                iconName="arrows-alt"
                featureText={`${
                  houseDetail.description && houseDetail.status === 'for_rent'
                    ? houseDetail.description.sqft_max
                    : houseDetail.description.sqft
                } sqfts`}
              />
              <HouseFeatureCard
                iconName="bed"
                featureText={`${
                  houseDetail.description && houseDetail.status === 'for_rent'
                    ? houseDetail.description.beds_max
                    : houseDetail.description.beds
                } beds`}
              />
              <HouseFeatureCard
                iconName="bath"
                featureText={`${
                  houseDetail.description && houseDetail.status === 'for_rent'
                    ? houseDetail.description.baths_max
                    : houseDetail.description.baths
                } baths`}
              />
            </FeaturesContainer>

            <DetailSectionTitle mt={24} mb={12}>
              Home Features
            </DetailSectionTitle>
            <HomeFeaturesContainer>
              {houseDetail?.tags &&
                houseDetail.tags.map((item, index) => (
                  <DetailText
                    key={index}
                    mr={25}
                    mb={5}>{`-${prettifyTextDetail(item)}`}</DetailText>
                ))}
            </HomeFeaturesContainer>
          </>
        )}
      </BottomScreenContainer>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.37,
    shadowRadius: 5.49,

    elevation: 4,
  },
});
