import { Button, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { BiBell, BiMessageRoundedDots } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderDashboard() {
  const [isLogin] = useState(JSON.parse(localStorage.getItem("isLogin")));
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
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
        if (res.data.datas?.role !== "admin") {
          navigate("/");
        } else {
          navigate("/admin");
        }
        setUser(res.data);
      });
    }
  }, []);

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
    <>
      <div className="xl:container h-16 mx-auto flex items-center bg-slate-100 mb-12">
        <h1 className="w-32 h-auto ml-6 text-2xl text-center">Dashboard</h1>
        <div className="w-full flex justify-between h-full content-center items-center">
          <form className="ml-8">
            <input
              className="w-96 pl-6 py-1 border-solid outline-black outline-none rounded-2xl text-sm"
              placeholder="Search . . . "
            ></input>
          </form>
          <div className="flex justify-around items-center">
            <div className="flex">
              <BiBell className="w-6 h-6" />
              <BiMessageRoundedDots className="w-6 h-6 mx-4" />
            </div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <div className="mr-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://uyenuong.net/wp-content/uploads/2022/05/Anh-avatar-dep-cho-con-trai2B2528342529.jpg"
                  alt=""
                />
              </div>
              <span className="text-sm mr-4">{`${user.datas?.name}`}</span>
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
              <MenuItem>
                <Link to="/auth/login" onClick={handleLogout}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
