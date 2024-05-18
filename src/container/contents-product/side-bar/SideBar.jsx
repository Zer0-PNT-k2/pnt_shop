import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function SideBar({
  onCheck,
  onPrePriceChange,
  onNextPriceChange,
  handleFilter,
  handleReset,
  price,
  categories,
  sizes,
  colors,
}) {
  return (
    <div className="w-72 mr-12">
      {/* <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Thống kê</h1>
        <ul>
          <li>
            <Input
              onChange={onCheck}
              type="checkbox"
              name="Thongke"
              value="inStock"
              className="mr-1"
            />
            Hàng còn <span>(9)</span>
          </li>
          <li>
            <Input
              onChange={onCheck}
              type="checkbox"
              name="Thongke"
              value="outOfStock"
              className="mr-1"
            />
            Hết hàng <span>(7)</span>
          </li>
        </ul>
      </div> */}
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl">Giá</h1>
        <span className="block my-3">
          Giá: {price.prevPrice} - {price.nextPrice}
        </span>
        <Button
          onClick={handleReset}
          name="reset"
          type="reset"
          className="my-3"
        >
          Reset
        </Button>
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
          {categories.map((category, i) => (
            <li key={i}>
              <Input
                type="checkbox"
                onChange={onCheck}
                name="Loai"
                value={category.name}
                checked={category.isChecked}
                className="mr-1"
              />
              {category.name} <span>({category.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Kích thước</h1>
        <ul className="h-44 overflow-y-scroll">
          {sizes.map((size, i) => (
            <li key={i}>
              <Input
                type="checkbox"
                onChange={onCheck}
                name="Size"
                value={size.name}
                className="mr-1"
              />
              {size.name} <span>({size.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-base w-full bg-gray-100 px-4 py-6 mb-5 rounded-lg">
        <h1 className="text-2xl mb-5">Màu</h1>
        <ul>
          {colors.map((color, i) => (
            <li key={i}>
              <Input
                type="checkbox"
                onChange={onCheck}
                name="Color"
                value={color.name}
                className="mr-1"
              />
              {color.name} <span>({color.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
