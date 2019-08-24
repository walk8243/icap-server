import { createConnection } from 'net';

const client  = createConnection({ port: 1344 }, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('world!\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});
