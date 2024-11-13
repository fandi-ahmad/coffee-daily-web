import { Link, useLocation } from 'react-router-dom'
import RoundedButton from './RoundedButton'

interface LinkRoundedButtonProps {
  to: string
  text: string
  value?: number
}

const LinkRoundedButton = (props: LinkRoundedButtonProps) => {
  const location = useLocation()

  return (
    <Link to={props.to}>
      <RoundedButton
        value={props.value}
        isActive={props.to === location.pathname}
      >
        {props.text}
      </RoundedButton>
    </Link>
  )
}

export default LinkRoundedButton