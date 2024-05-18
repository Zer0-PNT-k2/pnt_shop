import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Wrapper from "../../components/wrapper/Wrapper";
import { MdFavoriteBorder } from "react-icons/md";
import Price from "../../components/Price";
import Star from "../../components/Star";

export default function Wishlist() {
  let localLoveData = JSON.parse(localStorage.getItem("dataLove") || "[]");
  const contactBreadcrumbs = [
    {
      to: "/wishlist",
      title: "Danh sách yêu thích",
    },
  ];

  const handleRemoveLove = (product) => {
    // Nếu sản phẩm đã tồn tại, loại bỏ nó khỏi danh sách
    const newLoveData = localLoveData.filter(
      (data) => data._id !== product._id
    );
    localStorage.setItem("dataLove", JSON.stringify(newLoveData));
    localLoveData = JSON.parse(localStorage.getItem("dataLove"));
  };

  return (
    <>
      {localLoveData.length ? (
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {localLoveData.map((product, index) => {
            return (
              <div
                key={index}
                className="flex justify-center text-center shadow-xl hover:shadow-2xl relative"
              >
                <Link to={`/products/details/${product._id}`}>
                  <div className="w-auto h-auto text-base mb-4 cursor-pointer">
                    <div className="flex justify-center">
                      <img
                        className="w-40 h-40 my-8"
                        src={`http://localhost:3001/${product.image}`}
                        alt={product.title}
                      />
                    </div>
                    <div className="hover:text-red-600 my-4">
                      <div>
                        <h1 className="h-12 line-clamp-2">{product.title}</h1>
                      </div>
                    </div>
                    <div className="text-center">
                      <Star
                        stars={product.rating.rate}
                        // countSold={product.rating.count}
                        // title="Views:"
                      />
                    </div>
                    <div className="text-center">
                      Số lượng: {product.quantity}
                    </div>
                    <Price price={Math.ceil(product.price)} />
                  </div>
                </Link>
                <div
                  onClick={() => handleRemoveLove(product)}
                  className="absolute top-5 right-2 bg-red-500 p-2 text-white rounded-full cursor-pointer"
                >
                  <MdFavoriteBorder className="w-6 h-6" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
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
      )}
    </>
  );
}
