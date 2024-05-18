import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import ToastifySuccess from "../../components/toasttify/success/ToastifySuccess";
import { ToastContainer } from "react-toastify";
import ToastifyWarning from "../../components/toasttify/warning/ToastifyWarning";

export default function RegisterForm() {
  const [dataRegister, setDataRegister] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleGetInput = (e) => {
    setDataRegister((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlResgister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(dataRegister),
      });

      if (response.status === 200) {
        ToastifySuccess("Đăng ký thành công")
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      }
    } catch (error) {
      ToastifyWarning(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handlResgister}>
        <div className="mb-6">
          <label
            className="inline-flex items-center"
            htmlFor="username-resgister"
          >
            <CiUser className="inline-flex mr-2" /> <b>Username</b>
          </label>
          <br />
          <input
            className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
            id="username-resgister"
            type="text"
            name="name"
            autoComplete="new-username"
            placeholder="Username"
            required
            onChange={handleGetInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="inline-flex items-center"
            htmlFor="lastname-resgister"
          >
            <FaPhoneVolume className="inline-flex mr-2" /> <b>Phone</b>
          </label>
          <br />
          <input
            className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
            id="lastname-resgister"
            type="text"
            name="phone"
            autoComplete="new-lastname"
            placeholder="Phone"
            required
            onChange={handleGetInput}
          />
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center" htmlFor="email-resgister">
            <MdOutlineEmail  className="inline-flex mr-2" /> <b>Email</b>
          </label>
          <br />
          <input
            className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
            id="email-resgister"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleGetInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="inline-flex items-center"
            htmlFor="password-resgister"
          >
            <RiLockPasswordFill className="inline-flex mr-2" /> <b>Password</b>
          </label>
          <br />
          <input
            className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
            id="password-resgister"
            type="password"
            name="password"
            autoComplete="new-password"
            required
            placeholder="Password"
            onChange={handleGetInput}
          />
        </div>
        <Button
          type="submit"
          className="py-1 w-full bg-blue-500 text-white rounded-xl"
        >
          Register
        </Button>
        <ToastContainer />
      </form>
      <span className="block text-center mt-6">
        Already have an account?
        <Button className="px-2 py-6 text-blue-500">
          <Link to="/auth/login">Sign in</Link>
        </Button>
      </span>
    </>
  );
}
