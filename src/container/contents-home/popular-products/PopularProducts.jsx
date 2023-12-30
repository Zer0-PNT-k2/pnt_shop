import { FaArrowRight } from "react-icons/fa";
import Products from '../products';
import Button from '../../../components/button';
import Wrapper from '../../../components/wrapper';

const PopularProducts = () => {
  return (
    <Wrapper>
      <div className="font-['Open_Sans'] text-base">
        <div className="flex justify-between pt-16 pb-6">
          <div>
            <h1 className="leading-9 text-3xl font-semibold">
              Popular products
            </h1>
          </div>
          <div>
            <Button className="hover:text-red-600 leading-9 font-semibold pr-2">
              View all products
            </Button>
            <FaArrowRight className="inline-flex text-red-600" />
          </div>
        </div>
        <div className="mb-24">
          <Products />
        </div>
      </div>
    </Wrapper>
  );
};

export default PopularProducts;
