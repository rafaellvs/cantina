import { Message } from '@/types/Message.type'

type Props = {
  msg: Message
}

export const Metadata = (props: Props) => {
  const metadata = props.msg.data
  if (typeof metadata !== 'string') return null

  return (
    <div>
      <p>{metadata}</p>
    </div>
  )
}
