import create from 'zustand';

import { FilteringParamsProps, PropertiesProps } from '../calls';

type State = {
  offset: number;
  setOffset: (offset: number) => void;

  loadingHousesList: boolean;
  setLoadingHousesList: (loading: boolean) => void;

  housesList: PropertiesProps[];
  setHousesList: (houses: PropertiesProps[]) => void;

  filteredHousesList: PropertiesProps[];
  setFilteredHousesList: (filteredHouses: PropertiesProps[]) => void;

  selectedHouse: PropertiesProps;
  setSelectedHouse: (selectedHouse: PropertiesProps) => void;

  params: FilteringParamsProps;
  setParams: (params: FilteringParamsProps) => void;
};

export const useHousesStore = create<State>(set => ({
  offset: 0,
  setOffset: (offset: number) => set({ offset }),

  loadingHousesList: true,
  setLoadingHousesList: loadingHousesList => set({ loadingHousesList }),

  housesList: [],
  setHousesList: housesList => set({ housesList }),

  filteredHousesList: [],
  setFilteredHousesList: filteredHousesList => set({ filteredHousesList }),

  selectedHouse: {} as PropertiesProps,
  setSelectedHouse: selectedHouse => set({ selectedHouse }),

  params: {} as FilteringParamsProps,
  setParams: params => set({ params }),
}));
