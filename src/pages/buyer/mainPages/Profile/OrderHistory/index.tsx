import ProductHistoryCard from "../../../../../components/Cards/ProductHistoryCard"
import ScreenLayout from "../../../../../layouts/ScreenLayout"
import NavigateButtons from "./components/NavigateButtons"
import TitleHead from "./components/TitleHead"

const OrderHistory = () => {
  return (
    <>
      <TitleHead/>
      <NavigateButtons/>

      <ScreenLayout className="pt-6">
        <ProductHistoryCard
          name="mood boost coffee"
          username_seller="shin"
          address="kota palu"
          price={20000}
          to={`/profile/order-history/product/1`}
        />
      </ScreenLayout>
    </>
  )
}

export default OrderHistory