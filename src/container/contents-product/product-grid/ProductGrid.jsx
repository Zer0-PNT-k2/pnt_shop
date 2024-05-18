import React from "react";
import { Link } from "react-router-dom";
import Star from "../../../components/Star";
import Price from "../../../components/Price";
import { Pagination, PaginationItem } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";

export default function ProductGrid({ dataRender, paging }) {
  // Lấy dữ liệu hiện tại từ localStorage hoặc khởi tạo mảng rỗng nếu chưa có dữ liệu

  function handleAddLove(product) {
    let localLoveData = JSON.parse(localStorage.getItem("dataLove") || "[]");
    // Kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa
    const productExists = localLoveData.some(
      (data) => data._id === product._id
    );

    if (productExists) {
      // Nếu sản phẩm đã tồn tại, loại bỏ nó khỏi danh sách
      const newLoveData = localLoveData.filter(
        (data) => data._id !== product._id
      );
      localStorage.setItem("dataLove", JSON.stringify(newLoveData));
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm nó vào danh sách
      localLoveData.push(product);
      localStorage.setItem("dataLove", JSON.stringify(localLoveData));
    }
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {dataRender.map((product, index) => {
          return (
            <div
              key={index}
              className="flex justify-center text-center shadow-xl hover:shadow-2xl relative"
            >
              <Link to={`/products/details/${product._id}`}>
                <div className="w-auto h-auto text-base mb-4 cursor-pointer">
                  <div className="flex justify-center">
                    <img
                      className="w-40 h-40 my-8"
                      src={`http://localhost:3001/${product.image}`}
                      alt={product.title}
                    />
                  </div>
                  <div className="hover:text-red-600 my-4">
                    <div>
                      <h1 className="h-12 line-clamp-2">{product.title}</h1>
                    </div>
                  </div>
                  <div className="text-center">
                    <Star
                      stars={product.rating.rate}
                      // countSold={product.rating.count}
                      // title="Views:"
                    />
                  </div>
                  <div className="text-center">
                    Số lượng: {product.quantity}
                  </div>
                  <Price price={Math.ceil(product.price)} />
                </div>
              </Link>
              <div
                onClick={() => handleAddLove(product)}
                className="absolute top-5 right-2 bg-red-500 p-2 text-white rounded-full cursor-pointer"
              >
                <MdFavoriteBorder className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-24 ml-24">
        <Pagination
          page={paging.page}
          count={paging.totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/products/all${item.page === 1 ? "" : `?page=${item.page}`}`}
              {...item}
            />
          )}
          variant="outlined"
          color="primary"
          showFirstButton
          showLastButton
        />
      </div>
    </>
  );
}
