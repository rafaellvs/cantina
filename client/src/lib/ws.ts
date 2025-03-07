import { userSettingsRepository } from '@/repository/userSettings'
import { Message } from '@/types/Message.type'

// const WS_URL = 'ws://192.168.0.38:8080'
const WS_URL = 'ws://localhost:8080'

export type WsConn = {
  onMessage: (msg: Message) => void
}

export const createWsConn = (props: WsConn) => {
  const userSettings = userSettingsRepository().getUserSettings()
  const ws = new WebSocket(WS_URL + `?nickname=${userSettings.nickname}`)

  ws.onerror = (ev) => {
    console.log('Could not connect to server: ', ev)
  }

  ws.onclose = (ev) => {
    console.log('Closing connection with server...', ev)
  }

  ws.onopen = (ev) => {
    console.log('Connection with server opened!', ev)
  }

  ws.onmessage = (ev: MessageEvent) => {
    const message: Message = JSON.parse(ev.data)
    props.onMessage(message)
  }

  return ws
}
