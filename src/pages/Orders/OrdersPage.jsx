import { useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

const OrdersPage = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("dataCart") || "[]"))
  const contactBreadcrumbs = [
    {
      to: "/orders",
      title: "Giỏ hàng của bạn",
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      {
        data.length ? (
          data.map((c, i) => {
            return (
              <Wrapper key={i}>
                <table className="max-w-full text-center font-['Open_Sans'] table-fixed text-base mb-12">
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
                        <div className="flex w-96 mx-20">
                          <div className="w-20 h-20">
                            <img
                              // className="w-20 h-20"
                              src={c.image} alt={c.title} />
                          </div>
                          <div>
                            <span>{c.title}</span>
                            <span></span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="w-48 flex justify-center items-center text-xl"
                        >
                          <MdAttachMoney />
                          <span>{c.price}</span>
                        </div>
                      </td>
                      <td>
                        <div className="w-48">
                          <span>{c.count}</span>
                        </div>
                      </td>
                      <td>
                        <div
                          className="w-48 justify-center flex items-center text-xl"
                        >
                          <MdAttachMoney />
                          <span>{c.price}</span>
                        </div>
                      </td>
                      <td>
                        <div className="w-48">
                          <button className="hover:text-red-600">
                            <TiDeleteOutline className="w-12 h-12" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Wrapper>
            )
          })
        ) : (
          <div className="text-base text-center">
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
        )
      }
    </>
  );
};

export default OrdersPage;
