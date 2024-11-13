import MenuOptionList from '../../../../../components/MenuOption/MenuOptionList'
import Line from '../../../../../components/MenuOption/Line'

const AccountSetting = () => {
  return (
    <>
      <h2 className="text-lg font-bold">Account</h2>

      <div className="rounded-md mt-3 overflow-hidden">
        <MenuOptionList icon="fa-user-gear" text="Account Settings" />
        <Line/>
        <MenuOptionList icon="fa-credit-card" text="Payment Details" />
        <Line/>
        <MenuOptionList icon="fa-bell" text="Notification Settings" />
        <Line/>
        <MenuOptionList icon="fa-location-dot" text="Address Management" />
        <Line/>
        <MenuOptionList icon="fa-arrow-right-arrow-left" text="Switch to Seller" />
      </div> 
    </>
  )
}

export default AccountSetting