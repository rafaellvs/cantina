import WebSocket, { WebSocketServer } from "ws";
import { MessageBuilder } from "./message-builder.js";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws, req) => {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const nickname = params.get("nickname");
  console.info("User connected: ", nickname);

  const messageBuilder = new MessageBuilder(nickname);
  broadcast(messageBuilder.userJoined());

  ws.on("error", console.error);

  ws.on("close", () => {
    console.info(`User ${nickname} disconnected.`);
    broadcast(messageBuilder.userLeft());
  });

  ws.on("message", function message(data) {
    console.info(`User ${nickname} sent message: `, data.toString());
    broadcast(data);
  });
});

const broadcast = (data) => {
  const message = resolveMessage(data);

  wss.clients.forEach(function each(client) {
    client.send(message);
  });
};

const resolveMessage = (data) => {
  if (typeof data === "string") return data;
  if (Buffer.isBuffer(data)) return data.toString();

  return JSON.stringify(data);
};
