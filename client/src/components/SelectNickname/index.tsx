import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { generateRandomUserColor } from '@/repository/userSettings'
import { useState } from 'react'

export const SelectNickname = () => {
  const [nickname, setNickname] = useState('')
  const { updateUserSettings } = useUserSettingsContext()

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateUserSettings({
      nickname,
      bgColor: generateRandomUserColor(),
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
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn block mx-auto w-full mt-3">
          entrar
        </button>
      </form>
    </>
  )
}
