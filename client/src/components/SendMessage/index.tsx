import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { Message } from '@/types/Message'
import { useEffect, useRef, useState } from 'react'

type Props = {
  ws: WebSocket
}

export const SendMessage = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { userSettings } = useUserSettingsContext()

  const sendMessage = () => {
    const msg: Message = {
      type: 'message',
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

  // const handleClick = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  //     console.log(stream)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  useEffect(() => {
    if (!inputRef) return

    const msg: Message = {
      type: 'metadata',
      userSettings,
      data: `${userSettings.nickname} está digitando...`,
      timestamp: Date.now(),
    }

    let typingTimeout: NodeJS.Timeout
    const handleKeyUp = () => {
      if (typingTimeout) props.ws.send(JSON.stringify(msg))

      typingTimeout = setTimeout(() => {
        props.ws.send(JSON.stringify(msg))
      }, 250)
    }
    inputRef.current?.addEventListener('keyup', handleKeyUp)

    return () => inputRef.current?.removeEventListener('keyup', handleKeyUp)
  }, [inputRef])

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered flex-1"
        ref={inputRef}
      />
      {/* <button onClick={handleClick}>camera</button> */}
      <button type="submit" className="btn ml-2">
        enviar
      </button>
    </form>
  )
}
