import { UserSettings, UserSettingsRepository } from '@/types/User.type'

const USERSETTINGS_LOCALSTORAGE_KEY = 'userSettings'

export const userSettingsInitialState: UserSettings = {
  nickname: '',
  bgColor: '',
}

export const getLocalStorageUserSettings = (): UserSettings => {
  const userSettings = localStorage.getItem(USERSETTINGS_LOCALSTORAGE_KEY)
  return userSettings ? JSON.parse(userSettings) : userSettingsInitialState
}

export const setLocalStorageUserSettings = (userSettings: UserSettings) =>
  localStorage.setItem(
    USERSETTINGS_LOCALSTORAGE_KEY,
    JSON.stringify(userSettings)
  )

export const deleteLocalStorageUserSettings = () =>
  setLocalStorageUserSettings({
    ...getLocalStorageUserSettings(),
    nickname: '',
  })

export const userSettingsRepositoryLocalStorage: UserSettingsRepository = {
  getUserSettings: getLocalStorageUserSettings,
  setUserSettings: setLocalStorageUserSettings,
  logout: deleteLocalStorageUserSettings,
}
