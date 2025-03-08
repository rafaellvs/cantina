import { UsersOnlineComponent } from '@/components/Chat/Navbar/UsersOnline'
import { useUserSettingsContext } from '@/contexts/UserSettings/hook'
import { UsersOnline } from '@/types/User.type'

type Props = {
  ws: WebSocket
  usersOnline: UsersOnline
}

export const Navbar = (props: Props) => {
  const { logout } = useUserSettingsContext()

  const handleLogout = () => {
    logout(props.ws)
  }

  const handleUsersOnline = () => {
    const dialog = document.getElementById(
      'users-online-modal'
    ) as HTMLDialogElement
    dialog.showModal()
  }

  return (
    <>
      <div className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">Cantina do Tio Zé</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li onClick={handleUsersOnline}>
                <a>Quem tá on</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <UsersOnlineComponent usersOnline={props.usersOnline} />
    </>
  )
}
