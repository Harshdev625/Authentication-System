import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

// Define TypeScript type
type RegisterFormData = {
  email: string;
  password: string;
};

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data.email, data.password);
      alert("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <div className="login-link">
        <span>Already have an account?</span>
        <button onClick={() => navigate("/")} className="login-button">
          Login
        </button>
      </div>

      <form className="register-box" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="register-title">Create an Account</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="register-input"
        />
        <p className="error-text">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="register-input"
        />
        <p className="error-text">{errors.password?.message}</p>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
