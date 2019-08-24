import { createServer } from 'net';

const server = createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\n');
  c.pipe(c); // endじゃなくて、pipeにしないと'client disconnected'が表示されない。
});
server.on('error', (err) => {
  throw err;
});
server.listen(1344, () => {
  console.log('server bound');
});
