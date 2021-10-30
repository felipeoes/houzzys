import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { ProfileItemProps } from '../ProfileItemsList';

export const ProfileItemsListContainer = styled(
  FlatList as new () => FlatList<ProfileItemProps>,
).attrs({})``;
