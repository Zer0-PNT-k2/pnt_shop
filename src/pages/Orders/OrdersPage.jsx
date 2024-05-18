import React, { useContext, useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import { Carts } from "../../contexts/CartContext";
import Price from "../../components/Price";
import { IoMdCart } from "react-icons/io";
import FormPay from "../../components/Dialog/FormPay/FormPay";

export default function OrdersPage() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("dataCart") || "[]")
  );
  const [open, setOpen] = useState(false);
  const count = useContext(Carts);
  const contactBreadcrumbs = [
    {
      to: "/orders",
      title: "Giỏ hàng của bạn",
    },
  ];

  const handleDeleteCart = (id) => {
    const newData = data.filter((item) => item._id !== id);

    setData(newData);

    localStorage.setItem("dataCart", JSON.stringify(newData));
    count.setCount(newData.length);
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      {data.length ? (
        <div className="mx-auto max-w-screen-xl text-center font-['Open_Sans'] table-fixed text-base mb-6">
          {data.map((c, i) => {
            return (
              <table key={i} className="text-center table-fixed mb-2">
                <thead>
                  <tr>
                    <th>SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>TỔNG TIỀN</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex w-auto mx-12">
                        <div className="w-24 h-24">
                          <img
                            className="w-20 h-20 mt-2"
                            src={`http://localhost:3001/${c?.image}`}
                            alt={c.title}
                          />
                        </div>
                        <div className="w-80">
                          <span>{c.title}</span>
                          <div className="uppercase mt-6 text-lg">
                            <span>
                              {
                                (c.color_id?.filter(
                                  (e) => e.isChecked === true
                                ))[0].name
                              }
                            </span>
                            <span>{" / "}</span>
                            <span>
                              {
                                (c.size_id?.filter(
                                  (e) => e.isChecked === true
                                ))[0].name
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="w-48 flex justify-center items-center text-xl">
                        <Price price={Math.ceil(c.price)} />
                      </div>
                    </td>
                    <td>
                      <div className="w-48">
                        <span>{c.count}</span>
                      </div>
                    </td>
                    <td>
                      <div className="w-48 justify-center flex items-center text-xl">
                        <Price price={Math.ceil(c.price * c.count)}></Price>
                      </div>
                    </td>
                    <td>
                      <div className="w-48">
                        <button
                          onClick={() => handleDeleteCart(c._id)}
                          className="hover:text-red-600"
                        >
                          <TiDeleteOutline className="w-12 h-12" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
          <div className="w-full my-6 flex justify-end">

            <div
              onClick={handleClickOpen}
              className="flex justify-center text-center w-96 py-1 content-center hover:bg-red-600 text-red-500 hover:text-white border-red-600 border rounded-md border-solid"
            >
              <IoMdCart className="w-6 h-6 mr-2" /> Mua
            </div>

            <FormPay
              token={token}
              open={open}
              handleClose={handleClose}
              data={data}
            />
          </div>
        </div>
      ) : (
        <div className="text-base text-center font-['Open_Sans']">
          <h1 className="text-4xl font-bold">GIỎ HÀNG TRỐNG.</h1>
          <img
            className="w-36 h-36 m-auto my-8"
            src="https://cdn.shopify.com/s/files/1/0132/3116/1408/files/cart.png?13612"
            alt="Giỏ hàng trống"
          />
          <span className="text-xl">
            Bạn không có mặt hàng nào trong giỏ hàng của mình.
          </span>
          <Link to="/products/all">
            <button className="flex font-medium text-xl mt-9 mb-24 m-auto items-center hover:text-red-600">
              <MdOutlineNavigateBefore className="w-6 h-6 mx-1" />
              Tiếp tục mua sắm
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
