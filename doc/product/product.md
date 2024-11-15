# Product

## 1. Get All Product (Home)

Endpoint : `GET` /api/product

1.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "photo" : "image.png",
      "product_name": "white coffee",
      "price": 22000,
      "description": "lorem ipsum dolor sit amtwd",
      "category": "cold coffee",
      "seller": {
        "id": 1,
        "username": "fandi123",
        "address": "jl raya"
      },
    }
  ]
}
```

## 2. Get All Product by User

Endpoint : `GET` /api/product/seller/:id_user

2.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "photo" : "image.png",
      "product_name": "white coffee",
      "price": 22000,
      "description": "lorem ipsum dolor sit amtwd",
      "category": "cold coffee",
    }
  ]
}
```

## 3. Get Product by Id & Topping & Size List

Endpoint : `GET` /api/product/detail/:id_product

3.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data":  {
    "id": 1,
    "photo" : "image.png",
    "product_name": "white coffee",
    "price": 22000,
    "description": "lorem ipsum dolor sit amtwd",
    "topping": [
      {
        "id": 1,
        "name": "oreo",
        "price": 2000,
      },
      {
        "id": 2,
        "name": "moccha",
        "price": 2000,
      }
    ],
    "size": [
      {
        "id": 1,
        "name": "medium",
        "price": 0
      },
      {
        "id": 2,
        "name": "large",
        "price": 5000
      }
    ]
  }
}
```

## 4. Create Product by User

Endpoint : `POST` /api/product/create
- authorization

4.1 Request
```json
{
  "id_user": 1,
  "photo": "product_image.jpg",
  "product_name": "soft green coffee",
  "price": "15000",
  "description": "lorem ipsum dolor sit amet",
  "id_category": 1,
  "id_topping": [1, 2, 4],
  "id_size": [1, 2]
}
```

4.2 Response Success
```json
{
  "status": 201,
  "message": "create product successfully",
  "data": {
    "id": 1,
    "photo": "product_image.jpg",
    "product_name": "soft green coffee",
    "price": "15000",
    "description": "lorem ipsum dolor sit amet",
    "id_topping": [1, 2, 4],
    "id_size": [1, 2]
  }
}
```

4.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}

{
  "status": 404,
  "message": "product is not found"
}
```

## 5. Update Product by User

Endpoint : `PUT` /api/product/update
- authorization

5.1 Request
```json
{
  "id": 1,
  "photo": "product_image.jpg",
  "product_name": "soft green coffee",
  "price": "15000",
  "description": "lorem ipsum dolor sit amet",
  "id_topping": [1, 2, 4],
  "id_size": [1, 2],
  "id_user": 1,
}
```

5.2 Response Success
```json
{
  "status": 200,
  "message": "update product successfully",
  "data": {
    "id": 1,
    "photo": "product_image.jpg",
    "product_name": "soft green coffee",
    "price": "15000",
    "description": "lorem ipsum dolor sit amet",
    "id_topping": [1, 2, 4],
    "id_size": [1, 2]
  }
}
```

5.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}

{
  "status": 404,
  "message": "product is not found"
}
```

## 6. Delete Product

Endpoint: `Delete` /api/product/delete/:id_product

6.1 Response Success
```json
{
  "status": 200,
  "message": "delete product successfully"
}
```

6.2 Response Error
```json
{
  "status": 404,
  "message": "product is not found"
}
```