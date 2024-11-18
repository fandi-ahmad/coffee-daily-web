# Product Order

## 1. Create / Multi Create Product Order (Buyer Side)

Endpoint : `POST` /api/product/order

1.1 Request
```json
{
  "id_user_buyer": 1,
  "username_buyer": "bambang",
  "phone_number_buyer": "082233334444",
  "address_buyer": "jl raya",

  "id_user_seller": 2,
  "username_seller": "tokoenam",
  "address_seller": "jl asam",

  "products": [
    {
      "id_product": 4,  // use for get live view product
      "product_name": "capuchino",
      "product_price": 20000,
      "topping_name": "boba",
      "topping_price": 2000,
      "size_name": "medium",
      "size_price": 0,
      "quantity": 1,
    },
    {
      "id_product": 5,  // use for get live view product
      "product_name": "choco huzzel",
      "product_price": 20000,
      "topping_name": "boba",
      "topping_price": 2000,
      "size_name": "large",
      "size_price": 5000,
      "quantity": 2,
    }
  ],
  
  "payment_method": "cash"
}
```

1.2 Response Success
```json
{
  "status": 201,
  "message": "create product order successfully",
}
```

1.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}

{
  "status": 404,
  "message": "user is not found"  // seller, buyer, product
}
```


## 2. Get All Order History by Status (Buyer Side)

Endpoint : `GET` /api/product/order/1/:id_user_buyer
- halaman my order yang menampilkan semua product yang dipesan
- 1 : packaged
- 2 : delivery
- 3 : finished
- 4 : return
- 5 : canceled

2.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "id_product": 4,  // use for get live view product
      "username_seller": "tokoenam",
      "address_seller": "jl asam",

      "photo": "image.jpg",
      "product_name": "capuchino",
      "price": 20000,

      "topping_name": "boba",
      "topping_price": 2000,
      
      "size_name": "large",
      "size_price": 5000,

      "quantity": 1,
      "payment_method": "cash",
      "total_payment": 22000,
    }
  ]
}
```

2.2 Response Error
```json
{
  "status": 404,
  "message": "user is not found"
}

{
  "status": 400,
  "message": "product status invalid"
}
```

## 3. Get Product Order History Detail by Id (Buyer Side)

Endpoint : `GET` /api/product/order/detail/:id_product_order_history

- di halaman my order dan memilih salah satu product yang dipesan

3.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "id": 1,
    "id_product": 4,  // use for get live view product
    "username_seller": "tokoenam",
    "address_seller": "jl asam",

    "photo": "image.jpg",
    "product_name": "capuchino",
    "price": 20000,

    "topping_name": "boba",
    "topping_price": 2000,
    
    "size_name": "large",
    "size_price": 5000,

    "quantity": 1,
    "payment_method": "cash",
    "total_payment": 22000,
  }
}
```

3.2 Response Error
```json
{
  "status": 404,
  "message": "product order is not found"
}
```

## 4. Get All Sales History by Status (Seller Side)

Endpoint : `GET` /api/product/sales/1/:id_user_seller

- halaman sales history yang menampilkan semua product yang terjual
- 1 : packaged
- 2 : delivery
- 3 : finished
- 4 : return
- 5 : canceled

4.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "id_product": 4,
      "username_buyer": "bambang",
      "address_buyer": "jl labu",
      "phone_number": "082233334444",

      "photo": "image.jpg",
      "product_name": "capuchino",
      "price": 20000,

      "topping_name": "caramel",
      "topping_price": 2000,

      "size_name": "medium",
      "size_price": 0,

      "quantity": 1,
      "payment_method": "cash",
      "total_payment": 22000,
    },
  ]
}
``` 

## 5. Get Product Sales History Detail by Id (Seller Side)

Endpoint : `GET` /api/product/sales/detail/:id_product_order_history

- menampilkan detail product yang dipesan (entah dipakai atau tidak)

5.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "id": 1,
    "id_product": 4,
    "username_buyer": "bambang",
    "address_buyer": "jl labu",
    "phone_number": "082233334444",

    "photo": "image.jpg",
    "product_name": "capuchino",
    "price": 20000,

    "topping_name": "caramel",
    "topping_price": 2000,

    "size_name": "medium",
    "size_price": 0,

    "quantity": 1,
    "payment_method": "cash",
    "total_payment": 22000,
  },
}
```

## 6. Get Order Count (Buyer Side)

Endpoint : `GET` /api/product/order/count/:id_user_buyer

6.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "packaged": 3,
    "delivery": 2,
    "finished": 5,
    "return": 0,
    "canceled": 1,
  }
}
```

## 7. Get Sales Count (Seller Side)

Endpoint : `GET` /api/product/sales/count/:id_user_seller

7.1 Response
```json
{
  "status": 200,
  "message": "ok",
   "data": {
    "packaged": 3,
    "delivery": 2,
    "finished": 5,
    "return": 0,
    "canceled": 1,
  }
}
```

## 8. Update Status Product Order (Seller Side)

Endpoint : `PUT` /api/product/sales/status

8.1 Request
```json
{
  "id": 1,  // id product_order_history
  "status": 2
}
```

8.2 Response
- update status = 3 (finished), maka sudah tidak dapat dilakukan update lagi dan menambah jumlah sales dan earning di tabel products
```json
{
  "status": 200,
  "message": "${product_name} updated status to ${status} successfully",
}
```
