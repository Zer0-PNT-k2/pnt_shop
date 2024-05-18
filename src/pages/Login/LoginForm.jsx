import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { ToastContainer } from "react-toastify";
import ToastifyWarning from "../../components/toasttify/warning/ToastifyWarning";

export default function LoginForm() {
  // mor_2314
  // 83r5^_
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const handleGetInput = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3001/auth/login",
      data: user,
    });
    if (response.status === 200) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", response.data?.accessToken);
      setTimeout(() => {
        navigate("/");
      }, 2000)
    }
    } catch (error) {
      ToastifyWarning(error.response.data.message)
    }
    
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-6">
        <b className="text-lg">Sign in</b>
        <br />
        <p className="opacity-50">to continue to PNT-SHOP</p>
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="email-login">
          <FaRegUser className="inline-flex mr-2" /> <b>Email</b>
        </label>
        <br />
        <Input
          className="w-full pl-3 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="email-login"
          name="email"
          type="email"
          autoComplete="new-email"
          placeholder="Email"
          onChange={handleGetInput}
        />
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="password-login">
          <RiLockPasswordFill className="inline-flex mr-2" /> <b>Password</b>
        </label>
        <br />
        <Input
          className="w-full pl-3 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="password-login"
          name="password"
          autoComplete="new-password"
          type="password"
          placeholder="Password"
          onChange={handleGetInput}
        />
      </div>
      <Button
        type="submit"
        className="py-1 w-full bg-blue-500 text-white rounded-xl"
      >
        Login
      </Button>
      <ToastContainer />
      <span className="block w-full text-center">
        No account?
        <Button className="px-2 py-6 text-blue-500">
          <Link to="/auth/register">Sign up</Link>
        </Button>
      </span>
    </form>
  );
}
