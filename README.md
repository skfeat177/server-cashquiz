# server-cashquiz

#### User Login (POST /login)

Endpoint for user login.

**Request**

- **Method:** POST
- **Body Data:**
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
  - `number` (string): The phone number of the user.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "message": "Login successful",
    "accountID": "user_account_id",
    "totalPoint": 100
  }

#### User Registration (POST /signup)

Endpoint for user registration.

**Request**

- **Method:** POST
- **Body Data:**
  - `name` (string): The name of the user.
  - `number` (string): The phone number of the user.
  - `password` (string): The password of the user.
  - `username` (string): The username of the user.

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "message": "User added successfully",
    "data": {
      "name": "user_name",
      "number": "user_number",
      "password": "user_password",
      "username": "user_username",
      "_id": "user_account_id"
    }
  }
#### Get All Users (GET /alluser)

Endpoint to get a list of all users.

**Request**

- **Method:** GET

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "users": [
      {
        "name": "user_name",
        "number": "user_number",
        "password": "user_password",
        "username": "user_username",
        "_id": "user_account_id"
      },
      // ...other users
    ]
  }
#### Contact via Email (POST /contactmail)

Endpoint for sending a contact message via email.

**Request**

- **Method:** POST
- **Body Parameter:**
  - `name` (string): Sender's name.
  - `accountID` (string): Sender's account ID.
  - `email` (string): Sender's email address.
  - `issue` (string): Subject of the message.
  - `issuedetail` (string): Details of the issue.

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "message": "Report mail sent successfully"
  }
#### Get User's Current Points (GET /getpoints)

Endpoint to get the current points of a user.

**Request**

- **Method:** GET
- **Query Parameter:**
  - `id` (string): User's account ID.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "currentPoints": 100
  }
#### Update Points (PUT /updatepoints)

Endpoint to update currentPoints and totalPoints for a user.

**Request**

- **Method:** PUT
- **Query Parameters:**
  - `currentPoints` (integer): The updated current points for the user.
  - `id` (string): User's account ID.

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "message": "Points updated successfully",
    "currentPoints": 200
  }

#### Update Payment Status (PUT /updatepaymentstatus)

Endpoint to update payment status for a user.

**Request**

- **Method:** PUT
- **Query Parameter:**
  - `id` (string): User's account ID.
  - `status` (string): Payment Status.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "message": "Payment status updated successfully"
  }
#### Support Message (POST /supportmessage)

Endpoint to send a support message.

**Request**

- **Method:** POST
- **Query Parameter:**
  - `id` (string): User's account ID.

**Body Parameters**

- `subject` (string): Subject of the support message.
- `message` (string): Content of the support message.

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "message": "Support message sent successfully"
  }
#### Payment History (GET /paymenthistory)

Endpoint to retrieve payment history for a user.

**Request**

- **Method:** GET
- **Query Parameter:**
  - `id` (string): User's account ID.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "paymentHistory": [
      {
        "transactionID": "payment_transaction_id",
        "method": "payment_method",
        "amount": 100
      },
      // ...other payment history entries
    ]
  }
#### Profile Information (GET /profileinfo)

Endpoint to get the profile information of a user.

**Request**

- **Method:** GET
- **Query Parameter:**
  - `id` (string): User's account ID.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "user": {
      "name": "user_name",
      "number": "user_number",
      "password": "user_password",
      "username": "user_username",
      "_id": "user_account_id"
    }
  }
#### Quiz Played (PUT /quizplayed)

Endpoint to update currentPoints, totalPoints, and quizPlayed for a user.

**Request**

- **Method:** PUT
- **Query Parameter:**
  - `id` (string): User's account ID.

**Response**

- **Status Code:** 200 OK or 401 Unauthorized
- **Body:**
  ```json
  {
    "message": "Points and quizPlayed updated successfully",
    "quizPlayed": 5
  }
#### Request Payment (POST /payment)

Endpoint to request a payment for a user.

**Request**

- **Method:** POST
- **Query Parameter:**
  - `id` (string): User's account ID.
- **Body Parameters:**
  - `method` (string): Payment method (e.g., PayPal, bank transfer).
  - `amount` (number): Payment amount.

**Response**

- **Status Code:** 200 OK or 500 Internal Server Error
- **Body:**
  ```json
  {
    "message": "Payment request submitted successfully"
  }
