# Frontend - React + TypeScript

## Project Overview
This is the frontend for a user authentication system built with React and TypeScript. It includes:
- **Login & Registration** using React Hook Form and Zod validation.
- **Authentication** handled via JWT tokens stored in local storage.
- **Protected Dashboard** accessible after login.
- **API Integration** with a backend using Axios.

## Tech Stack
- **React**: v19.1.0
- **TypeScript**: v4.9.5
- **React Router**: v7.4.1
- **React Hook Form**: v7.55.0
- **Zod (Validation Library)**: v3.24.2
- **Axios (API Requests)**: v1.8.4
- **React Query (Data Fetching)**: v3.39.3

## Project Structure
```
frontend/
│-- src/
│   │-- api/                # API functions (Axios requests)
│   │   │-- auth.ts         # Authentication API functions
│   │
│   │-- components/         # React components
│   │   │-- Login.tsx       # Login component
│   │   │-- Register.tsx    # Register component
│   │   │-- Dashboard.tsx   # Dashboard component
│   │
│   │-- styles/             # CSS files for styling
│   │   │-- Login.css       # Styles for login page
│   │   │-- Register.css    # Styles for register page
│   │   │-- Dashboard.css   # Styles for dashboard page
│   │
│   │-- App.tsx             # Main app component with routing
│   │-- main.tsx            # Entry point file
│
│-- package.json            # Project dependencies and scripts
│-- tsconfig.json           # TypeScript configuration
│-- README.md               # Project documentation
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/frontend.git
cd frontend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm start
```

The app runs on `http://localhost:3000`.

## API Integration
API requests are handled in `src/api/auth.ts`:
```ts
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const registerUser = async (email: string, password: string) => {
  return axios.post(`${API_URL}/register`, { email, password });
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response;
};
```

## Routing
Defined in `App.tsx`:
```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);

export default App;
```

## Authentication Flow
1. **Register (`Register.tsx`)**
   - Uses `react-hook-form` with Zod validation.
   - Calls `registerUser` from `api/auth.ts`.
   - Redirects to the dashboard on success.

2. **Login (`Login.tsx`)**
   - Uses `react-hook-form` with Zod validation.
   - Calls `loginUser` from `api/auth.ts`.
   - Stores JWT token in localStorage.
   - Redirects to the dashboard on success.

3. **Dashboard (`Dashboard.tsx`)**
   - Displays a welcome message.
   - Allows user logout by clearing the token and navigating to login.


## Features
- Secure authentication with JWT.
- Form validation with Zod.
- Modular component-based architecture.
- React Query for efficient API calls.


