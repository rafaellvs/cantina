import { UserSettings } from '@/types/UserSettings'

type MessageType = 'metadata' | 'message'

export type Message = {
  type: MessageType
  userSettings: UserSettings
  data: string
  timestamp: number
}
