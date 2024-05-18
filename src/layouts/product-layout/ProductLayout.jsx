import React from "react";
import { Link } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoList } from "react-icons/io5";
import Wrapper from "../../components/wrapper";
import SideBar from "../../container/contents-product/side-bar";
import ProductList from "../../container/contents-product/product-list";
import ProductGrid from "../../container/contents-product/product-grid";

export default function ProductLayout({
  view,
  dataRender,
  paging,
  onSort,
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
  const sortArr = [
    {
      id: 1,
      title: "---Chọn sắp xếp---",
      value: 1,
    },
    {
      id: 2,
      title: "Sắp xếp từ A-Z",
      value: 2,
    },
    {
      id: 3,
      title: "Sắp xếp từ Z-A",
      value: 3,
    },
    {
      id: 4,
      title: "Sắp xếp giá tăng dần",
      value: 4,
    },
    {
      id: 5,
      title: "Sắp xếp giá giảm dần",
      value: 5,
    },
  ];

  return (
    <Wrapper>
      <div className="flex mb-24 mt-16">
        <SideBar
          onCheck={onCheck}
          onPrePriceChange={onPrePriceChange}
          onNextPriceChange={onNextPriceChange}
          handleFilter={handleFilter}
          handleReset={handleReset}
          price={price}
          categories={categories}
          sizes={sizes}
          colors={colors}
        />
        <div className="flex-1">
          <div className="flex h-12 px-8 justify-between  text-base border-2 border-gray-200 items-center">
            <div className="flex w-24 justify-evenly">
              <Link to="/products/all?view=grid">
                <BsGrid3X3GapFill className="w-5 h-5 mt-2 focus:text-red-600" />
              </Link>
              <Link to="/products/all?view=list">
                <IoList className="w-7 h-7 mt-1 focus:bg-red-600" />
              </Link>
            </div>
            <div className="flex w-70 justify-evenly">
              <div className="mt-1 mr-2">
                <b className="">Sắp xếp:</b>
              </div>
              <form className="">
                <select
                  onChange={onSort}
                  className="text-center border-2 border-gray-600 ouline-none py-1 rounded-full"
                >
                  {sortArr.map((s, i) => (
                    <option key={i} value={s.value}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
          {view === "list" ? (
            <ProductList
              dataRender={dataRender}
              paging={paging}
              price={price}
            />
          ) : (
            <ProductGrid
              dataRender={dataRender}
              paging={paging}
              price={price}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
