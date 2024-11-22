import LinkRoundedButton from "@/components/Buttons/LinkRoundedButton"

const NavigateButtons = () => {
  const baseUrl = '/profile/order-history/'

  return (
    <div className="w-full overflow-x-auto hidden-scrool-thumb px-6">
      <div className="min-w-max flex flex-row gap-4 text-brown-300">
        <LinkRoundedButton to={baseUrl+"packaged"} text="Packaged" value={2} />
        <LinkRoundedButton to={baseUrl+"delivery"} text="Delivery" />
        <LinkRoundedButton to={baseUrl+"finished"} text="Finished" />
        <LinkRoundedButton to={baseUrl+"return"} text="Return" />
        <LinkRoundedButton to={baseUrl+"canceled"} text="Canceled" />
      </div>
    </div>
  )
}

export default NavigateButtons
