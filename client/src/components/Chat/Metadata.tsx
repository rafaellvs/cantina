import { Message } from '@/types/Message'

type Props = {
  msg: Message
}

export const Metadata = (props: Props) => {
  return (
    <div>
      <p>{props.msg.data}</p>
    </div>
  )
}
