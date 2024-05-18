import React from "react";
import { Bounce, toast } from "react-toastify";

export default function ToastifyInfo(text) {
      // "Thanh toán hàng đặt thành công !!!"
  toast.info(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
