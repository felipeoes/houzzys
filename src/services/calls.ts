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
  price: Array<Number>;
  baths?: string;
  garages?: string;
};

function handleOnReceiveProperties(msg: string): PropertiesProps[] {
  let properties: PropertiesProps[] = [];
  client.write(msg);

  let received = new MessageBuffer('\n');

  client.on('data', (data: string | Buffer) => {
    try {
      let buffer = Buffer.from(data);
      let dataStr = buffer.toString('utf-8');

      received.push(dataStr);
      while (!received.isFinished()) {
        const message = received.handleData();
        properties.push(JSON.parse(message));
      }

      console.log(properties.length);
    } catch (error) {
      console.log(error);
    }
  });

  return properties;
}

export async function getHousesCall(): Promise<PropertiesProps[]> {
  let properties = handleOnReceiveProperties('properties_list\n');

  return properties;
}

export async function getForSaleHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
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

  let properties = handleOnReceiveProperties(mensagem);

  return properties;
}

export async function getForRentHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
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

  let properties = handleOnReceiveProperties(mensagem);

  console.log(mensagem);

  return properties;
}

var property;

export function getHouseDetailsCall(property_id: string): PropertiesProps {
  client.write('property id=' + property_id + '\n');

  let received = new MessageBuffer('\n');
  client.on('data', (data: string | Buffer) => {
    try {
      let buffer = Buffer.from(data);
      let dataStr = buffer.toString('utf-8');

      received.push(dataStr);
      while (!received.isFinished()) {
        const object = received.handleData();
        property = JSON.parse(object);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return property;
}

export function getLocationsListCall() {
  var locationsList: any = [];

  client.write('locations suggestion\n');

  let received = new MessageBuffer('\n');
  client.on('data', (data: string | Buffer) => {
    try {
      let buffer = Buffer.from(data);
      let dataStr = buffer.toString('utf-8');

      received.push(dataStr);
      while (!received.isFinished()) {
        const object = received.handleData();
        locationsList.push(object);
      }
    } catch (error) {
      console.log(error);
    }
  });

  return locationsList;

}
