import { useEffect, useState } from "react";
import Price from "../../../components/price";
import Star from "../../../components/star";
import Button from "../../../components/button";
import Wrapper from "../../../components/wrapper";

const TrendingProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 8));
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
                key={product.id}
                className="flex justify-center text-center rounded-md bg-gray-100 shadow-xl hover:shadow-2xl"
              >
                <div className="w-auto h-auto text-base mb-8">
                  <Button>
                    <img
                      className="w-40 h-40 my-8"
                      src={product.image}
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
                  <Price price={product.price} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default TrendingProducts;
