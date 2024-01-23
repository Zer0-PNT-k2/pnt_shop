import Breadcrumbs from "../../components/breadcrumbs";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const contactBreadcrumbs = [
    {
      to: "/orders",
      title: "Giỏ hàng của bạn",
    },
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
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
    </>
  );
};

export default OrdersPage;
