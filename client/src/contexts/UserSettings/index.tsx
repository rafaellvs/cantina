import { userSettingsRepository } from '@/repository/userSettings'
import { userSettingsInitialState } from '@/repository/userSettings/localStorage'
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
    ws.close()
    updateUserSettings(userSettingsInitialState)
    repository.logout()
  }

  return (
    <UserSettingsContext.Provider
      value={{ userSettings, updateUserSettings, logout }}
    >
      {props.children}
    </UserSettingsContext.Provider>
  )
}
