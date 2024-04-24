import { UserSettings, UserSettingsRepository } from '@/types/UserSettings'

const USERSETTINGS_LOCALSTORAGE_KEY = 'userSettings'

export const userSettingsInitialState: UserSettings = {
  nickname: '',
  bgColor: '',
  isTyping: false,
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
  localStorage.removeItem(USERSETTINGS_LOCALSTORAGE_KEY)

export const userSettingsRepositoryLocalStorage: UserSettingsRepository = {
  getUserSettings: getLocalStorageUserSettings,
  setUserSettings: setLocalStorageUserSettings,
  logout: deleteLocalStorageUserSettings,
}
