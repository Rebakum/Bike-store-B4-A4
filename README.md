# 🚴‍♂️ Bike Shop Application

A full-stack bike e-commerce web application with user registration, secure authentication, product browsing, admin/user dashboards, order management, and SurjoPay payment integration.

---

## 🔥 Live Demo

[Coming Soon...] or [Add your deployed URL here]

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

- Home page with navbar, banner, featured products, extra section, and footer.
- All products page with:
  - Search (by brand, name, category)
  - Filters (price, model, availability)
  - Pagination
- Product details page
- About page

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

### 🎨 UI/UX

- Fully responsive for all devices
- Toast notifications
- Spinners during loading
- Friendly error handling (e.g., login error, out-of-stock)

### 🛠 Optional (Recommended)

- Order tracking progress for customers
- Admin can update status: Pending, Processing, Shipped, Delivered

---

## 🛠 Tech Stack

### Frontend

- React + Vite
- TypeScript
- Tailwind CSS
- Axios + React Query
- React Router DOM
- AOS / Swiper.js / React Icons
- Toastify

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT for authentication
- Bcrypt for hashing
- dotenv, CORS, Helmet, morgan, zod
- ***

## 🗃️ Environment Variables

### Backend (`/server/.env`)

````env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SURJOPAY_API_KEY=your_surjopay_key

---
## 🗃️ API Endpoints Overview
VITE_API_BASE_URL=http://localhost:5000/api
--


## 🗃️ API Endpoints

1. Place an Order

Endpoint: /api/orders

Method: POST

Headers: Authorization: Bearer <JWT_TOKEN>

Request Body:


###Request Body:
  ```json
 {
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
````

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
   git clone https://github.com/yourusername/bike-store-management-system.git
   cd bike-store-management-system
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
   npm start
   ```
5. (Optional) If a frontend is included:
   Navigate to the frontend directory and start the React app:
   ```bash
   cd client
   npm start
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
