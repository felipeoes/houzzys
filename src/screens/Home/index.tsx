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
  HousesList,
  FilterModal,
  DetailText,
} from '../../components/index';
import { useHousesHooks } from '../../services/hooks';
import { useHousesStore } from '../../services/stores';
import { InputIcon } from '../../components/molecules/Input/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from '../../components/molecules/DropdownMenu';

import { colors } from '../../styles/colors';

export function HomeScreen() {
  const { onGetHouses } = useHousesHooks();
  const { housesList, loadingHousesList } = useHousesStore();
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const toggleFilterModal = useCallback(() => {
    setFilterModalVisible(prevState => !prevState);
  }, []);

  useEffect(() => {
    onGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <HousesList
        data={housesList}
        loading={loadingHousesList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <HeaderContainer>
            <InputIcon>
              <Icon name="user-circle" size={35} color={colors.primary} />
              {/* <DetailText>
                {''} Profile
                <Icon name="chevron-down" size={16} color={colors.primary} /> *
              </DetailText> */}
            </InputIcon>
            <InputContainer>
              <Input placeholder="Type the address" housesList={housesList} />
            </InputContainer>
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
    </ScreenContainer>
  );
}
