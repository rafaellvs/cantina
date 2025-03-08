import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { Message } from '@/types/Message.type'

type Props = {
  msg: Message
}

export const ChatBubble = (props: Props) => {
  const { userSettings } = useUserSettingsContext()
  const { msg } = props
  const isMessageLocal = msg.userSettings.nickname === userSettings.nickname

  if (typeof msg.data !== 'string') return null

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
        className={`chat-bubble text-white mt-2`}
        style={{
          backgroundColor: isMessageLocal
            ? userSettings.bgColor
            : msg.userSettings.bgColor,
        }}
      >
        {msg.data}
      </div>
    </div>
  )
}
