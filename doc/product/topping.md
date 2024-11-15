# Topping

## 1. Get All Topping by User

Endpoint : `GET` /api/topping/:id_user
- Authorization

1.1 Response
```json
{
  "status": 200,
  "message": "ok",
  "data": [
    {
      "id": 1,
      "name": "milk",
      "price": 2000
    },
    {
      "id": 2,
      "name": "boba",
      "price": 2500
    }
  ]
}
```

## 2. Create Topping by User

Endpoint : `POST` /api/topping/create
- Authorization

2.1 Request
```json
{
  "id_user": 1,
  "name": "oreo",
  "price": 2000
}
```

2.2 Response Success
```json
{
  "status": 201,
  "message": "create topping successfully",
  "data": {
    "id": 1,
    "name": "oreo",
    "price": 2000
  }
}
```

2.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}
```

## 3. Update Topping

Endpoint : `PUT` /api/topping/update
- Authorization

3.1 Request
```json
{
  "id": 1,
  "name": "vanila",
  "price": 2000
}
```

3.2 Response Success
```json
{
  "status": 200,
  "message": "update topping successfully",
  "data": {
    "id": 1,
    "name": "vanila",
    "price": 2000
  }
}
```

3.3 Response Error
```json
{
  "status": 400,
  "message": "value can't be empty"
}

{
  "status": 404,
  "message": "topping is not found"
}
```

## 4. Delete Topping

Endpoint : `DELETE` /api/topping/delete/id_topping
- Authorization

4.1 Response Success
```json
{
  "status": 200,
  "message": "delete topping successfully"
}
```

4.2 Response Error
```json
{
  "status": 404,
  "message": "topping is not found"
}
```