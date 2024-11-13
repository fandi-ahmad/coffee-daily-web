import SearchInput from "../../../components/Input/SearchInput"
import ProductCard from "../../../components/Cards/ProductCard"
import LinkRoundedButton from "../../../components/Buttons/LinkRoundedButton"

const Category = () => {
  return (
    <div className="pb-6">
      <div className="bg-brown-300 h-16 w-full"></div>
        
      <div className="mx-6">
        <SearchInput/>
      </div>

      <div className="w-full overflow-x-auto hidden-scrool-thumb px-6 mt-3">
        <div className="min-w-max flex flex-row gap-4 text-brown-300">
          <LinkRoundedButton to="/category/cold-coffee" text="cold coffee"/>
          <LinkRoundedButton to="/category/hot-coffee" text="hot coffee" />
          <LinkRoundedButton to="/category/health-coffee" text="health coffee" />
          <LinkRoundedButton to="/category/smoothies" text="smoothies" />
          <LinkRoundedButton to="/category/non-coffee" text="non coffee" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4 mx-6">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

    </div>
  )
}

export default Category