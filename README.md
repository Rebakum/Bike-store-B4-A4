# 🚴‍♂️ Bike Shop Application

A backend bike shop e-commerce web application with user registration, secure authentication, product browsing, admin/user dashboards, order management, and SurjoPay payment integration.

---

## 🔥 Live Demo

https://bike-store-b4-a4.vercel.app/

---

## 🧾 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Run Locally](#run-locally)
- [Author](#author)

---

## 📌 Project Overview

The **Bike Shop Application** is a full-featured e-commerce platform where users can browse, filter, and purchase bikes. It includes secure user authentication, role-based dashboards for users and admins, real-time order tracking, and payment integration using **SurjoPay**.

---

## 🎯 Features

### 🔐 Authentication

- Register/Login with JWT token-based authentication.
- Passwords hashed with bcrypt.
- Role-based access control: `customer` & `admin`.

### 🌐 Public Routes

- products management with:
  - Create a product
  - Get All products
  - Search (by brand, name, category)
  - Filters (price, model, availability)
  - Pagination
  - Product details
  - update product
  - delete product


- order management with:
  - create dynamic order fron products
  - get all orders
  - calculate total price for order


### 🔒 Private Routes

- **Checkout Page**:
  - Order form, product/user details
  - SurjoPay integration
  - Stock validation

- **Dashboard**:
  - User Dashboard:
    - View orders, update profile/password
    - Order tracking
  - Admin Dashboard:
    - Manage products (CRUD)
    - Manage orders (CRUD & status update)
    - Manage users (deactivate accounts)

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT for authentication
- Bcrypt for hashing
- dotenv, CORS, Helmet, morgan, zod
- 
---

## 🗃️ Environment Variables

### Backend (`.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_surjopay_key

---
## 🗃️ API Endpoints Overview
VITE_API_BASE_URL=http://localhost:5000/api
--


## 🗃️ API Endpoints

### 1. **Place an Order**
- **Endpoint**: `/api/orders`
- **Method**: `POST`
- ** Headers: Authorization: Bearer <JWT_TOKEN>
--


###Request Body:
  ```json
 {
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
  ```
- **Response**:
  ```json
 {
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}

  ```

### 2. **Calculate Revenue**
- **Endpoint**: `/api/orders/revenue`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "message": "Revenue calculated successfully",
    "status": true,
    "data": {
      "totalRevenue": 3600
    }
  }
  ```

---
## 🚲 Bike Shop API Endpoints
 ### 🔐 User Endpoints
  # Method	Endpoint	Description
   - GET	/api/users	Get all users
   - GET	/api/users/:id	Get user by ID
   - POST	/api/users	Create a new user
   - PUT	/api/users/:id	Update user info
   - DELETE	/api/users/:id	Delete a user
---

### 🛒 Product Endpoints
 # Method	Endpoint	Description
  - GET	/api/products	Get all products
  - GET	/api/products/:id	Get product by ID
  - POST	/api/products	Add new product
  - PUT	/api/products/:id	Update product details
  - DELETE	/api/products/:id	Delete a product
---

### 📦 Order Endpoints
 # Method	Endpoint	Description
  - GET	/api/orders	Get all orders
  - GET	/api/orders/:id	Get order by ID
  - POST	/api/orders	Create a new order
  - PUT	/api/orders/:id	Update order status/info
  - DELETE	/api/orders/:id	Cancel/Delete an order
---

## 🌟 Getting Started

### Prerequisites:
-Node.js (v16 or later)

-MongoDB (Local or Atlas)

-Postman (for testing API endpoints)

-SurjoPay API credentials (for payment integration)

---

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/Rebakum/Bike-store-B4-A4.git
   cd Bike-store-B4-A4
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   Create a `.env` file in the root and configure:
   ```plaintext
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
---

## 🤬 Testing

- Use Postman to test the APIs.
- Ensure the MongoDB database is running for seamless functionality.

---

## 🙌 Contributing

Feel free to fork the repository and submit pull requests for any enhancements or bug fixes.

---



## 📞 Contact

For any inquiries, contact:
- **Name**: Mist. Rebeka Sultana
- **Email**: rebakpi@gmail.com


