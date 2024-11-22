import ProductSellerCard from "@/components/Cards/ProductSellerCard"
import TitleHeadBack from "@/components/Text/TitleHeadBack"
import ScreenLayout from "@/layouts/ScreenLayout"
import formatDotNumber from "@/utils/formatDotNumber"
import React, { useState } from "react"


interface TextJustifyType {
  left: string
  right: React.ReactNode | string
}

const TextJustify = (props: TextJustifyType) => {
  return (
    <td>
      <div className="flex justify-between py-0.5">
        <small>{props.left}</small>
        <small>{props.right}</small>
      </div>
    </td>
  )
}

const TableRow = () => {
  const [isActiveDetail, setIsActiveDetail] = useState<boolean>(false)
  return (
    <>
      <tr onClick={() => setIsActiveDetail(!isActiveDetail)} className="bg-white rounded-md overflow-hidden flex justify-between px-2 mt-2 items-center cursor-pointer">
        <td className="w-full">Bambang</td>
        <td className="w-full text-center">1</td>
        <td className="w-full text-center">Rp. {formatDotNumber(22000)}</td>
        <td className="w-full text-end text-sm p-2">21:20, 21/11/2024</td>
      </tr>
      {isActiveDetail &&
        <tr className="bg-white rounded-md p-2 mt-6 duration-200 flex flex-col">
          <td>
            <div className="absolute w-full flex justify-center -mt-5 pe-8">
              <div className="w-10 h-10 bg-white rounded-md rotate-45"></div>
            </div>
          </td>
          <TextJustify left="Topping" right={<>Caramel <b>+2K</b></>} />
          <TextJustify left="Size" right={<>Medium <b>+2K</b></>} />
          <TextJustify left="Quantity" right={1} />
          <td>
            <hr className="my-2 border border-brown-100 rounded-full" />
          </td>
          <TextJustify left="Buyer Name" right={'Bambang'} />
          <TextJustify left="Phone Number" right={'082144338888'} />
          <TextJustify left="Address" right={'jl kecubung'} />
          <TextJustify left="Ordered On" right={'21:20, 21/11/2024'} />
        </tr>
      }
    </>
  )
}

const ProductOrderHistory = () => {
  return (
    <ScreenLayout className="py-6">
      <TitleHeadBack text="Product Order History" to="/seller" className="mb-6" />
      <ProductSellerCard to="/seller/product-order-history/1" name="Smoothy Coffee" price={20000} sales={22} earning={440000} />

      <table className="w-full rounded-md">
        <thead>
          <tr className="flex justify-between px-2">
            <td className="w-full">Buyer Name</td>
            <td className="w-full text-center">Quantity</td>
            <td className="w-full text-center">Earning</td>
            <td className="w-full text-end">Ordered On</td>
          </tr>
        </thead>
        <tbody className="rounded-md">
          <TableRow/>
          <TableRow/>
          <TableRow/>
          <TableRow/>
        </tbody>
      </table>
    </ScreenLayout>
  )
}

export default ProductOrderHistory