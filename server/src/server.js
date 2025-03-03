import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws, req) => {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const nickname = params.get("nickname");
  console.info("User connected: ", nickname);
  broadcast(generateUserJoinedMessage(nickname));

  ws.on("error", console.error);

  ws.on("close", () => {
    console.info(`User ${nickname} disconnected.`);
    broadcast(generateUserLeftMessage(nickname));
  });

  ws.on("message", function message(data) {
    console.info(`User ${nickname} sent message: `, data);
    broadcast(data);
  });
});

const broadcast = (data) => {
  wss.clients.forEach(function each(client) {
    client.send(data, { binary: false });
  });
};

const generateUserJoinedMessage = (nickname) =>
  JSON.stringify({
    type: "metadata",
    userSettings: { nickname },
    data: `${nickname} entrou na sala.`,
    timestamp: Date.now(),
  });

const generateUserLeftMessage = (nickname) =>
  JSON.stringify({
    type: "metadata",
    userSettings: { nickname },
    data: `${nickname} saiu da sala.`,
    timestamp: Date.now(),
  });
