import TcpSocket from 'react-native-tcp-socket';

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
    client.write('Client connected \n');
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
