import { userSettingsRepository } from '@/repository/userSettings'
import { userSettingsInitialState } from '@/repository/userSettings/localStorage'
import { Message } from '@/types/Message'
import { UserSettings } from '@/types/UserSettings'
import { PropsWithChildren, createContext, useState } from 'react'

type Context = {
  userSettings: UserSettings
  updateUserSettings: (userSettings: UserSettings) => void
  logout: (ws: WebSocket) => void
}

export const UserSettingsContext = createContext<Context>({
  userSettings: userSettingsInitialState,
  updateUserSettings: () => {},
  logout: () => {},
})

const repository = userSettingsRepository()

export const UserSettingsContextProvider = (props: PropsWithChildren) => {
  const [userSettings, setUserSettings] = useState<UserSettings>(
    repository.getUserSettings()
  )

  const updateUserSettings = (userSettings: UserSettings) => {
    setUserSettings(userSettings)
    repository.setUserSettings(userSettings)
  }

  const logout = (ws: WebSocket) => {
    const message: Message = {
      type: 'metadata',
      userSettings: userSettings,
      data: `${userSettings.nickname} saiu da sala.`,
      timestamp: Date.now(),
    }
    ws.send(JSON.stringify(message))
    ws.close()

    updateUserSettings(userSettingsInitialState)
    repository.logout()
  }

  console.log(userSettings)

  return (
    <UserSettingsContext.Provider
      value={{ userSettings, updateUserSettings, logout }}
    >
      {props.children}
    </UserSettingsContext.Provider>
  )
}
