import ScreenLayout from "@/layouts/ScreenLayout"
import MenuOptionList from "@/components/MenuOption/MenuOptionList"
import { Link } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import AccountSetting from "./components/AccountSetting"
import LinkMenuOptionIcon from "./components/LinkMenuOptionIcon"

const Profile = () => {
  return (
    <>
      <HeroSection/>

      <ScreenLayout className="pb-6">

        <div className="pt-6">

          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">My Order</h2>
            <Link to={'/profile/order-history/packaged'} className="flex flex-row items-center cursor-pointer">
              <span className="text-sm me-2">See Order History</span>
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          <div className="bg-white rounded-md grid grid-cols-3 p-4 mt-3">
            {/* link to: /profile/order-history/${props.to} */}
            <LinkMenuOptionIcon to="packaged" text="Packaged" icon="fa-box-open" value={2} />
            <LinkMenuOptionIcon to="delivery" text="Delivery" icon="fa-truck-fast" value={2} />
            <LinkMenuOptionIcon to="finished" text="Finished" icon="fa-flag" value={2} />
          </div>

        </div>


        <div className="pt-6">
          <AccountSetting/>
          <div className="rounded-md mt-8 overflow-hidden">
            <MenuOptionList icon="fa-right-from-bracket" text="Log Out" />
          </div>
        </div>

      </ScreenLayout>
    </>
  )
}

export default Profile