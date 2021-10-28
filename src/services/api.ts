/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { API_URL, XRAPIDAPI_KEY, XRAPIDAPI_HOST } from '@env';
import TcpSocket from 'react-native-tcp-socket';
import db from '../../db_us_estate.json'; // This import style requires "esModuleInterop", see "side notes"
import { serialize } from 'react-serialize';

export const APIURL = API_URL;
export const APIKEY = XRAPIDAPI_KEY;
export const APIHOST = XRAPIDAPI_HOST;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': XRAPIDAPI_KEY,
    'x-rapidapi-host': XRAPIDAPI_HOST,
    useQueryString: true,
  },
});

type ConnectionOptions = {
  port: number;
  host: string;
  reuseAddress?: boolean | undefined;
};

const options: ConnectionOptions = {
  port: 14856,
  host: 'localhost',
  reuseAddress: true,
};

const server = new TcpSocket.Server();
export const client = new TcpSocket.Socket();

export function initializeConnection() {
  server.on('connection', socket => {
    socket.write('Connection established\r\n');
  });

  server.listen(options, () => {
    const port = server.address()?.port;
    if (!port) {
      throw new Error('Port not found');
    }

    client.connect(options, () => {
      client.write('properties list');
    });
  });

  server.on('connection', socket => {
    console.log(
      'Client connected to server on ' + JSON.stringify(socket.address()),
    );

    socket.on('data', data => {
      console.log('Server client received: ' + data);
      let msg: string = data.toString();

      if (msg === 'properties list') {
        const housesList = getHousesList();

        housesList.forEach(house => {
          const buffer = serialize(house);
          socket.write(buffer);
        });
      }

      if (msg.includes('property id=')) {
        const property_id = msg.substring(12);
        const property = getHousesDetail(property_id);

        const buffer = serialize(property);
        socket.write(buffer);
      }

      if (msg === 'locations suggestion') {
        const keywordsList = getLocationsList();

        keywordsList.forEach((location: string) => {
          socket.write(location);
        });
      }
    });

    socket.on('error', error => {
      console.log('Server client error ' + error);
    });

    socket.on('close', error => {
      console.log('Server client closed ' + (error ? error : ''));
    });
  });

  server.on('error', error => {
    console.log('Server error ' + error);
  });

  server.on('close', () => {
    console.log('Server closed');
  });

  client.on('connect', () => {
    console.log('Opened client on ' + JSON.stringify(client.address()));
  });

  client.on('drain', () => {
    console.log('Client drained');
  });

  client.on('error', error => {
    console.log('Client error ' + error);
  });

  client.on('close', error => {
    console.log('Client closed ' + (error ? error : ''));
  });

  return client;
}

function getHousesList() {
  return db.data.home_search.results;
}

function getHousesDetail(property_id: string) {
  return db.data.home_search.results.find(
    obj => obj.property_id === property_id,
  );
}

function getLocationsList() {
  var locations: string[] = [];

  db.data.home_search.results.forEach(obj => {
    if (obj.location != null) {
      let full_location =
        obj.location.address.line +
        ', ' +
        obj.location.address.city +
        ', ' +
        obj.location.address.state;
      locations.push(full_location);
    }
  });
  return locations;
}
export default server;
