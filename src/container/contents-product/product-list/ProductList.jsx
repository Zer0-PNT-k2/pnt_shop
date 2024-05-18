import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Star from "../../../components/Star";

export default function ProductList({ dataRender, paging }) {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="snap-align-none mt-5 max-h-[1220px] overflow-y-scroll">
      {dataRender.map((product, index) => {
        return (
          <Link key={index} to={`/products/details/${product._id}`}>
            <div
              className="grid grid-cols-2 gap-2
              bg-gray-100 mt-5 shadow-xl hover:shadow-2xl"
            >
              <div className="flex m-auto">
                <Button>
                  <img
                    className="w-64 h-64 my-4"
                    src={`http://localhost:3001/${product?.image}`}
                    alt={product.title}
                  />
                </Button>
              </div>
              <div className="h-auto text-base mb-8">
                <div className="justify-start">
                  <div className="hover:text-red-600 my-4">
                    <Button>
                      <h2 className="flex text-start ml-2">{product.title}</h2>
                    </Button>
                  </div>
                  <div>
                    <Star
                      stars={product.rating.rate}
                      countSold={product.rating.count}
                      title1="reviews"
                    />
                  </div>
                  <div className="flex items-center text-red-600 font-semibold text-lg ml-1">
                    <span>{VND.format(Math.ceil(product.price))}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
