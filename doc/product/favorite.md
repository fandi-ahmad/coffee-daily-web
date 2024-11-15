# Favorite Product

## 1. Get All Favorite Product by User

Endpoint : `GET` /api/favorite/:id_user

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

## 2. Create Favorite

Endpoint : `POST` /api/favorite/create

2.1 Request
```json
{
  "id_user": 1,
  "id_product": 1
}
```

2.2 Response Success
```json
{
  "status": 201,
  "message": "product added in favorite",
}
```

2.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}

{
  "status": 400,
  "message": "product has added in favorite"
}

{
  "status": 404,
  "message": "user is not found"
}

{
  "status": 404,
  "message": "product is not found"
}
```

## 3. Delete favorite

Endpoint : `DELETE` /api/favorite/delete/:id_user/id_product

3.1 Response Success
```json
{
  "status": 200,
  "message": "product deleted from favorite"
}
```

3.2 Response Error
```json
{
  "status": 404,
  "message": "user is not found"
}

{
  "status": 404,
  "message": "product is not found"
}
```