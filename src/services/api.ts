import TcpSocket from 'react-native-tcp-socket';

async function getServerIP() {
  const ip = fetch('https://shielded-fjord-54509.herokuapp.com/')
    .then(T => T.text())
    .then(ip => ip);
  return ip;
}

/*
  Estrutura responsável pela tipagem do objeto que contêm as informações necessárias
  para conexão do socket no lado do cliente via TCP com o socket no lado do servidor.

  As informações necessárias para realizar a conexão são:
*/
type ConnectionOptions = {
  port: number; // porta
  host: string; // endereço IP do servidor
  reuseAddress?: boolean | undefined;
};

const host = 'localhost';

const options: ConnectionOptions = {
  port: 29298,
  host: host,
  reuseAddress: true,
};

// criação da instância de um Socket TCP para requisições no lado do cliente
export const client = new TcpSocket.Socket();

export async function initializeConnection() {
  options.host = await getServerIP();
  // inicializando a conexão com o servidor
  client.connect(options, () => {
    client.write('Client connected \n');
  });

  // mensagem de conexão bem sucedida
  client.on('connect', () => {
    console.log('Opened client on ' + JSON.stringify(client.address()));
  });

  client.on('drain', () => {
    console.log('Client drained');
  });

  // mensagem de problemas na conexão com o servidor
  client.on('error', error => {
    console.log('Client error ' + error);
  });

  // mensagem de fechamento da conexão com o servidor
  client.on('close', error => {
    console.log('Client closed ' + (error ? error : ''));
  });

  return client;
}
