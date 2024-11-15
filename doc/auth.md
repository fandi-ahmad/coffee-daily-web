# Auth

## 1. Sign Up

Endpoint : `POST` /api/sign-up

1.1 Request
```json
{
  "email": "fandi@gmail.com",
  "password": "12345678"
}
```

1.2 Response Success
- create user_detail_buyer username by email
```json
{
  "status": 201,
  "message": "user sign up successfuly",
  "data": {
    "id": 1,
    "email": "fandi@gmail.com",
    "password": "12345678",
    "access_token": "oitu3498t4ku5jk",
    "refresh_token": "oitu9489ueohf"
  }
}
```

1.3 Response Error
```json
{
  "status": 400,
  "message": "password is weak, use letter, number & symbol combination"
}

{
  "status": 400,
  "message": "email and password is required"
}

{
  "status": 400,
  "message": "user already exist"
}
```

## 2. Sign In

Endpoint : `POST` /api/sign-in

2.1 Request
```json
{
  "email": "fandi@gmail.com",
  "password": "12345678"
}
```

2.2 Response Success
```json
{
  {
  "status": 200,
  "message": "user sign in successfuly",
  "data": {
    "id": 1,
    "email": "fandi@gmail.com",
    "password": "12345678",
    "access_token": "oitu3498t4ku5jk",
    "refresh_token": "oitu9489ueohf"
  }
}
}
```

2.3 Response Error
```json
{
  "status": 400,
  "message": "password is wrong"
}

{
  "status": 404,
  "message": "email unregisted"
}

{
  "status": 400,
  "message": "email and password is required"
}
```