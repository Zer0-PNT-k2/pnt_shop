import React, { useState, useContext, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Star from "../../components/Star";
import Wrapper from "../../components/wrapper";
import { Carts } from "../../contexts/CartContext";
import FormPay from "../../components/Dialog/FormPay/FormPay";
import { IoMdCart } from "react-icons/io";
import {ToastContainer } from "react-toastify";
import ToastifySuccess from "../../components/toasttify/success/ToastifySuccess";

export default function Details() {
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  let localCartData = JSON.parse(localStorage.getItem("dataCart") || "[]");
  const count = useContext(Carts);
  const params = useParams();
  // const [objCart, setObjCart] = useState();

  const contactBreadcrumbs = [
    {
      to: "/products/all",
      title: "Sản phẩm",
    },
    {
      to: "",
      title: data.title,
    },
  ];

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // [GET] detail /:_id
  useEffect(() => {
    fetch(`http://localhost:3001/products/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const productDetail = processProductData(json);
        setData(productDetail);
      })
      .catch((error) => console.log(error));
  }, [params]);

  const processProductData = (product) => {
    const size_id = product.size_id.map((s, i) => ({
      ...s,
      isChecked: i === 0,
    }));
    const color_id = product.color_id.map((c, i) => ({
      ...c,
      isChecked: i === 0,
    }));

    return { ...product, color_id, size_id };
  };

  const handleCount = (direction) => {
    setData((prev) => {
      let count = prev.count;
      if (direction === "tang") {
        count += 1;
      } else if (count > 1) {
        count -= 1;
      }
      return { ...prev, count };
    });
  };

  // Xử lý check
  const handleStateCheck = (entity, property) => {
    setData((prev) => {
      const state = prev[property].map((item) => ({
        ...item,
        isChecked: item._id === entity._id,
      }));
      return { ...prev, [property]: state };
    });
  };

  const handelAddCart = () => {
    // [] --> chua co san pham nao trong gio hang
    // [{id: 1}] --> Nhung detailID = 2 -->  chua co san pham nao trong gio hang
    const isExists = localCartData.find((product) => {
      const sizeChecked = product?.size_id.find((s) => s.isChecked);
      const colorChecked = product?.color_id.find((s) => s.isChecked);

      const sizeCurrChecked = data?.size_id.filter((s) => s.isChecked);
      const colorCurrChecked = data?.color_id.filter((s) => s.isChecked);

      return (
        product._id === data._id &&
        sizeChecked._id === sizeCurrChecked[0]._id &&
        colorChecked._id === colorCurrChecked[0]._id
      );
    });

    // Trường hợp có sản phẩm trong giỏ hàng r
    if (isExists) {
      localCartData = localCartData.map((prev) => ({
        ...prev,
        count: (prev.count += data.count),
      }));
    } else {
      localCartData.push(data);
    }
    // Nếu chưa có san pham hien tai dang xem trong gio hang --> thì add
    // Có trùng size, color --> thì tăng số lượng lên
    // Có rồi nhưng lệch size hoặc color --> thì add vào

    // Cuối cùng luôn đẩy dữ liệu vào local
    localStorage.setItem("dataCart", JSON.stringify(localCartData));
    count.setCount(localCartData.length);
    ToastifySuccess("Thêm vào giỏ hàng thành công!!!")
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
      <Wrapper>
        <div className="grid grid-flow-col gap-8 my-24 font-['Open_Sans']">
          <div className="col-span-5">
            <div className="w-96 flex rounded border border-black">
              <img
                className="w-72 h-72 my-12 mx-auto cursor-pointer hover:scale-125 transform-gpu"
                src={`http://localhost:3001/${data?.image}`}
                alt={data.title}
              />
            </div>
            {/* Ảnh cùng loại */}
            {/* <div></div> */}
          </div>
          <div className="col-span-6 px-9 text-base">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="border-2 border-t-neutral-200 my-6"></div>
            <div className="inline-flex">
              <Star
                stars={data.rating?.rate}
                countSold={data.rating?.count}
                title1="reviews"
              />
            </div>
            <div
              className="py-4 border-2 border-y-neutral-100 border-x-transparent
            flex items-center text-red-600 font-semibold text-lg ml-1 !text-3xl"
            >
              <span className="">
                {VND.format(Math.ceil(data.price * 23000))}
              </span>
            </div>
            <p className="w-4/6 my-7">{data.description}</p>
            <div className="my-6">
              <span>Size: </span>
              {data.size_id?.map((s, i) => (
                <button
                  key={i}
                  className={`border border-black mx-2 w-12 h-6 rounded-lg ${
                    s.isChecked ? "bg-red-500" : ""
                  }`}
                  value={s.name}
                  onClick={(e) => handleStateCheck(s, "size_id")}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <div className="flex my-9 h-8 place-items-center">
              <span>Color: </span>
              {data.color_id?.map((c, i) => (
                <button
                  key={i}
                  className={`bg-${c.name}-500 p-1 m-2 rounded-full ${
                    c.isChecked ? "border-solid border-lime-400 border-2" : ""
                  }`}
                  value={c.name}
                  onClick={(e) => handleStateCheck(c, "color_id")}
                >
                  <div
                    className={`bg-${c.name} w-6 h-6 text-center rounded-full border-solid border-gray-500 border-2`}
                  ></div>
                </button>
              ))}
            </div>
            <div className="flex w-96 my-4 justify-between">
              <div className="flex h-12 w-32 place-items-center justify-between">
                <button
                  onClick={(e) => handleCount("giam")}
                  className="border border-black px-2"
                >
                  -
                </button>
                <span>{data.count}</span>
                <button
                  onClick={(e) => handleCount("tang")}
                  className="border border-black px-2"
                >
                  +
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handelAddCart}
                  className="rounded bg-black text-white px-3 py-0.5 mt-2 
                            hover:bg-red-600"
                >
                  Thêm vào giỏ hàng
                </button>
                <ToastContainer />
              </div>
              <div>
                <button
                  className="rounded bg-black text-white px-3 py-0.5 mt-2 
                            hover:bg-red-600"
                >
                  <FaRegHeart className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="w-96 my-6">
              <div>
                <div
                  onClick={handleClickOpen}
                  className="flex justify-center text-center w-full py-1 content-center hover:bg-red-600 text-red-500  hover:text-white border-red-600 border rounded-md border-solid"
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
          </div>
        </div>
      </Wrapper>
    </>
  );
}
