import axios from "axios";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

export default function LoginForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleGetInput = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await axios({
      method: "POST",
      url: "https://fakestoreapi.com/auth/login",
      data: user,
    });
    if (resp.status === 200) {
      localStorage.setItem("isLogin", true);
      localStorage.setItem("token", resp.data.token);
      navigate("/");
    } else {
      // Xu ly loi dang nhap
      console.log("loi");
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
        <label className="inline-flex items-center" htmlFor="username-login">
          <FaRegUser className="inline-flex" /> <b>Username</b>
        </label>
        <br />
        <Input
          className="w-full pl-3 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="username-login"
          name="username"
          type="text"
          autoComplete="new-username"
          placeholder="Username"
          onChange={handleGetInput}
        />
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="password-login">
          <RiLockPasswordFill className="inline-flex" /> <b>Password</b>
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

      <span>
        No account?
        <Button className="px-2 py-6 text-blue-500">
          <Link to="/auth/register">Sign up</Link>
        </Button>
      </span>
    </form>
  );
}
