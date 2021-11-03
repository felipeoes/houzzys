import {
  FilteringParamsProps,
  getHousesCall,
  getForSaleHousesCall,
  getForRentHousesCall,
} from '../calls';
import { useHousesStore } from '../stores';
export const useHousesHooks = () => {
  const {
    housesList,
    setHousesList,
    setLoadingHousesList,
    setFilteredHousesList,
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

    setTimeout(() => {
      setLoadingHousesList(false);
      console.log('received properties = ', result.length);
    }, 3000);
    setOffset(offset + 15);
  }

  async function onFilterHouseList(
    params: FilteringParamsProps,
    type: boolean,
  ): Promise<void> {
    setLoadingHousesList(true);
    setParams(params);

    console.log(params, type);

    if (type === false) {
      params.type = 'for_sale';

      const result = await getForSaleHousesCall(offset, { ...params });

      setFilteredHousesList(result);
      // setHousesList(result);
    } else if (type === true) {
      params.type = 'for_rent';

      const result = await getForRentHousesCall(offset, { ...params });
      setFilteredHousesList(result);
      // setHousesList(result);
    }

    setTimeout(() => {
      setLoadingHousesList(false);
    }, 3000);
  }

  return { onGetHouses, onFilterHouseList };
};
