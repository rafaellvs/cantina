import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { generateRandomHexColor } from '@/utils'
import { useState } from 'react'

export const SelectNickname = () => {
  const { userSettings, updateUserSettings } = useUserSettingsContext()

  const [nickname, setNickname] = useState('')
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  const bgColorInitialState = userSettings.bgColor || generateRandomHexColor()
  const [bgColor, setBgColor] = useState(bgColorInitialState)
  const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateUserSettings({
      nickname,
      bgColor,
    })
  }

  return (
    <>
      <h1 className="text-2xl font-bold tracking-wide text-center">
        Seja bem vindo(a) à Cantina do Tio Zé!
      </h1>

      <p className="text-center pt-24">
        Escolha um apelido para entrar no bate-papo:
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] mx-auto text-center pt-6"
      >
        <div className="flex gap-3">
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className="input input-bordered w-full"
          />
          <input
            type="color"
            className="w-[40px] h-[40px]"
            value={bgColor}
            onChange={handleBgColorChange}
          />
        </div>
        <button type="submit" className="btn block mx-auto w-full mt-3">
          entrar
        </button>
      </form>
    </>
  )
}
