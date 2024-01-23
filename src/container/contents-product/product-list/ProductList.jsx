import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Star from "../../../components/star";
// import { Pagination, PaginationItem } from "@mui/material";
// import { Link } from "react-router-dom";

const ProductList = ({ dataRender, paging }) => {
  return (
    <>
      <div className="snap-align-none">
        {dataRender.map((product) => {
          return (
            <Link key={product.id} to={`/products/details/${product.id}`}>
              <div
                className="grid grid-cols-2 gap-2
              bg-gray-100 mt-5 shadow-xl hover:shadow-2xl"
              >
                <div className="flex m-auto">
                  <Button>
                    <img
                      className="w-64 h-64 my-4"
                      src={product.image}
                      alt={product.title}
                    />
                  </Button>
                </div>
                <div className="h-auto text-base mb-8">
                  <div className="justify-start">
                    <div className="hover:text-red-600 my-4">
                      <Button>
                        <h2 className="flex text-start ml-2">
                          {product.title}
                        </h2>
                      </Button>
                    </div>
                    <div>
                      <Star
                        stars={product.rating.rate}
                        countSold={product.rating.count}
                        title1="reviews"
                      />
                    </div>
                    <div className="flex items-center text-red-600 font-semibold text-lg ml-1">
                      <MdAttachMoney />
                      <span>{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className="mt-24 ml-24">
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
      </div> */}
    </>
  );
};

export default ProductList;
