import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { Message } from '@/types/Message'

type Props = {
  msg: Message
}

export const ChatBubble = (props: Props) => {
  const { userSettings } = useUserSettingsContext()
  const { msg } = props

  const isMessageLocal = msg.userSettings.nickname === userSettings.nickname

  return (
    <div
      key={msg.userSettings.nickname + msg.timestamp}
      className={`chat ${isMessageLocal ? 'chat-end' : 'chat-start'}`}
    >
      <div className="chat-header">
        {msg.userSettings.nickname}
        <time className="text-xs opacity-50 ml-2">
          {new Date(msg.timestamp).toLocaleTimeString()}
        </time>
      </div>
      <div
        className={`chat-bubble ${isMessageLocal ? 'bg-localMessage' : msg.userSettings.bgColor} text-white mt-2`}
      >
        {msg.data}
      </div>
    </div>
  )
}
