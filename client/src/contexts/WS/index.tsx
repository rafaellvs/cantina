// NOT IN USE YET

import { userSettingsRepository } from '@/repository/userSettings'
import { Message } from '@/types/Message'
import { PropsWithChildren, createContext, useEffect, useState } from 'react'

const WS_URL = 'ws://192.168.0.38:8080'

export type Props = PropsWithChildren & {
  onMessage: (msg: Message) => void
}

type WSContext = {
  ws: WebSocket
}

const propsInitialState = {
  ws: new WebSocket(WS_URL),
}
const userSettings = userSettingsRepository().getUserSettings()
export const WSContext = createContext<WSContext>(propsInitialState)

export const WSContextProvider = (props: Props) => {
  const [ws, setWs] = useState<WebSocket | null>(null)

  useEffect(() => {
    const ws = new WebSocket(WS_URL + `nickname=${userSettings.nickname}`)

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

    setWs(ws)
  }, [props])

  // TODO: Create error component
  if (!ws) return null

  return (
    <WSContext.Provider value={{ ws }}>{props.children}</WSContext.Provider>
  )
}
