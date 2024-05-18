import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Price from "../../../components/Price";
import Star from "../../../components/Star";
import Button from "../../../components/Button";

export default function BannerCollection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: true,
    variableWidth: true,
    rtl: true,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {data.map((product) => {
        return (
          <div className="flex justify-center text-center" key={product._id}>
            <div className="h-auto w-56 rounded-md bg-gray-100 shadow-xl mx-4">
              <div className="text-base mb-8 pb-5">
                <Link to={`/products/details/${product._id}`}>
                  <Button>
                    <img
                      className="w-40 h-40 my-8"
                      src={`http://localhost:3001/${product.image}`}
                      alt={product.title}
                    />
                  </Button>
                  <div className="hover:text-red-600 my-4">
                    <Button>
                      <h1 className="h-12 mx-4 line-clamp-2">
                        {product.title}
                      </h1>
                    </Button>
                  </div>
                </Link>
                <div className="text-center">
                  <Star stars={product.rating.rate} />
                </div>
                <Price price={Math.ceil(product.price)} />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
