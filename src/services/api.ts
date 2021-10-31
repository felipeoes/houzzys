/* eslint-disable @typescript-eslint/no-unused-vars */
import TcpSocket from 'react-native-tcp-socket';
import db from '../../db_us_estate.json'; // This import style requires "esModuleInterop", see "side notes"
import { serialize } from 'react-serialize';

type ConnectionOptions = {
  port: number;
  host: string;
  reuseAddress?: boolean | undefined;
};

const host: string = '192.168.0.39';

const options: ConnectionOptions = {
  port: 29298,
  host: host,
  reuseAddress: true,
};

export const client = new TcpSocket.Socket();

export function initializeConnection() {
  client.connect(options, () => {
    client.write('Client connected\n');
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
