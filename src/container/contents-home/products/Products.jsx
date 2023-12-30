import { useEffect, useState } from "react";
import Slider from "react-slick";
import Price from '../../../components/Price/Price';
import Star from '../../../components/Star/Star';
import Button from '../../../components/Button';


const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
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
  };

  return (
    <Slider {...settings}>
      {data.map((product, i) => {
        return (
          <div
            className="grid gap-6 grid-flow-col auto-cols-max
             whitespace-nowrap max-w-6xl justify-between"
            key={product.id}
          >
            <div className="h-auto w-56 items-center shadow-xl mx-4 pb-6 mb-3">
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
    </Slider>
  );
};

export default Products;
