import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

// Define TypeScript type
type LoginFormData = {
  email: string;
  password: string;
};

// Validation schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await loginUser(data.email, data.password);
      console.log("Login successful:", response.data);

      alert("Login successful!");
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="register-link">
        <span>New here?</span>
        <button
          onClick={() => navigate("/register")}
          className="register-button"
        >
          Register
        </button>
      </div>

      <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="login-title">Welcome Back!</h2>

        <input
          type="email"
          placeholder="UID"
          {...register("email")}
          className="login-input"
        />
        <p className="error-text">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="login-input"
        />
        <p className="error-text">{errors.password?.message}</p>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
