import React from "react";
import Button from "../Button";

export default function Footer() {
  return (
    <div className="w-full py-16 bg-black text-white text-base">
      <div
        className="grid grid-cols-4 gap-8 font-['Open_Mono']
            mx-auto max-w-screen-xl h-44"
      >
        <div>
          <img
            className="w-32 h-32 p-6 rounded-full"
            alt="LOGO_SHOP"
            src="/images/LogoTS.png"
          />
          <p>
            Copyright © 2022 Team90Degree | Built with Drou by Team90Degree.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">LIÊN HỆ</h1>
          <ul>
            <li>
              <b>Hotline:</b>{" "}
              <Button className="hover:text-red-500">09655664487</Button>
            </li>
            <li>
              <b>Trang Web :</b>{" "}
              <Button className="hover:text-red-500">pntShop.com</Button>
            </li>
            <li>
              <b>Email :</b>{" "}
              <Button className="hover:text-red-500">pntShop@gamil.com</Button>
            </li>
            <li>
              <b>Địa Chỉ :</b>{" "}
              <Button className="hover:text-red-500">Quảng Ninh</Button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">HỖ TRỢ KHÁCH HÀNG</h1>
          <ul>
            <li>Chính sách đổi trả và bảo hành</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold text-2xl mb-4">THÔNG TIN</h1>
          <p>
            Tải xuống Ứng dụng của chúng tôi và được giảm giá thêm 15% cho đơn
            hàng đầu tiên của bạn..!
          </p>
          <div className="flex gap-2 mt-5">
            <Button>
              <img
                className=" h-auto rounded-sm"
                alt="Google Play"
                src="/images/footer/GooglePlay.png"
              />
            </Button>
            <Button>
              <img
                className=" h-auto rounded-sm"
                alt="App Store"
                src="/images/footer/AppStore.png"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
