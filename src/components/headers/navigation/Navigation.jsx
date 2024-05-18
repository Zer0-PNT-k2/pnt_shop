import React from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { listHeader } from "../../../constants";
import { Carts } from "../../../contexts/CartContext";
import Button from "../../Button";
import Input from "../../Input";
import { Menu, MenuItem } from "@mui/material";

export default function Navigation() {
  const [isLogin] = useState(localStorage.getItem("isLogin"));
  const [user, setUser] = useState({});
  const count = useContext(Carts);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin === "false") {
      navigate("/auth/login");
    }
    else {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const userId = decoded.userId;
      axios({
        method: "GET",
        url: `http://localhost:3001/auth/${userId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.data.datas?.role !== "user") {
          navigate("/admin");
        } else {
          navigate("/");
        }
        setUser(res.data);
      });
    }
  }, [isLogin, navigate]);

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    localStorage.removeItem("token");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mx-auto max-w-screen-xl flex justify-between h-15 font-['Open_Sans'] mb-4 text-base">
      <Link to="/">
        <div className="w-72">
          <img
            className="w-16 h-16 rounded-full"
            alt="LOGO_SHOP"
            src="/images/LogoTS.png"
          />
        </div>
      </Link>
      <div className="flex w-full">
        <ul className="flex justify-between items-center ">
          {listHeader.map((header) => (
            <Link key={header.path} to={header.path}>
              <li className="mr-8 pb-0 hover:text-red-600 ">
                <Button>
                  <span>{header.title}</span>
                  {header.icon}
                </Button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center w-1/2 justify-between">
        <form action="/" className="relative">
          <Input
            // onChange=""
            className="h-6 w-64 py-4 pl-3 outline-none 
                    border-solid border-2 bg-gray-100
                    rounded-2xl focus:border-red-500"
            type="text"
            placeholder="Search our store..."
          />
          <div className="absolute top-1 right-3">
            <Button type="submit" className="focus:text-blue-500">
              <IoIosSearch className="w-6 h-6 text-red-500 " />
            </Button>
          </div>
        </form>
        <div className="ml-5">
          <Link to="/wishlist">
            <Button type="submit" className="inline-flex focus:text-red-500">
              <FaRegHeart className="w-6 h-6 " />
            </Button>
          </Link>
        </div>
        <div className="relative mx-4">
          <Link to="order">
            <Button type="submit" className="inline-flex">
              <FiShoppingBag className="w-6 h-6 " />
              <div className="absolute top-3 left-2 text-red-500 rounded-full bg-red-600">
                <span className="px-2 text-white">{count.count}</span>
              </div>
            </Button>
          </Link>
        </div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div className="flex items-center w-16">
            <img
              className="w-10 h-10 rounded-full mr-1"
              src="https://th.bing.com/th/id/OIP.Gg0lRdcH7S-EO2NWbRzCMQAAAA?pid=ImgDet&w=167&h=183&c=7&dpr=1.3"
              alt=""
            />
            <span className="text-base">{`${user.datas?.name}`}</span>
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <Link to="/auth/login">
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
