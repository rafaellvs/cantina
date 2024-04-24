import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080,
});

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    // const msg = JSON.parse(data)

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log(`sending ${data} to:`, client.extensions)
        client.send(data, { binary: isBinary });
      }
    });
  });
});