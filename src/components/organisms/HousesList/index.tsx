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

function HousesList({
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
            : item.location.address.city + ', ' + item.location.address.state
        }`}
        description={`${item.location.address.line} - ${item.location.address.state} `}
        imageSource={
          item.photos
            ? item.photos[0].href
            : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
        }
        price={item.list_price_max ? item.list_price_max : item.list_price}
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

export default React.memo(HousesList);
