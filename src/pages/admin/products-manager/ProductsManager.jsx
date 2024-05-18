import { Button, Pagination, PaginationItem } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { Link, useSearchParams } from "react-router-dom";
import FormProduct from "../../../components/Dialog/FormProduct";
import ToastifyError from "../../../components/toasttify/toasttifyError/ToastifyError";
import ToastifySuccess from "../../../components/toasttify/success/ToastifySuccess";
import { ToastContainer } from "react-toastify";

export default function ProductsManager() {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const pageSize = 9;
  const [paging, setPaging] = useState({
    perPage: 0,
    totalPages: 0,
  });
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    fetch(`http://localhost:3001/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        setDatas(data);
      })
      .catch((err) => {
        ToastifyError(err.message);
      });
  }, [token, paging.perPage]);

  // tính tổng số trang
  useEffect(() => {
    const totalPages = Math.ceil(datas.length / pageSize);
    setPaging((prev) => ({ ...prev, totalPages }));
  }, [datas]);

  // lấy số trang trên url
  useEffect(() => {
    setPaging((prev) => ({
      ...prev,
      perPage: parseInt(searchParams.get("page")) || 1,
    }));
  }, [searchParams]);

  // Tính số phần tử trong 1 trang
  useEffect(() => {
    const offset = (paging.perPage - 1) * pageSize;
    setProductsData(datas.slice(offset, offset + pageSize));
  }, [datas, paging]);

  async function handleDelete(e, id) {
    e.preventDefault();
    try {
      const userDelete = await axios({
        method: "DELETE",
        url: `http://localhost:3001/products/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (userDelete.status(200)) {
        ToastifySuccess(userDelete.message);
      }
    } catch (error) {
      ToastifyError(error.response?.data.message);
    }
  }

  useEffect(() => {}, [datas]);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      {productsData?.length ? (
        <div>
          <div>
            <Button className="flex text-center my-4" onClick={handleClickOpen}>
              <IoIosAddCircle className="w-6 h-6 text-green-500 mr-2" />
              Add product
            </Button>

            <>
              <FormProduct
                token={token}
                open={open}
                handleClose={handleClose}
              />
            </>
          </div>
          <form className="scroll-auto overflow-x-auto">
            <table className="mb-4 text-center">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th colSpan={2}>Image</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Create-At(Date)</th>
                  <th>Update-At(Date)</th>
                  <th colSpan={2}>Option</th>
                </tr>
              </thead>
              <tbody>
                {productsData?.map((products, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1 + (page - 1) * paging.perPage}</td>
                      <td className="line-clamp-4">{products?.title}</td>
                      <td colSpan={2} className="px-2">
                        <img
                          src={`http://localhost:3001/${products?.image}`}
                          alt=""
                        />
                      </td>
                      <td className="px-2 line-clamp-4 overflow-y-scroll">
                        {products.description}
                      </td>
                      <td className="px-2">{products?.price}</td>
                      <td className="px-2">{products?.quantity}</td>
                      <td className="px-2">{products.category_id?.name}</td>
                      <td className="px-2">
                        <table>
                          <tbody>
                            <tr>
                              {products?.size_id.map((size, i) => {
                                return (
                                  <td className="px-2" key={i}>
                                    {size?.name}
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="px-2">
                        <table>
                          <tbody>
                            <tr>
                              {products.color_id.map((color, i) => {
                                return (
                                  <td className="px-2 h-1" key={i}>
                                    {color.name}
                                  </td>
                                );
                              })}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td className="px-2 w-20">{products.createdAt}</td>
                      <td className="px-2 w-20">{products.updatedAt}</td>
                      <td className="px-2">
                        <Link to={`/admin/products/edit/${products._id}`}>
                          <FaRegEdit className="w-6 h-6 text-yellow-500 mx-4" />
                        </Link>
                      </td>
                      <td className="px-2">
                        <button onClick={(e) => handleDelete(e, products._id)}>
                          <RiDeleteBinLine className="w-6 h-6 text-red-500 mx-2" />
                        </button>
                        <ToastContainer />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>

          <div className="mt-24 flex justify-center">
            <Pagination
              page={paging.perPage}
              count={paging.totalPages}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/admin/products${
                    item.page === 1 ? "" : `?page=${item.page}`
                  }`}
                  {...item}
                />
              )}
              variant="outlined"
              color="primary"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      ) : (
        <h2>Chưa có dữ liệu...</h2>
      )}
    </>
  );
}
