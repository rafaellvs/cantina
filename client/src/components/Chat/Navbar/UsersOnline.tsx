import { UsersOnline } from '@/types/User.type'

type Props = {
  usersOnline: UsersOnline
}

export const UsersOnlineComponent = (props: Props) => {
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
