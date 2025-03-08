import { userSettingsRepositoryLocalStorage } from '@/repository/userSettings/localStorage'
import { UserSettingsRepository } from '@/types/User.type'

const SELECTED_REPOSITORY = 'localStorage'

export const userSettingsRepository = (): UserSettingsRepository => {
  switch (SELECTED_REPOSITORY) {
    case 'localStorage':
      return userSettingsRepositoryLocalStorage
  }
}
