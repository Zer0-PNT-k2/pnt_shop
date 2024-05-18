import React from "react";
import { Bounce, toast } from "react-toastify";

export default function ToastifyWarning(text) {
      // "Thanh toán hàng đặt thành công !!!"
  toast.warning(text, {
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
