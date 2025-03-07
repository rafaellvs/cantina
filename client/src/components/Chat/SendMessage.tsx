import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { Message, MessageEvent, MessageType } from '@/types/Message.type'
import { useState } from 'react'

type Props = {
  ws: WebSocket
}

export const SendMessage = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const { userSettings } = useUserSettingsContext()

  const sendMessage = () => {
    const msg: Message = {
      type: MessageType.MESSAGE,
      event: MessageEvent.MESSAGE,
      userSettings,
      data: inputValue,
      timestamp: Date.now(),
    }
    props.ws.send(JSON.stringify(msg))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue) return

    sendMessage()
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered flex-1"
      />
      <button type="submit" className="btn ml-2">
        enviar
      </button>
    </form>
  )
}
