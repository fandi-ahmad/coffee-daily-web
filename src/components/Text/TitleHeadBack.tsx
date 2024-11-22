import { Link } from 'react-router-dom'

interface TitleHeadBackType {
  to?: string
  text: string
  className?: string
}

const TitleHeadBack = (props: TitleHeadBackType) => {
  return (
    <div className={`flex flex-row items-center mb-3 ${props.className}`}>

      {props.to &&
        <Link to={props.to} className="text-xl pe-3">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      }

      <h2 className="text-xl font-semibold">{props.text}</h2>
    </div>
  )
}

export default TitleHeadBack
