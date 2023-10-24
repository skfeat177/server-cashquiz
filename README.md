# Server-CashQuiz API Documentation

- [User Login (POST /login)](#user-login-post-login)
- [User Registration (POST /signup)](#user-registration-post-signup)
- [Get All Users (GET /alluser)](#get-all-users-get-alluser)
- [Contact via Email (POST /contactmail)](#contact-via-email-post-contactmail)
- [Get User's Current Points (GET /getpoints)](#get-users-current-points-get-getpoints)
- [Update Points (PUT /updatepoints)](#update-points-put-updatepoints)
- [Update Payment Status (PUT /updatepaymentstatus)](#update-payment-status-put-updatepaymentstatus)
- [Support Message (POST /supportmessage)](#support-message-post-supportmessage)
- [Payment History (GET /paymenthistory)](#payment-history-get-paymenthistory)
- [Profile Information (GET /profileinfo)](#profile-information-get-profileinfo)
- [Quiz Played (PUT /quizplayed)](#quiz-played-put-quizplayed)
- [Request Payment (POST /payment)](#request-payment-post-payment)
- [Payment Mail](#mass-email-route)

## User Login (POST /login)

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

## User Registration (POST /signup)

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
## Get All Users (GET /alluser)

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
## Contact via Email (POST /contactmail)

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
## Get User's Current Points (GET /getpoints)

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
## Update Points (PUT /updatepoints)

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
## Update Payment Status (PUT /updatepaymentstatus)

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
## Support Message (POST /supportmessage)

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
## Payment History (GET /paymenthistory)

Endpoint to retrieve payment history for a user




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
# Mass Email Route

## Overview

The Mass Email Route is used to send payment request details via email. It utilizes the Nodemailer library to send emails through a Gmail account. The route accepts the following query parameters: `accountID`, `method`, and `amount` to customize the content of the email.

## Endpoint

- **Endpoint**: `/paymentmail`
- **Example URL**: `https://server-cashquiz.vercel.app/paymentmail?accountID=asfafaiu896432986428&method=Google%20Play&amount=1000`

## Request

- **HTTP Method**: POST
- **Headers**: `Content-Type: application/json`

## Query Parameters

- `accountID` (string): The account ID for the payment request.
- `method` (string): The payment method used.
- `amount` (string): The payment amount.

## Response

- **Status Code**: 200 (OK) if the email was sent successfully, 500 (Internal Server Error) in case of an error.
- **Response Body**: A JSON response with a message indicating the status of the email sending process.

## Request Example

```http
POST https://server-cashquiz.vercel.app/paymentmail?accountID=asfafaiu896432986428&method=Google%20Play&amount=1000
Content-Type: application/json
