import { Chat } from '@/components/Chat/Chat'
import { Navbar } from '@/components/Navbar/Navbar'
import { SendMessage } from '@/components/Chat/SendMessage'
import { WsConn, createWsConn } from '@/lib/ws'
import { Message, MessageEvent } from '@/types/Message.type'
import { UsersOnline } from '@/types/User.type'
import { useEffect, useState } from 'react'

export const ChatPage = () => {
  const [chat, setChat] = useState<Message[]>([])
  const [ws, setWs] = useState<WebSocket | null>(null)
  const [usersOnline, setUsersOnline] = useState<UsersOnline>([])

  const onMessage: WsConn['onMessage'] = (msg) => {
    if (msg.event === MessageEvent.USERS_ONLINE) {
      typeof msg.data !== 'string' && setUsersOnline(msg.data)
      return
    }

    setChat((chat) => [msg, ...chat])
  }

  useEffect(() => {
    const ws = createWsConn({ onMessage })
    setWs(ws)
  }, [])

  if (!ws) return null

  return (
    <div className="w-screen h-dvh flex flex-col p-6 sm:p-12">
      <Navbar ws={ws} usersOnline={usersOnline} />
      <Chat chat={chat} />
      <SendMessage ws={ws} />
    </div>
  )
}
