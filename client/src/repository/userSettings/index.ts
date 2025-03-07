import { userSettingsRepositoryLocalStorage } from '@/repository/userSettings/localStorage'
import { UserSettingsRepository } from '@/types/UserSettings.type'
import { generateRandomNumberBetween } from '@/utils'

const SELECTED_REPOSITORY = 'localStorage'

export const userSettingsRepository = (): UserSettingsRepository => {
  switch (SELECTED_REPOSITORY) {
    case 'localStorage':
      return userSettingsRepositoryLocalStorage
  }
}

const resolveBgColor = (id: number) => {
  switch (id) {
    case 1:
      return 'bg-chat1'

    case 2:
      return 'bg-chat2'

    case 3:
      return 'bg-chat3'

    case 4:
      return 'bg-chat4'

    case 5:
      return 'bg-chat5'

    case 6:
      return 'bg-chat6'

    case 7:
      return 'bg-chat7'

    default:
      return 'bg-chat1'
  }
}

export const generateRandomUserColor = () =>
  resolveBgColor(generateRandomNumberBetween(1, 7))
