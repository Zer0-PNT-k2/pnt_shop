import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Price from "../../Price";
import { ToastContainer } from "react-toastify";
import ToastifyInfo from "../../toasttify/info/ToastifyInfo";
import ToastifySuccess from "../../toasttify/success/ToastifySuccess";
import ToastifyWarning from "../../toasttify/warning/ToastifyWarning";
import ToastifyError from "../../toasttify/toasttifyError/ToastifyError";

export default function FormPay(props) {
  const { token, open, handleClose, data } = props;

  const API_Key =
    "AK_CS.e676c2600bba11ef8a764f34710886f5.Navil69MyRDa47fuWo2t8LavGteCyKZZJ9QAfH8ZxNpiu2XAnK1FlXdpM83kmdSsxhmG4L62";
  const API_Get = "https://oauth.casso.vn/v2/transactions";

  const [openPay, setOpenPay] = useState(false);
  const [result, setResult] = useState(0);
  const [pay, setPay] = useState({});
  const [select, setSelect] = useState("");
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
    products: [
      {
        id: {},
        name: "",
        color: "",
        size: "",
        count: 1,
        total: 0,
      },
    ],
    total: 0,
    payment: false,
  });

  // onChange dữ liệu
  function handleSelect(e) {
    const colorName = data.color_id
      ? (data.color_id?.filter((e) => e.isChecked))[0].name
      : "";
    const sizeName = data.size_id
      ? (data.size_id?.filter((e) => e.isChecked))[0].name
      : "";
    if (!Array.isArray(data)) {
      setOrder((prev) => ({
        ...prev,
        total: Math.ceil(data.price * 23000 * data.count),
        products: {
          id: data._id,
          name: data.title,
          color: colorName,
          size: sizeName,
          count: data.count,
          total: Math.ceil(data.price * 23000 * data.count),
        },
      }));
    } else {
      const newData = data.map((e) => ({
        name: e.title,
        color: e.color_id
          ? (e.color_id?.filter((e) => e.isChecked))[0]?.name
          : "",
        size: e.size_id ? (e.size_id?.filter((e) => e.isChecked))[0].name : "",
        count: e.count,
        total: Math.ceil(e.price * 23000 * e.count),
      }));

      setOrder((prev) => ({ ...prev, products: newData }));
    }
    setSelect(e.target.value);
  }

  function handleInput(e) {
    setOrder((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // call api thanh toán
  useEffect(() => {
    fetch(API_Get, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_Key}`,
      },
    })
      .then((res) => res.json())
      .then((dataPay) => {
        setPay(dataPay);
      });
  }, []);

  // [POST] /create Orders
  function onSubmitObjectProduct(e) {
    e.preventDefault();
    if (select === "bank") {
      setOpenPay(true);
      console.log(pay.data)
      if (pay.data.records[0]?.amount === Math.ceil(data.price * data.count)) {
        setOrder((prev) => ({ ...prev, payment: true }));
        setOpenPay(false);

        try {
          fetch(`http://localhost:3001/products/orders/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(order),
          }).then((res) => {
            ToastifySuccess("Bạn đã thanh toán đặt hàng thành công!!!");
          });

          setTimeout(() => {
            setOrder({
              name: "",
              phone: "",
              address: "",
              products: [
                {
                  name: "",
                  color: "",
                  size: "",
                  count: 1,
                  total: 0,
                },
              ],
              total: 0,
              payment: false,
            });
            handleClose();
          }, 2000);
        } catch (error) {
          ToastifyError(error.response.data.message);
        }
      } else {
        ToastifyInfo("Vui lòng thanh toán !!!");
      }
    } else if (select === "pickup") {
      try {
        fetch(`http://localhost:3001/products/orders/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(order),
        }).then((res) => {
          ToastifySuccess("Đặt thành công, nhận hàng vui lòng thanh toán!!!");
        });

        setTimeout(() => {
          setOrder({
            name: "",
            phone: "",
            address: "",
            products: [
              {
                id: {},
                name: "",
                color: "",
                size: "",
                count: 1,
                total: 0,
              },
            ],
            total: 0,
            payment: false,
          });
          handleClose();
        }, 2000);
      } catch (error) {
        ToastifyWarning("Vui lòng chọn phương thức thanh toán !!!");
      }
    } else {
      ToastifyWarning("Vui lòng chọn phương thức thanh toán !!!");
    }
  }

  useEffect(() => {
    setResult(
      data.length
        ? data.reduce((a, c) => {
            a += Math.ceil(c.price * 23000 * c.count);
            return a;
          }, 0)
        : Math.ceil(data.price * 23000 * data.count)
    );
  }, [data]);

  // Đóng Dialog Pay
  function closePay() {
    setOpenPay(false);
  }

  return (
    <Dialog
      open={open}
      maxWidth="xl"
      xs={40}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: onSubmitObjectProduct,
      }}
    >
      <DialogTitle className="text-center">
        Nhập thông tin thanh toán
      </DialogTitle>
      <DialogContent className="text-base p-6 w-full">
        <div className="block w-full">
          <div className="mb-4">
            <label className="inline-block w-40" htmlFor="name">
              Tên người nhận:
            </label>
            <input onChange={handleInput} type="text" name="name" id="name" />
          </div>
          <div className="mb-4">
            <label className="inline-block w-40" htmlFor="phone">
              Nhập số điện thoại:
            </label>
            <input onChange={handleInput} type="text" name="phone" id="phone" />
          </div>
          <div className="mb-4">
            <label className="inline-block w-40" htmlFor="address">
              Nhập địa chỉ:
            </label>
            <input
              onChange={handleInput}
              type="text"
              name="address"
              id="address"
            />
          </div>
        </div>
        <div className="w-full">
          {data.length > 1 ? (
            <>
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
                      </tr>
                    </tbody>
                  </table>
                );
              })}
              <div className="flex justify-between">
                <div>
                  <select
                    className="w-96 text-center"
                    name=""
                    id=""
                    onChange={handleSelect}
                  >
                    <option value="bank">
                      --- Vui lòng chọn phương thức thanh toán ---
                    </option>
                    <option value="bank">Thanh toán ngân hàng</option>
                    <option value="pickup">Nhận hàng khi thanh toán</option>
                  </select>
                </div>
                <div>
                  <span>Tổng tiền: </span> {result}
                </div>
              </div>
            </>
          ) : (
            <>
              <table className="mx-auto min-w-screen-xl text-center font-['Open_Sans'] table-fixed text-base mb-6">
                <thead>
                  <tr>
                    <th>SẢN PHẨM</th>
                    <th>GIÁ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>TỔNG TIỀN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex w-auto mx-12">
                        <div className="w-24 h-24">
                          <img
                            className="w-20 h-20 mt-2"
                            src={`http://localhost:3001/${data?.image}`}
                            alt={data.title}
                          />
                        </div>
                        <div className="w-80">
                          <span>{data.title}</span>
                          <div className="uppercase mt-6 text-lg">
                            <span>
                              {data.size_id
                                ? (data.size_id?.filter(
                                    (e) => e.isChecked === true
                                  ))[0].name
                                : ""}
                            </span>
                            <span>{" / "}</span>
                            <span>
                              {data.color_id
                                ? (data.color_id?.filter(
                                    (e) => e.isChecked === true
                                  ))[0].name
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="w-48 flex justify-center items-center text-xl">
                        <Price price={Math.ceil(data.price)} />
                      </div>
                    </td>
                    <td>
                      <span>{data.count}</span>
                    </td>
                    <td>
                      <div className="w-48 justify-center flex items-center text-xl">
                        <Price
                          price={Math.ceil(data.price * data.count)}
                        ></Price>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <select
                  className="w-96 text-center"
                  name=""
                  id=""
                  onChange={handleSelect}
                >
                  <option value="bank">
                    --- Vui lòng chọn phương thức thanh toán ---
                  </option>
                  <option value="bank">Thanh toán ngân hàng</option>
                  <option value="pickup">Nhận hàng khi thanh toán</option>
                </select>
              </div>
            </>
          )}
        </div>

        <ToastContainer />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Mua</Button>
      </DialogActions>
      <Dialog
        open={openPay}
        onClose={closePay}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className="w-auto h-full">
            <img src="../../../../images/payment/payment.png" alt="" />
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
