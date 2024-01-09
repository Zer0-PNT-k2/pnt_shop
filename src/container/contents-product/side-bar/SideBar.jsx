import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";

const SideBar = ({
  onCheck,
  onPrePriceChange,
  onNextPriceChange,
  handleFilter,
}) => {
  return (
    <div className="w-72 mr-12">
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Thống kê</h1>
        <ul>
          <li>
            <Input
              onChange={onCheck}
              type="checkbox"
              name="Availability"
              value="inStock"
              className="mr-1"
            />
            Hàng còn <span>(9)</span>
          </li>
          <li>
            <Input
              onChange={onCheck}
              type="checkbox"
              name="Availability"
              value="outOfStock"
              className="mr-1"
            />
            Hết hàng <span>(7)</span>
          </li>
        </ul>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl">Giá</h1>
        <span className="block my-3">Giá: </span>
        {/* <Link to="/products/all">
          <Button value="reset" name="reset" className="my-3">reset</Button>
        </Link> */}
        <ul className="w-full flex">
          <li>
            <label>Giá từ:</label>
            <Input
              onChange={onPrePriceChange}
              type="number"
              name="price"
              min={0}
              max={150000}
              placeholder="0-150000"
              className="w-24 pl-1"
            />
          </li>
          <li className="block w-2 mr-2 mt-7">
            <FaLongArrowAltRight />
          </li>
          <li>
            <label>tới:</label>
            <Input
              onChange={onNextPriceChange}
              type="number"
              name="price"
              min={150000}
              max={5000000}
              placeholder="150000-5000000"
              className="w-36 pl-1"
            />
          </li>
        </ul>
        <Button
          onClick={handleFilter}
          className="px-4 py-1 bg-red-600 text-white hover:bg-black rounded-md"
        >
          FILTER
        </Button>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Loại</h1>
        <ul className="h-44 overflow-y-scroll">
          <li>
            <Input type="checkbox" value="Men's clothing" className="mr-1" />
            Quần áo nam <span>(9)</span>
          </li>
          <li>
            <Input type="checkbox" value="Jewelery" className="mr-1" />
            Đồ kim loại <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="Electronics" className="mr-1" />
            Thiết bị điện tử <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="Women's clothing" className="mr-1" />
            Quần áo nữ <span>(7)</span>
          </li>
        </ul>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Kích thước</h1>
        <ul className="h-44 overflow-y-scroll">
          <li>
            <Input type="checkbox" value="S" className="mr-1" />S{" "}
            <span>(9)</span>
          </li>
          <li>
            <Input type="checkbox" value="M" className="mr-1" />M{" "}
            <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="L" className="mr-1" />L{" "}
            <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="XL" className="mr-1" />
            XL <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="2XL" className="mr-1" />
            2XL <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="3XL" className="mr-1" />
            3XL <span>(7)</span>
          </li>
        </ul>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Màu</h1>
        <ul>
          <li>
            <Input type="checkbox" value="Đen" className="mr-1" />
            Đen <span>(9)</span>
          </li>
          <li>
            <Input type="checkbox" value="Trắng" className="mr-1" />
            Trắng <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="Xanh" className="mr-1" />
            Xanh <span>(7)</span>
          </li>
          <li>
            <Input type="checkbox" value="xam" className="mr-1" />
            Xám <span>(7)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
