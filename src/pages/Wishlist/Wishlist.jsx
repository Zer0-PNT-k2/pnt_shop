import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Wrapper from "../../components/wrapper/Wrapper";

export default function Wishlist() {
  const contactBreadcrumbs = [
    {
      to: "/wishlist",
      title: "Danh sách yêu thích",
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      <Wrapper>
        <div className="mb-24 font-['Open_Sans']">
          <h1 className="block text-3xl font-medium">
            Danh sách mong muốn của bạn hiện đang trống!
          </h1>
          <div className="flex font-medium text-base">
            <span>Tiếp tực duyệt</span>
            <Link to="/products/all">
              <button className="hover:text-red-600">tại đây!</button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
