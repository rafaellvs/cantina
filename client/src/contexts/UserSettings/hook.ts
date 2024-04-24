import { UserSettingsContext } from '@/contexts/UserSettings'
import { useContext } from 'react'

export const useUserSettingsContext = () => useContext(UserSettingsContext)
