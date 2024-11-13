import { Link } from 'react-router-dom'
import MenuOptionIcon from '../../../../../components/MenuOption/MenuOptionIcon'

interface LinkMenuOptionIconProps {
  to: string
  text: string
  icon: string
  value?: number
}

const LinkMenuOptionIcon = (props: LinkMenuOptionIconProps) => {
  return (
    <Link to={`/profile/order-history/${props.to}`}>
      <MenuOptionIcon
        icon={props.icon}
        text={props.text}
        value={props.value}
      />
    </Link>
  )
}

export default LinkMenuOptionIcon
