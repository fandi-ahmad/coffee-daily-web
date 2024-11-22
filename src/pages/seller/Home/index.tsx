import ScreenLayout from "@/layouts/ScreenLayout"
import ProductSellerCard from "@/components/Cards/ProductSellerCard"

const HomeSeller = () => {
  return (
    <>
      <ScreenLayout className="pt-6 pb-3">
        <p className="text-3xl">Hi, Fandi Ahmad</p>

        <div className="bg-dark-brown-200 rounded-md text-white p-6 mt-3">
          <p className="text-2xl">Earning</p>
          <div className="flex flex-row items-center mt-3">
            <i className="fa-solid fa-wallet text-4xl"></i>
            <p className="text-2xl font-medium ms-3">Rp. 835.000</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Top Selling</h2>

        <ProductSellerCard to="/seller/product-order-history/1" name="Smoothy Coffee" price={20000} sales={22} earning={440000} />
        <ProductSellerCard to="/seller/product-order-history/2" name="Smoothy Coffee" price={20000} sales={22} earning={440000} />
        <ProductSellerCard to="/seller/product-order-history/3" name="Smoothy Coffee" price={20000} sales={22} earning={440000} />
        <ProductSellerCard to="/seller/product-order-history/4" name="Smoothy Coffee" price={20000} sales={22} earning={440000} />

      </ScreenLayout>
    </>
  )
}

export default HomeSeller
