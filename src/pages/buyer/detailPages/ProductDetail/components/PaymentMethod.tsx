
const PaymentMethod = () => {
  return (
    <div className='flex justify-between mb-2'>
      <p>Payment Method</p>
      <select className="pe-2 font-semibold cursor-pointer">
        <option value="">Cash</option>
        <option value="">Transfer</option>
      </select>
    </div>
  )
}

export default PaymentMethod
