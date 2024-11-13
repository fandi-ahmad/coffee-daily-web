import RectangleButton from "../Buttons/RectangleButton"

const OrderPaymentCard = () => {
  return (
    <div className="fixed left-0 bottom-20 w-full px-6">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-white rounded-md w-full p-3 shadow-soft">

          <div className="flex justify-between mb-2">
            <p>Total Payment</p>
            <b className="text-xl">Rp. 60.000</b>
          </div>

          <div className="flex justify-between mb-6">
            <p>Payment Method</p>
            <select className="pe-2 font-semibold cursor-pointer">
              <option value="">Cash</option>
              <option value="">Transfer</option>
            </select>
          </div>

          <RectangleButton>Order Now</RectangleButton>
        </div>
      </div>
    </div>
  )
}

export default OrderPaymentCard