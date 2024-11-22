import exampleImage from "@/assets/example-image/1.jpg"
import formatDotNumber from "@/utils/formatDotNumber"
import { Link } from "react-router-dom"

interface ProductSellerCardType {
  name: string
  price: number
  sales: number
  earning: number
  to: string
}

const ProductSellerCard = (props: ProductSellerCardType) => {
  return (
    <Link to={props.to} className="flex bg-white shadow-soft rounded-md overflow-hidden mb-3">
      <img src={exampleImage} alt="ex" className="w-28 min-w-28 h-28 object-cover" />
      <div className="w-full p-3">
        <div className="flex justify-between text-lg font-medium mb-3">
          <p>{props.name}</p>
          <p>Rp. {formatDotNumber(props.price)}</p>
        </div>
        <div className="flex justify-between">
          <p>Sales</p>
          <p>{props.sales}</p>
        </div>
        <div className="flex justify-between">
          <p>Total Earning</p>
          <p>Rp. {formatDotNumber(props.earning)}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductSellerCard