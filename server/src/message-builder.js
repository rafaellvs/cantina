export class MessageBuilder {
  constructor(nickname) {
    this.nickname = nickname;
  }

  userJoined() {
    return {
      type: MessageType.METADATA,
      event: MessageEvent.USER_JOINED,
      userSettings: { nickname: this.nickname },
      data: `${this.nickname} entrou na sala.`,
      timestamp: Date.now(),
    };
  }

  userLeft() {
    return {
      type: MessageType.METADATA,
      event: MessageEvent.USER_LEFT,
      userSettings: { nickname: this.nickname },
      data: `${this.nickname} saiu da sala.`,
      timestamp: Date.now(),
    };
  }

  usersOnline(usersOnline) {
    return {
      type: MessageType.METADATA,
      event: MessageEvent.USERS_ONLINE,
      data: usersOnline,
      timestamp: Date.now(),
    };
  }
}

const MessageEvent = {
  MESSAGE: "MESSAGE",
  USER_JOINED: "USER_JOINED",
  USER_LEFT: "USER_LEFT",
  USERS_ONLINE: "USERS_ONLINE",
};

const MessageType = {
  METADATA: "METADATA",
  MESSAGE: "MESSAGE",
};
