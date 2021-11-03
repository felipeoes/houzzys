import {
  FilteringParamsProps,
  getHousesCall,
  getForSaleHousesCall,
  getForRentHousesCall
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

  async function onGetHouses(): Promise<void> {
    setLoadingHousesList(true);
    const result = await getHousesCall();

    if (offset > 0) {
      const properties = result ? [...housesList, ...result] : housesList;
      setHousesList(properties);
    } else {
      setHousesList(result);
    }

    console.log(housesList);
    setTimeout(() => {
      setLoadingHousesList(false);
    }, 3000);
    setOffset(offset + 15);
  }

  async function onFilterHouseList(
    params: FilteringParamsProps,
    type: boolean,
  ): Promise<void> {
    setLoadingHousesList(true);
    setParams(params);

    console.log("TO NO FILTER HOUSE LIST");
    console.log(params, type);


    if (type === false) {
      params.type = 'for_sale';
      const result = await getForSaleHousesCall(offset, { ...params });
      console.log(
        'entrei no for sale',
        'quantidade de casas retornadas: ' + result.length,
      );
      setHousesList(result);
    } else if (type === true) {
      params.type = 'for_rent';
      const result = await getForRentHousesCall(offset, { ...params });
      console.log('for rent' + result.length);
      setHousesList(result);
    }

    setTimeout(() => {
      setLoadingHousesList(false);
    }, 3000);
  }

  return { onGetHouses, onFilterHouseList };
};
