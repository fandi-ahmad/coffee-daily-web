# Cart🛒

## 1. Get All Product in Cart by User

Endpoint : `GET` /api/cart/:id_user

1.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "photo" : "image.png",
      "name": "white coffee",
      "price": 22000,
      "quantity": 2,
      "topping": {
        "id": 1,
        "name": "boba",
        "price": 2000
      },
      "size": {
        "id": 2,
        "name": "large",
        "price": 5000
      },
    },
    {
      "id": 1,
      "photo" : "image.png",
      "name": "white coffee",
      "price": 22000,
      "quantity": 2,
      "topping": null,  // karena tidak ada topping
      "size": {
        "id": 1,
        "name": "medium",
        "price": 0
      },
    }
  ]
}
```

## 2. Add Product in Cart

Endpoint : `POST` /api/cart/create

2.1 Request
```json
{
  "id_user": 1,
  "id_product": 1,
  "id_topping": 2 | null,  // boleh kosong
  "id_size": 2,
}
```

2.2 Response Success
```json
{
  "status": 201,
  "message": "add product in cart successfully"
}
```

2.3 Response Error
```json
{
  "status": 404,
  "message": "user is not found"  // berlaku untuk product & size
}
```

## 3. Delete Product in Cart

Endpoint : `DELETE` /api/cart/delete/:id_cart

3.1 Response Success
```json
{
  "status": 200,
  "message": "delete product in cart successfully"
}
```

3.2 Response Error
```json
{
  "status": 404,
  "message": "product is not found"
}
```

## 4. Update Quantity Product in Cart

Endpoint : `PUT` /api/cart/update

4.1 Request
```json
{
  "id": 1, // id_cart
  "quantity": 2
}
```

4.2 Response
```json
{
  "status": 200,
  "message": "update quantity in product successfully"
}
```