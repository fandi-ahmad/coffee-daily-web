import { Link } from 'react-router-dom'
import ScreenLayout from '../../../../../../layouts/ScreenLayout'

const TitleHead = () => {
  return (
    <ScreenLayout className="pt-6">
      <div className="flex flex-row items-center mb-3">
        <Link to={'/profile'} className="text-xl">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h2 className="text-xl font-semibold ps-3">My Order</h2>
      </div>
    </ScreenLayout>
  )
}

export default TitleHead
