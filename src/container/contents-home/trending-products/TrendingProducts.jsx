import React from "react";
import { useEffect, useState } from "react";
import Price from "../../../components/Price";
import Star from "../../../components/Star";
import Button from "../../../components/Button";
import Wrapper from "../../../components/wrapper";

export default function TrendingProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((datas) => {
        setData(datas.slice(0, 8));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <div className="font-['Open_Sans'] text-base">
        <div className="flex justify-between pt-16 pb-6">
          <div>
            <h1 className="leading-9 text-3xl font-semibold">
              Trending Products
            </h1>
          </div>
          <div>
            <Button className="focus:text-red-600 leading-9 font-semibold pr-2">
              Headphones
            </Button>
            <Button className="focus:text-red-600 mx-4 leading-9 font-semibold pr-2">
              Watch
            </Button>
            <Button className="focus:text-red-600 leading-9 font-semibold pr-2">
              Laptop
            </Button>
          </div>
        </div>
        <div className="flex grid grid-cols-4 gap-8 mb-16">
          {data.map((product) => {
            return (
              <div
                key={product._id}
                className="flex justify-center text-center rounded-md bg-gray-100 shadow-xl hover:shadow-2xl"
              >
                <div className="w-auto h-auto text-base mb-8">
                  <Button>
                    <img
                      className="w-40 h-40 my-8"
                      src={`http://localhost:3001/${product.image}`}
                      alt={product.title}
                    />
                  </Button>
                  <div className="hover:text-red-600 my-4">
                    <Button>
                      <h1 className="h-12 mx-12 line-clamp-2">
                        {product.title}
                      </h1>
                    </Button>
                  </div>
                  <div className="text-center">
                    <Star
                      stars={product.rating.rate}
                      countSold={product.rating.count}
                      title1="reviews"
                    />
                  </div>
                  <Price price={Math.ceil(product.price)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
