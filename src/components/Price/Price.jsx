import React from "react";

export default function Price(props) {
  // const USDollar = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <div className="flex justify-center items-center text-red-600 font-semibold text-lg">
      <span>{VND.format(props.price * 23000)}</span>
    </div>
  );
}
