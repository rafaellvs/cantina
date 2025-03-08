import { userSettingsRepository } from '@/repository/userSettings'
import { userSettingsInitialState } from '@/repository/userSettings/localStorage'
import { UserSettings } from '@/types/User.type'
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
    repository.setUserSettings(userSettings)
    setUserSettings(repository.getUserSettings())
  }

  const logout = (ws: WebSocket) => {
    ws.close()
    repository.logout()
    setUserSettings(repository.getUserSettings())
  }

  return (
    <UserSettingsContext.Provider
      value={{ userSettings, updateUserSettings, logout }}
    >
      {props.children}
    </UserSettingsContext.Provider>
  )
}
