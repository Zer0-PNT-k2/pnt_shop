import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Price from '../../../components/price';
import Star from '../../../components/star';
import Button from '../../../components/button';

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
    rtl: true,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {data.map((product) => {
        return (
          <div className="flex justify-center text-center" key={product.id}>
            <div className="h-auto w-56 rounded-md bg-gray-100 shadow-xl mx-4">
              <div className="text-base mb-8 pb-5">
                <Link to={`/products/details/${product.id}`}>
                  <Button>
                    <img
                      className="w-40 h-40 my-8"
                      src={product.image}
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
                <div className="flex justify-around">
                  <Star
                    stars={product.rating.rate}
                    countSold={product.rating.count}
                  />
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
