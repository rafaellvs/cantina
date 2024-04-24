import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { IndexPage } from '@/pages'
import { ChatPage } from '@/pages/chat'

export const App = () => {
  const { userSettings } = useUserSettingsContext()

  return <div>{userSettings.nickname ? <ChatPage /> : <IndexPage />}</div>
}
