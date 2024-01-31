import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Star from "../../components/star";
import Wrapper from "../../components/wrapper";
import { size, color } from "../../constants";
import { Carts } from "../../components/cartContext/CartContext";

const Details = () => {
  const [data, setData] = useState({});
  const count = useContext(Carts);
  const params = useParams();
  let localCartData = JSON.parse(localStorage.getItem("dataCart") || "[]");
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

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then((res) => res.json())
    .then((json) => {
      const productDetail = processProductData(json);
      setData(productDetail);
    })
    .catch((error) => console.log(error));
  }, [params]);

  const processProductData = (product) => {
    const sizes = size.map((s, i) => ({ ...s, isChecked: i === 0 }));
    const colors = color.map((c, i) => ({ ...c, isChecked: i === 0 }));

    return { ...product, colors, sizes, count: 1 };
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

  const handleStateCheck = (entity, property) => {
    setData((prev) => {
      const state = prev[property].map((item) => ({
        ...item,
        isChecked: item.id === entity.id,
      }));
      return { ...prev, [property]: state };
    });
  };

  const handelAddCart = () => {
    // [] --> chua co san pham nao trong gio hang
    // [{id: 1}] --> Nhung detailID = 2 -->  chua co san pham nao trong gio hang
    const isExists = localCartData.find((product) => {
      const sizeChecked = product.sizes.find((s) => s.isChecked);
      const colorChecked = product.colors.find((s) => s.isChecked);

      const sizeCurrChecked = data.sizes.find((s) => s.isChecked);
      const colorCurrChecked = data.colors.find((s) => s.isChecked);

      return (
        product.id === data.id &&
        sizeChecked.id === sizeCurrChecked.id &&
        colorChecked.id === colorCurrChecked.id
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
    count.setCount(localCartData.length)
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      <Wrapper>
        <div className="grid grid-flow-col gap-8 my-24 font-['Open_Sans']">
          <div className="col-span-5">
            <div className="w-96 flex rounded border border-black">
              <img
                className="w-72 h-72 my-12 mx-auto cursor-pointer hover:scale-125 transform-gpu"
                src={data.image}
                alt={data.title}
              />
            </div>
            {/* Ảnh cùng loại */}
            <div></div>
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
              <span className="">{VND.format(Math.ceil(data.price * 23000))}</span>
            </div>
            <p className="w-4/6 my-7">{data.description}</p>
            <div className="my-6">
              <span>Size: </span>
              {data.sizes?.map((s, i) => (
                <button
                  key={i}
                  className={`border border-black mx-2 w-12 h-6 rounded-lg ${
                    s.isChecked ? "bg-red-500" : ""
                  }`}
                  value={s.title}
                  onClick={(e) => handleStateCheck(s, "sizes")}
                >
                  {s.title}
                </button>
              ))}
            </div>
            <div className="flex my-9 h-8 place-items-center">
              <span>Color: </span>
              {data.colors?.map((c, i) => (
                <button
                  key={i}
                  className={`${c.css} ${c.isChecked ? "bg-white" : ""}`}
                  value={c.title}
                  onClick={(e) => handleStateCheck(c, "colors")}
                ></button>
              ))}
            </div>
            <div className="flex w-96 my-4 justify-between">
              <div className="flex h-12 w-32 place-items-center justify-between">
                <button
                  onClick={() => handleCount("giam")}
                  className="border border-black px-2"
                >
                  -
                </button>
                <span>{data.count}</span>
                <button
                  onClick={() => handleCount("tang")}
                  className="border border-black px-2"
                >
                  +
                </button>
              </div>
              <div className="">
                <button
                  type="submit"
                  onClick={handelAddCart}
                  className="rounded bg-black text-white px-3 py-0.5 mt-2 
                            hover:bg-red-600"
                >
                  Thêm vào giỏ hàng
                </button>
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
              <button className="w-full rounded bg-red-600 text-white py-2.5 mt-2 ">
                Mua
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Details;
