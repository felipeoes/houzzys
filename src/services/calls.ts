import { client } from './api';
import { Buffer } from 'buffer';

export type PropertiesProps = {
  property_id: string;
  location: {
    address: {
      line: string;
      state: string;
    };
    neighborhoods: {
      name: string;
    }[];
  };
  list_price_max: number;
  lot_size: {
    size: number;
    units: string;
  };
  description: {
    beds_max: number;
    baths_max: number;
    garage_max: number;
    sqft_max: number;
  };
  photos: {
    href: string;
  }[];
  tags?: {
    text: string[];
  }[];
};

type ResponseProps = {
  properties: PropertiesProps[];
};

export type FilteringParamsProps = {
  sizeMin?: string;
  sizeMax?: string;
  priceMin?: string;
  priceMax?: string;
  bedsMin?: string;
  bathsMin?: string;
};

export async function getHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
  try {
    let properties: PropertiesProps[] = [];
    client.write('properties list');

    client.on('data', (data: string | Buffer) => {
      try {
        let buffer = Buffer.from(data);
        let dataStr = buffer.toString('utf-8');
        const object = JSON.parse(dataStr);
        properties.push(object);
        console.log(object);
      } catch (error) {
        console.log(error);
      }
    });

    return properties;
  } catch (error) {
    console.log(error);
  }
}

var property;

export function getHouseDetailsCall(property_id: string): PropertiesProps {
  client.write('property id=' + property_id);

  client.on('data', (data: string | Buffer) => {
    try {
      const object = JSON.parse(data);
      property = object;
    } catch (error) {
      console.log(error);
    }
  });

  return property;
}

export async function getLocationsListCall() {
  var locationsList: any = [];

  client.write('locations suggestion');

  client.on('data', data => {
    try {
      const location = data.toString();
      locationsList.push(location);
    } catch (e) {
      console.log(e);
    }
  });

  return locationsList;
}
