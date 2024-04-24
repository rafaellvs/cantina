import { Chat } from '@/components/Chat'
import { Navbar } from '@/components/Navbar'
import { SendMessage } from '@/components/SendMessage'
// import { useWSContext } from '@/contexts/WS/hook'
import { WsConn, createWsConn } from '@/lib/ws'
import { Message } from '@/types/Message'
import { useEffect, useState } from 'react'

export const ChatPage = () => {
  const [chat, setChat] = useState<Array<Message>>([])
  const [ws, setWs] = useState<WebSocket | null>(null)

  const onMessage: WsConn['onMessage'] = (msg) => {
    setChat((chat) => [msg, ...chat])
  }

  // const { ws } = useWSContext({ onMessage })

  // useEffect(() => {
  //   return () => ws.close()
  // }, [])

  useEffect(() => {
    const ws = createWsConn({ onMessage })
    setWs(ws)
  }, [])

  if (!ws) return null

  return (
    <div className="w-screen h-dvh flex flex-col p-6 sm:p-12">
      <Navbar ws={ws} />
      <Chat chat={chat} />
      <SendMessage ws={ws} />
    </div>
  )
}
