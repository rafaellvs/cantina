// import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/theme/index.css'
import { App } from '@/components/App'
import { UserSettingsContextProvider } from '@/contexts/UserSettings'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <UserSettingsContextProvider>
    <App />
  </UserSettingsContextProvider>
  // </React.StrictMode>
)
