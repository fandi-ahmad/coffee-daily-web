import LinkRoundedButton from "@/components/Buttons/LinkRoundedButton"
import TitleHeadBack from "@/components/Text/TitleHeadBack"
import ScreenLayout from "@/layouts/ScreenLayout"
// import ProductHistoryCard from "@/components/Cards/ProductOrderedCard"
import ProductOrderedCard from "@/components/Cards/ProductOrderedCard"

const Sales = () => {
  const baseUrl = '/seller/sales/'
  return (
    <>
      <ScreenLayout className="pt-6">
        <TitleHeadBack text="Sales History" />
      </ScreenLayout>
      
      <div className="w-full overflow-x-auto hidden-scrool-thumb px-6">
        <div className="min-w-max flex flex-row gap-4 text-brown-300">
          <LinkRoundedButton to={baseUrl+"packaged"} text="Packaged" value={2} />
          <LinkRoundedButton to={baseUrl+"delivery"} text="Delivery" />
          <LinkRoundedButton to={baseUrl+"finished"} text="Finished" />
          <LinkRoundedButton to={baseUrl+"return"} text="Return" />
          <LinkRoundedButton to={baseUrl+"canceled"} text="Canceled" />
        </div>
      </div>

      <ScreenLayout className="mt-6">
        <ProductOrderedCard
          name="soft cahpuchino"
          quantity={1}
          topping="boba"
          size="medium"
          price={22000}
          buyerInfo="Budi, 087822324441"
          isShowOptionButton
        />

      </ScreenLayout>

    </>
  )
}

export default Sales