import { ChatBubble } from '@/components/Chat/ChatBubble'
import { Metadata } from '@/components/Chat/Metadata'
import { Message, MessageType } from '@/types/Message.type'

type Props = {
  chat: Array<Message>
}

export const Chat = (props: Props) => {
  return (
    <div className="text-left flex-1 overflow-y-auto my-6 flex flex-col-reverse pr-4">
      {props.chat.map((msg) => renderChatMessage(msg))}
    </div>
  )
}

const renderChatMessage = (msg: Message) => {
  const key = msg.userSettings.nickname + msg.timestamp

  switch (msg.type) {
    case MessageType.MESSAGE:
      return <ChatBubble key={key} msg={msg} />

    case MessageType.METADATA:
      return <Metadata key={key} msg={msg} />
  }
}
