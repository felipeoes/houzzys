/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  DetailSectionTitle,
  DetailSubTitle,
  DetailText,
  DetailTitle,
  HouseFeatureCard,
  IconButton,
  Loading,
} from '../../components';
import { PropertiesProps, getHouseDetailsCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores/index';
import {
  BottomScreenContainer,
  FeaturesContainer,
  ImageBackground,
  ScreenContainer,
  HomeFeaturesContainer,
  ScreenLine,
} from './styles';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/stores/db';

import { Alert } from 'react-native';

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
    console.log(result);
  }

  const checkIfHouseIsFavorite = useCallback(async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  }, []);

  const saveFavoriteHouse = useCallback(async () => {
    if (favorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      setFavorite(false);
      Alert.alert('Removed!', 'Property unfavorited successfully.');
    } else {
      await saveHouseAsFavorite(selectedHouse.property_id);
      setFavorite(true);
      Alert.alert('Saved!', 'Property favorited successfully.');
    }
  }, [favorite]);

  useEffect(() => {
    fetchHouseDetails();

    setTimeout(() => {
      fetchHouseDetails();
    }, 1000);

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
                : 'Park Avenue Historic District'}
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
            <DetailSubTitle>
              U${' '}
              {Number(
                houseDetail.list_price_max ? houseDetail.list_price_max : 0,
              ).toFixed(2)}
            </DetailSubTitle>

            <ScreenLine />
            <DetailSectionTitle mt={24} mb={12}>
              Details
            </DetailSectionTitle>
            <FeaturesContainer>
              <HouseFeatureCard
                iconName="arrows-alt"
                featureText={`${
                  houseDetail.description && houseDetail.description.sqft_max
                    ? houseDetail.description.sqft_max
                    : 0
                } sqfts`}
              />
              <HouseFeatureCard
                iconName="bed"
                featureText={`${
                  houseDetail.description && houseDetail.description.beds_max
                    ? houseDetail.description.beds_max
                    : 0
                } beds`}
              />
              <HouseFeatureCard
                iconName="bath"
                featureText={`${
                  houseDetail.description && houseDetail.description.baths_max
                    ? houseDetail.description.baths_max
                    : 0
                } baths`}
              />
            </FeaturesContainer>

            <DetailSectionTitle mt={24} mb={12}>
              Home Features
            </DetailSectionTitle>
            <HomeFeaturesContainer>
              {houseDetail?.tags &&
                houseDetail.tags.map(item => (
                  <DetailText
                    key={item}
                    mr={25}
                    mb={5}>{`-${item}`}</DetailText>
                ))}
            </HomeFeaturesContainer>
          </>
        )}
      </BottomScreenContainer>
    </ScreenContainer>
  );
}
