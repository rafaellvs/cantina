import { MessageType, MessageEvent } from "@/types/Message.type";
import { UsersOnline } from "@/types/User.type";

export class MessageBuilder {
  nickname: string;

  constructor(nickname: string) {
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

  usersOnline(usersOnline: UsersOnline) {
    return {
      type: MessageType.METADATA,
      event: MessageEvent.USERS_ONLINE,
      data: usersOnline,
      timestamp: Date.now(),
    };
  }
}
