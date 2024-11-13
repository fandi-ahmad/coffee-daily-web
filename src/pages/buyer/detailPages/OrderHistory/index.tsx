import ProductHistoryCard from "../../../../components/Cards/ProductHistoryCard"
import ScreenLayout from "../../../../layouts/ScreenLayout"
import NavigateButtons from "./components/NavigateButtons"
import TitleHead from "./components/TitleHead"

const OrderHistory = () => {
  return (
    <>
      <TitleHead/>
      <NavigateButtons/>

      <ScreenLayout className="pt-6">
        <ProductHistoryCard/>
        <ProductHistoryCard/>
      </ScreenLayout>
    </>
  )
}

export default OrderHistory