import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function NotFoundPage() {
  return (
    <div>
      <div className="relative">
        <img
          className="h-screen w-screen object-contain"
          alt=""
          src="/images/404_Page.png"
        />
      </div>
      <div className="absolute top-56 text-center text-base w-full text-orange-500">
        {/* <img className="w-1/2 h-1/2 rounded-full" alt="" src="/images/LogoTS.png" /> */}
        <h1 className="text-5xl font-bold">Không tìm thấy nội dung</h1>
        <ul className="mt-4 flex flex-col gap-2 text-base">
          <li>
            URL của nội dung này đã <strong>bị thay đổi</strong> hoặc{" "}
            <strong>không còn tồn tại</strong>.
          </li>
          <li>
            Nếu bạn <strong>đang lưu URL này</strong>, hãy thử{" "}
            <strong>truy cập lại từ trang chủ</strong> thay vì dùng URL đã lưu.
          </li>
        </ul>
        <Link to="/">
          <Button className="ml-3  text-lg rounded-full bg-red-600 text-white px-6 py-2">
            Truy cập trang chủ
          </Button>
        </Link>
        <p className="mt-2 text-lg">
          👉 hoặc đi tới{" "}
          <Link to="/products">
            <Button className="rounded-full bg-red-600 text-white px-6 py-2">
              Sản phẩm
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
}
