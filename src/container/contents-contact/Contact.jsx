import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import Wrapper from "../../components/wrapper";

export default function Contact() {
  return (
    <Wrapper>
      <div className="text-base">
        <h1 className="text-4xl font-normal mb-2">
          Chúng tôi luôn mong muốn được nghe từ bạn!
        </h1>
        <p>
          Bạn có thể gọi cho chúng tôi trong thời gian làm việc hoặc ghé thăm
          văn phòng của chúng tôi.
          <br /> Tất cả các thư sẽ nhận được phản hồi trong vòng 24 giờ. Thích
          nghe từ bạn!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 font-['Open_Serif'] my-12 text-base">
        <div className="flex">
          <CiLocationOn className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">ĐỊA CHỈ</h2>
            <p>Quảng Yên - Quảng Ninh - Việt Nam</p>
          </div>
        </div>
        <div className="flex">
          <AiOutlinePhone className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">LIÊN HỆ</h2>
            <p>
              Iphone: <b>(+84) 868342028</b>
            </p>
            <p>
              Mail: <b>tan2002@gmail.com</b>
            </p>
          </div>
        </div>
        <div className="flex">
          <MdAccessTime className="text-red-600 mr-2 mt-1 text-4xl" />
          <div>
            <h2 className="text-2xl mb-4 mt-1">GIỜ HÀNH CHÍNH</h2>
            <p>
              Thứ 2 – 6 : <b>09:00 – 20:00</b>
            </p>
            <p>
              Thứ 7 & Chủ nhật: <b>10:30 – 22:00</b>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
