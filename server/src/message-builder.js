export class MessageBuilder {
  constructor(nickname) {
    this.nickname = nickname;
  }

  userJoined() {
    return {
      type: "metadata",
      userSettings: { nickname: this.nickname },
      data: `${this.nickname} entrou na sala.`,
      timestamp: Date.now(),
    };
  }

  userLeft() {
    return {
      type: "metadata",
      userSettings: { nickname: this.nickname },
      data: `${this.nickname} saiu da sala.`,
      timestamp: Date.now(),
    };
  }
}
