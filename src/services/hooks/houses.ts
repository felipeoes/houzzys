import {
  FilteringParamsProps,
  getHousesCall,
  getForSaleHousesCall,
} from '../calls';
import { useHousesStore } from '../stores';

export const useHousesHooks = () => {
  const {
    housesList,
    setHousesList,
    setLoadingHousesList,
    offset,
    setOffset,
    setParams,
  } = useHousesStore();

  async function onGetHouses(params?: FilteringParamsProps): Promise<void> {
    setLoadingHousesList(true);
    const result = await getHousesCall(offset, { ...params });

    if (offset > 0) {
      const properties = result ? [...housesList, ...result] : housesList;
      setHousesList(properties);
    } else {
      setHousesList(result);
    }

    console.log(housesList);
    setLoadingHousesList(false);
    setOffset(offset + 15);
  }

  async function onFilterHouseList(
    params: FilteringParamsProps,
  ): Promise<void> {
    setLoadingHousesList(true);
    setParams(params);

    params.type = 'for_sale';
    if (params.type === 'for_sale') {
      const result = await getForSaleHousesCall(offset, { ...params });
      console.log(
        'entrei no for sale',
        'quantidade de casas retornasdas' + result.length,
      );
      setHousesList(result);
    }

    setLoadingHousesList(false);
  }

  return { onGetHouses, onFilterHouseList };
};
