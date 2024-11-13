import exampleImage from '../../assets/example-image/4.jpg'

const ProductCard = () => {
  return (
    <div className="w-full bg-white rounded-lg overflow-hidden shadow-soft">
      <img src={exampleImage} alt="example" className="h-52 w-full object-cover" />
      <div className="p-3">
        <p>Luwak White Coffee</p>
        <p className="text-xs">Mid Cafe, Palu Barat</p>
        <p className="text-lg font-bold mt-6">Rp. 20.000</p>
      </div>
    </div>
  )
}

export default ProductCard
