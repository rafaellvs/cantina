import { UserSettings } from '@/types/UserSettings.type'

export enum MessageType {
  METADATA = 'METADATA',
  MESSAGE = 'MESSAGE',
}

export enum MessageEvent {
  MESSAGE = 'MESSAGE',
  USER_JOINED = 'USER_JOINED',
  USER_LEFT = 'USER_LEFT',
  USERS_ONLINE = 'USERS_ONLINE',
}

export type Message = {
  type: MessageType
  event: MessageEvent
  userSettings: UserSettings
  data: string | UserSettings[]
  timestamp: number
}
