import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Pagination,
  PaginationItem,
  Slide,
} from "@mui/material";
import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link, useSearchParams } from "react-router-dom";
import Price from "../../../components/Price/Price";
import ToastifySuccess from "../../../components/toasttify/success/ToastifySuccess";
import { ToastContainer } from "react-toastify";
import ToastifyError from "../../../components/toasttify/toasttifyError/ToastifyError";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderManager() {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [paging, setPaging] = useState({
    perPage: 1,
    totalPages: 0,
  });
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function hanlePage() {
    fetch(`http://localhost:3001/products/orders?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPaging({
          perPage: json.datas.perPage,
          totalPages: json.datas.lengthPage,
        });
        const data = json.datas?.dataOrder;
        setOrderData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    hanlePage();
  }, [page, orderData.length]);

  async function handleDestroy(id) {
    try {
      const orderDestroy= await axios({
        method: "DELETE",
        url: `http://localhost:3001/products/orders/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (orderDestroy.status(200)) {
        ToastifySuccess(orderDestroy.message);
      }
    } catch (error) {
      ToastifyError(error.response?.data.message);
    }
  }

  return (
    <div>
      <form className="scroll-auto overflow-x-auto">
        <table className="mb-4">
          <thead>
            <tr>
              <th>STT</th>
              <th>FullName</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email</th>
              <th>Products</th>
              <th>Payment</th>
              <th>Create-At(Date)</th>
              <th>Update-At(Date)</th>
              <th colSpan={2}>Option</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1 + (page - 1) * paging.perPage}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{order.email}</td>
                  <td>
                    <Button variant="outlined" onClick={handleClickOpen}>
                      Sản phẩm
                    </Button>
                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle>{"Chi tiết sản phẩm đặt hàng"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                          <table>
                            <thead>
                              <tr>
                                <th>_id</th>
                                <th>name</th>
                                <th>size</th>
                                <th>color</th>
                                <th>count</th>
                                <th>total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order?.products.map((product, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.size}</td>
                                    <td>{product.color}</td>
                                    <td>{product.count}</td>
                                    <td>
                                      <Price
                                        price={Math.ceil(product.total)}
                                      ></Price>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>CANCEL</Button>
                      </DialogActions>
                    </Dialog>
                  </td>
                  <td>{order.payment ? "Đã thanh toán" : "Chưa thanh toán"}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.updatedAt}</td>
                  <td>
                    <Link to={`/admin/orders/edit/${order._id}`}>
                      <FaRegEdit className="w-6 h-6 text-yellow-500 mx-4" />
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="/admin/orders"
                      onClick={() => handleDestroy(order._id)}
                    >
                      <RiDeleteBinLine className="w-6 h-6 text-red-500 mx-2" />
                    </Link>
                    <ToastContainer/>
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
              to={`/admin/orders${item.page === 1 ? "" : `?page=${item.page}`}`}
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
  );
}
