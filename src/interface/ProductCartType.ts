export interface ProductCartType {
  id: number
  name: string
  price: number
  quantity: number
  description?: string
  topping: null | {
    id: number
    name: string
    price: number
  }
  size: null | {
    id: number
    name: string
    price: number
  }
}