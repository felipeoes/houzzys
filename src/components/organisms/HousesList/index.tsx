import React from 'react';
import { HouseCard } from '../../index';
import { PropertiesProps } from '../../../services/calls';
import { HouseListContainer } from './styles';

type HousesListProps = {
  loading: boolean;
  data: PropertiesProps[];
  children?: React.ReactElement;
  onEndReached: () => Promise<void>;
};

export function HousesList({
  data,
  children,
  loading,
  onEndReached,
}: HousesListProps) {
  function renderItem({ item }: { item: PropertiesProps }) {
    return (
      <HouseCard
        item={item}
        title={`${
          item.location.neighborhoods
            ? item.location.neighborhoods[0].name
            : 'Park Avenue Historic District'
        }`}
        description={`${item.location.address.line} - ${item.location.address.state} `}
        imageSource={
          item.photos
            ? item.photos[0].href
            : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
        }
        price={item.list_price_max}
      />
    );
  }

  return (
    <HouseListContainer
      data={data}
      renderItem={renderItem}
      refreshing={loading}
      ListHeaderComponent={children}
      keyExtractor={item => item.property_id}
      onEndReached={onEndReached}
    />
  );
}
