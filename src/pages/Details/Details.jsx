import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Star from "../../components/star";
import Wrapper from "../../components/wrapper";
import { size, color } from "../../constants";

const Details = () => {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);
  const [dataCast, setDataCast] = useState({ ...data, size: "", color: "" });
  const params = useParams();
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

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  }, [params]);

  const handelcount = (e) => {
    if (e.target.name === "tang") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handelAddCast = () => {
    setDataCast({
      ...data,
      count: count,
    });
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      <Wrapper>
        <div className="grid grid-flow-col gap-8 my-24">
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
              <MdAttachMoney />
              <span className="">{data.price}</span>
            </div>
            <p className="w-4/6 my-7">{data.description}</p>
            <div className="my-6">
              <span>Size: </span>
              {size.map((s, i) => (
                <button
                  key={i}
                  className="border border-black mx-2 w-12 h-6 rounded-lg focus:bg-red-500 "
                  value={s.title}
                >
                  {s.title}
                </button>
              ))}
            </div>
            <div className="flex my-9 h-8 place-items-center">
              <span>Color: </span>
              {color.map((c, i) => (
                <button key={i} className={c.css} value={c.title}></button>
              ))}
            </div>
            <div className="flex w-96 my-4 justify-between">
              <div className="flex h-12 w-32 place-items-center justify-between">
                <button
                  onClick={handelcount}
                  name="giam"
                  className="border border-black px-2"
                >
                  -
                </button>
                <span>{count}</span>
                <button
                  onClick={handelcount}
                  name="tang"
                  className="border border-black px-2"
                >
                  +
                </button>
              </div>
              <div className="">
                <Link to="/order">
                  <button
                    onClick={handelAddCast}
                    className="rounded bg-black text-white px-3 py-0.5 mt-2 
                            hover:bg-red-600"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </Link>
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
