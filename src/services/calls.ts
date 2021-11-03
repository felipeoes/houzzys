import { client } from './api';
import { Buffer } from 'buffer';

import MessageBuffer from '../services/buffer/MessageBuffer';

/*
  Estrutura TypeScript utilizada para tipar os objetos das propriedades na aplicação.
  Desta forma, os dados armazenados em memória referente às propriedades terão
  os atributos e tipos especificados na estrutura abaixo:
*/
export type PropertiesProps = {
  property_id: string; // identificador único
  location: {
    address: {
      line: string; // enderçeo completo
      state: string; // estado
    };
    neighborhoods: {
      name: string; // bairro
    }[];
  };
  list_price_max: number; // preço máximo para aluguel
  lot_size: {
    size: number; // tamanho do lote
    units: string; // quantidade de unidades no lote
  };
  description: {
    beds_max: number; // quantidade de quartos na propriedade
    baths_max: number; // quantidades de banheiros na propriedade
    garage_max: number; // quantidade de baragens na propriedade
    sqft_max: number;
  };
  photos: {
    href: string; // URL com a imagem da propriedade
  }[];
  tags?: {
    text: string[];
  }[];
};

export type FilteringParamsProps = {
  type?: string | boolean; // tipo de propriedade filtrada pelo usuário: para venda = for_sale(false) e para aluguel = for_rent(true)
  price: Array<Number>; // array que contem o preço mímimo e máximo desejado para alugel ou compra
  beds?: string; // quantidade mínima de quartos desejado na propriedade
  baths?: string; // quantidade mínima de quartos desejado na propriedade
  garages?: string; // quantidade mínima de garagens desejado na propriedade
};

/*
  Função responsável pelo envio de mensagens ao servidor via sockets e recebimento da resposta refernte
  a dados das propriedades. Implementamos uma classe chamada 'MessageBuffer', cujo conceito pode ser encontrado no relatório do projeto.
  Basicamente, o buffer permite armazenar os 'pedaços' das mensagens recebidas do servidor e armazená-los em um buffer até encontrar
  um delimitador. No caso do nosso projeto, o delimitador padrão utilizado por todas as mensagens
  é "\n". Quando o buffer identificar o delimitador, é possível fazer o parse da mensagem completa.
*/
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

        if (message) {
          properties.push(JSON.parse(message));
        }
      }

      //console.log(properties.length);
    } catch (error) {
      console.log(error);
    }
  });

  return properties;
}

/*
  Função responsável por criar o formato da mensagem que solicita ao servidor
  os dados das propriedades armazenadas no banco de dados.

  Formato da mensagem: properties_list\n
*/
export async function getHousesCall(): Promise<PropertiesProps[]> {
  let properties = handleOnReceiveProperties('properties_list\n');

  return properties;
}

/*
  Função responsável por criar o formato da mensagem para filtragem de proprieades do tipo
  'for_sale', ou seja, que estão à venda
  Formato da mensagem: for_sale;PRICE_MIN;PRICE_MAX;BEDS;BATHS;GARAGES\n

  Em que:
  PRICE_MIN=preço mínimo solicitado pelo usuário (inteiro)
  PRICE_MAX=preço máximo filtr pelo usuário (inteiro)
  BEDS=quantidade mínima de quartos na propriedade (inteiro)
  BATHS=quantidade mínima de banheiros na proprieade (inteiro)
  GARAGES=quantidade mínima de garagens na proprieade (inteiro)
*/
export async function getForSaleHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
  console.log(filteringParams);
  if (filteringParams.price.length === 0) {
    filteringParams.price[0] = 0;

    filteringParams.price[1] = 1000000;
  }

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

/*
  Função responsável por criar o formato da mensagem para filtragem de proprieades do tipo
  'for_rent', ou seja, que estão disponíveis para alugar
  Formato da mensagem: for_;PRICE_MIN;PRICE_MAX;BEDS;BATHS;GARAGES\n
  Em que;
  PRICE_MIN=preço mínimo solicitado pelo usuário (inteiro)
  PRICE_MAX=preço máximo filtr pelo usuário (inteiro)
  BEDS=quantidade mínima de quartos na propriedade (inteiro)
  BATHS=quantidade mínima de banheiros na proprieade (inteiro)
  GARAGES=quantidade mínima de garagens na proprieade (inteiro)
*/
export async function getForRentHousesCall(
  offset: number,
  filteringParams: FilteringParamsProps,
): Promise<PropertiesProps[]> {
  if (filteringParams.price.length === 0) {
    filteringParams.price[0] = 0;

    filteringParams.price[1] = 20000;
  }

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

/*
  Função responsável por criar o formato da mensagem que solicita ao servidor
  informações adicionais a respeito de uma propriedade específica.
  Formato da mensagem: property_id=PROPERTY_ID\n

  Os dados da mensagem de retorno do servidor é tratado por meio do MessageBuffer explicado anteriormente.

  Em que:
  PROPERTY_ID=identificador único de uma propeirdade do banco de dados
*/
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

        if (object) {
          property = JSON.parse(object);
        }
      }
    } catch (error) {
      console.log(error);
    }
  });

  return property;
}

/*
  Função responsável por criar o formato da mensagem para solicitar ao servidor
  o envio das localização das propriedades armazenadas no banco de dados.

  Para isso, a função prepara a seguinte mensagem: locations suggestion\n

  Os dados da mensagem de retorno do servidor é tratado por meio do MessageBuffer explicado anteriormente.
*/
export function getLocationsListCall() {
  var locationsList: any = [];

  client.write('locations_suggestion\n');

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
