import { useState } from "react"
import RoundedButton from "../../../../../../components/Buttons/RoundedButton"
import formatNumberToK from "../../../../../../utils/formatNumberToK"

interface ToppingType {
  id: number
  name: string
  price: number
}

const exampleTopping = [
  {
    id: 1,
    name: 'caramel',
    price: 0
  },
  {
    id: 2,
    name: 'oreo',
    price: 500
  },
  {
    id: 3,
    name: 'milk',
    price: 3000
  }
]

const ToppingOption = () => {
  const [toppingData, setToppingData] = useState<ToppingType[]>(exampleTopping)
  const [toppingId, setToppingId] = useState<number|null>(null)

  return (
    <>
      <h2 className='text-xl font-medium'>Topping</h2>

      <div className='mt-3 flex flex-wrap gap-3'>
        <RoundedButton
          className='border-2 border-brown-300'
          isNoShadow
          onClick={() => setToppingId(null)}
          isActive={toppingId === null}
        >
          None
        </RoundedButton>
        
        {toppingData.map((topping: ToppingType) => (
          <RoundedButton
            className='border-2 border-brown-300'
            isNoShadow
            key={topping.id}
            onClick={() => setToppingId(topping.id)}
            isActive={topping.id === toppingId}
          >
            {topping.name} <b>{formatNumberToK(topping.price)}</b>
          </RoundedButton>
        ))}

      </div>
    </>
  )
}

export default ToppingOption