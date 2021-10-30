import { client } from './api';
import { Buffer } from 'buffer';

import MessageBuffer from '../services/buffer/MessageBuffer';

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
  type?: string;
  beds?: string;
  price?: Array<Number>;
  baths?: string;
  garages?: string;
};

export async function getHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
  try {
    let properties: PropertiesProps[] = [];
    client.write('properties list\n');

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

export async function getForSaleHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
  try {
    let properties: PropertiesProps[] = [];

    console.log(filteringParams);
    const mensagem: string =
      filteringParams.type +
      ';' +
      filteringParams.price[0] +
      ';' +
      filteringParams.price[1] +
      ';' +
      filteringParams.beds +
      ';' +
      filteringParams.baths +
      ';' +
      filteringParams.garages +
      '\n';

    console.log(mensagem);

    client.write(mensagem);

    let received = new MessageBuffer('\n');
    client.on('data', (data: string | Buffer) => {
      console.log('cheguei');

      try {
        let buffer = Buffer.from(data);
        let dataStr = buffer.toString('utf-8');

        received.push(dataStr);
        while (!received.isFinished()) {
          const message = received.handleData();
          properties.push(JSON.parse(message));
        }

        // client.on('data', data => {
        //   received.push(data);
        //   while (!received.isFinished()) {
        //     const message = received.handleData();
        //     console.log(JSON.parse(message));
        //   }
        // });

        // const object = JSON.parse(dataStr);
        // properties.push(object);
        console.log(properties.length);
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
  client.write('property id=' + property_id + '\n');

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

  client.write('locations suggestion\n');

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
