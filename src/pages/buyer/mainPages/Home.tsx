import SearchInput from "../../../components/Input/SearchInput"
import ScreenLayout from "../../../layouts/ScreenLayout"
import ProductCard from "../../../components/Cards/ProductCard"

const Home = () => {
  return (
    <>
      <div className="bg-brown-300 h-16 w-full"></div>
      <ScreenLayout className="pb-6">
        
        <SearchInput/>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>

      </ScreenLayout>
    </>
  )
}

export default Home