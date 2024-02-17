import React from "react";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import Star from "../../../components/star";
import Price from "../../../components/price";
import Button from "../../../components/button";

export default function ProductGrid({ dataRender, paging }) {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-6">
        {dataRender.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-center text-center shadow-xl hover:shadow-2xl"
            >
              <Link to={`/products/details/${product.id}`}>
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
                      <h1 className="h-12 line-clamp-2">{product.title}</h1>
                    </Button>
                  </div>
                  <div className="text-center">
                    <Star
                      stars={product.rating.rate}
                      countSold={product.rating.count}
                      title="Số lượng:"
                    />
                  </div>
                  <Price price={Math.ceil(product.price)} />
                </div>
              </Link>
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
