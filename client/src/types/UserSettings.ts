export type UserSettings = {
  nickname: string
  bgColor: string
  isTyping: boolean
}

export type UserSettingsRepository = {
  getUserSettings: () => UserSettings
  setUserSettings: (userSettings: UserSettings) => void
  logout: () => void
}
