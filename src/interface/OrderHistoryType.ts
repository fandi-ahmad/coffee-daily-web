export interface OrderHistoryType {
  id: number
  id_product: number
  username_seller: string
  address_seller: string

  photo: string
  product_name: string
  price: number

  topping_name: string
  topping_price: number
  
  size_name: string
  size_price: number

  quantity: number
  payment_method: 'cash' | 'transfer'
  total_payment: number
}