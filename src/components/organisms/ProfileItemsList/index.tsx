import React from 'react';
import { ProfileItem } from '../../molecules/ProfileItem';
import { ProfileItemsListContainer } from './styles';

export type ProfileItemProps = {
  title: string;
  iconName: string;
};

type ProfileItemsListProps = {
  loading: boolean;
  data: ProfileItemProps[];
  children?: React.ReactElement;
};

export default function ProfileItemsList({
  data,
  children,
  loading,
}: ProfileItemsListProps) {
  function renderItem({ item }: { item: ProfileItemProps }) {
    return <ProfileItem title={item.title} iconName={item.iconName} />;
  }

  return (
    <ProfileItemsListContainer
      data={data}
      renderItem={renderItem}
      refreshing={loading}
      ListHeaderComponent={children}
      keyExtractor={item => item.title}
    />
  );
}
