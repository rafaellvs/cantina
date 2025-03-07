import { UserSettings } from '@/types/UserSettings.type'

type Props = {
  usersOnline: UserSettings[]
}

export const UsersOnline = (props: Props) => {
  return (
    <dialog id="users-online-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-2">
          Usuários online ({props.usersOnline.length})
        </h3>
        <div>
          {props.usersOnline.map((user) => (
            <p key={user.nickname}>{user.nickname}</p>
          ))}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">fechar</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}
