import { useEffect, useState } from "react";
import Price from "../../../components/Price/Price";
import Star from "../../../components/Star/Star";
import Button from "../../../components/Button";
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
          {data.map((product, i) => {
            return (
              <div className="" key={product.id}>
                <div className="h-auto w-full items-center shadow-xl pb-6 mb-3">
                  <div className="flex justify-evenly">
                    <Button>
                      <img
                        className="w-44 h-40 mt-12 mb-14"
                        src={product.image}
                        alt={product.title}
                      />
                    </Button>
                  </div>
                  <div className="text-center">
                    <Star />
                    <div className="hover:text-red-600 my-4">
                      <Button>
                        <h1 className="whitespace-nowrap max-w-44 overflow-hidden text-ellipsis">
                          {product.title}
                        </h1>
                      </Button>
                    </div>
                    <Price price={product.price} />
                  </div>
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
