import { WebSocketServer } from "ws";
import { MessageBuilder } from "./message-builder.js";
import {
  addToUsersOnline,
  removeFromUsersOnline,
  usersOnline,
} from "./usersOnline.js";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", (ws, req) => {
  const params = new URLSearchParams(req.url.split("?")[1]);
  const user = {
    nickname: params.get("nickname"),
  };
  console.info("User connected: ", user.nickname);

  const messageBuilder = new MessageBuilder(user.nickname);
  addToUsersOnline(user);
  broadcast(messageBuilder.userJoined());
  broadcast(messageBuilder.usersOnline(usersOnline));

  ws.on("error", console.error);

  ws.on("close", () => {
    console.info(`User ${user.nickname} disconnected.`);
    removeFromUsersOnline(user);
    broadcast(messageBuilder.userLeft());
    broadcast(messageBuilder.usersOnline(usersOnline));
  });

  ws.on("message", function message(data) {
    console.info(`User ${user.nickname} sent message: `, data.toString());
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
