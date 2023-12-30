import { FaAngleDown, FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import Wrapper from '../../wrapper'

const HeaderTop = () => {
  return (
    <>
      <Wrapper>
        <div className="flex py-2 justify-between font-['Open_Sans'] text-base">
          <div>
            <span className="">We are open with limited hours and staff.</span>
          </div>
          <div>
            <div className="flex">
              <span className="inline-flex items-center">
                <span className="mr-1">USD</span>
                <FaAngleDown />
              </span>
              <span
                className="inline-flex items-center px-3 mx-3
                    border-2 border-t-transparent border-b-transparent
                    border-r-black border-l-black"
              >
                <FaLocationDot />
                <span className="ml-1">PNT-SHOP</span>
              </span>
              <span className="inline-flex items-center">
                <FaPhoneFlip />
                <span className="ml-1">(+84) 868342028</span>
              </span>
            </div>
          </div>
        </div>
      </Wrapper>
      <div
        className="w-full border-2 border-r-transparent border-l-transparent 
      border-t-transparent border-b-gray mb-2"
      ></div>
    </>
  );
};

export default HeaderTop;
