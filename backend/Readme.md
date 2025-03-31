# Backend - Full-Stack Intern Assignment

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Development and Deployment](#development-and-deployment)
- [Additional Notes](#additional-notes)

---

## Project Overview
This is the backend service for the Full-Stack Intern Assignment. It provides authentication (registration and login) using Node.js, TypeScript, Express, and Prisma with a MongoDB database.

---

## Tech Stack
- **Node.js** (Runtime)
- **TypeScript** (For type safety)
- **Express.js** (Backend framework)
- **Prisma** (ORM for MongoDB)
- **bcryptjs** (Password hashing)
- **jsonwebtoken** (JWT authentication)
- **Zod** (Schema validation)
- **dotenv** (Environment variable management)
- **cors** (Cross-Origin Resource Sharing)

---

## Installation and Setup

### 1. Clone the Repository
```sh
git clone <repository_url>
cd backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure it as follows:
```env
DATABASE_URL="your_mongodb_connection_string"
JWT_SECRET="your_secret_key"
PORT=5000
```

### 4. Run Database Migration (Prisma Setup)
```sh
npx prisma generate
```

### 5. Start the Server
For development:
```sh
npm run dev
```
For production:
```sh
npm run build && npm start
```

The server should be running on `http://localhost:5000`.

---

## Environment Variables
The backend requires the following environment variables:
| Variable       | Description                                |
|--------------|--------------------------------|
| `DATABASE_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT authentication |
| `PORT` | Port number for the server (default: 5000) |

---

## Project Structure
```
backend/
│── prisma/
│   ├── schema.prisma  # Prisma schema definition
│── src/
│   ├── controllers/
│   │   ├── user.controller.ts  # User authentication logic
│   ├── routes/
│   │   ├── user.routes.ts  # User-related API routes
│   ├── server.ts  # Entry point of the backend
│── .env  # Environment variables
│── package.json  # Dependencies and scripts
│── tsconfig.json  # TypeScript configuration
```

---

## API Endpoints

### **Authentication Routes** (`/api/users`)
| Method | Endpoint       | Description                | Request Body |
|--------|--------------|------------------------|----------------|
| POST   | `/register`   | Register a new user   | `{ email, password }` |
| POST   | `/login`      | Authenticate a user   | `{ email, password }` |

### **Example Request: User Registration**
```sh
POST /api/users/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully"
}
```

### **Example Request: User Login**
```sh
POST /api/users/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "<jwt_token>"
}
```

---

## Error Handling
- Uses `Zod` for request validation.
- Returns meaningful error messages for invalid inputs.
- Handles database connection errors.
- Middleware handles uncaught errors globally.

---

## Development and Deployment

### Development
- Run `npm run dev` to start the development server with TypeScript support.
- Logs errors and important actions to the console.

### Deployment
- Build the project using `npm run build`.
- Run the production server using `npm start`.

---

## Additional Notes
- This backend is part of a full-stack project with a React frontend.
- Make sure to connect the frontend to the correct backend API endpoints.
- Ensure that `.env` file is set up correctly before running the server.
- JWT authentication is used, and the token must be included in headers for protected routes.



