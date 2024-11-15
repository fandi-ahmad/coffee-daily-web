# User Detail

## 1. Get User Buyer by Id

Endpoint : `GET` /api/user/buyer/detail/:id

1.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "id": 1,
    "photo" : "file_foto.png",
    "fullname" : "fandi123",
    "phone_number": "082233334444",
    "gender": "man",
    "address": "jl raya"
  }
}
```

1.2 Response Error
```json
{
  "status": 404,
  "message": "user is not found"
}
```


## 2. Update User Buyer

Endpoint : `PUT`/api/user/buyer/update

2.1 Request

- photo boleh kosong
````json
{
  "id": 1,
  "photo" : "file_foto.png",
  "username" : "fandi123",
  "phone_numner": "082233334444",
  "gender": "man",
  "address": "jl raya"
}
````

2.2 Response Success
```json
{
  "status": 200,
  "message": "sign in successfully",
  "data" : {
    "id" : 1,
    "photo" : "file_foto.png",
    "username" : "fandi123",
    "phone_numner": "082233334444",
    "gender": "man",
    "address": "jl raya"
  } 
}
```

2.3 Response Error
```json
{
  "status": 404,
  "message": "value can't be empty"
}

{
  "status": 404,
  "message": "username is not ready"
}
```

## 3. Request user Buyer => Seller (Create)

Endpoint : `POST` /api/user/seller/activation

3.1 Request 
```json
{
  "id_user": 1,
  "email" : "fandi@gmail.com",
  "username": "fandi123"
}
```

3.2 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data" : {
    "id" : 1,
    "email" : "fandi@gmail.com",
    "username": "fandi123"
  } 
}
```

3.3 Response Error
```json
{
  "status": 400,
  "message": "user already be seller",
}

{
  "status": 404,
  "message": "user is not found",
}
```

## 4. Get User Seller by Id

Endpoint : `GET` /api/user/seller/detail/:id

4.1 Response Success
```json
{
  "status": 200,
  "message": "ok",
  "data": {
    "id" : 1,
    "photo": "profile_picture.jpg",
    "username": "fandi123",
    "address": "jl trans sulawesi"
  }
}
```

4.2 Response Error
```json
{
  "status": 404,
  "message": "user is not found"
}
```
