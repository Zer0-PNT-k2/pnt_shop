import { createContext, useEffect, useState } from "react";

const Carts = createContext();

const CartContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [dataCart] = useState(
    JSON.parse(localStorage.getItem("dataCart") || "[]")
  );
  // const token = localStorage.getItem("token");
  const object = { count, setCount };

  useEffect(() => {
    //   fetch("http://localhost:3001/carts", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${token}`
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((json) => {
    //       const productDetail = json;
    //       setDataCart(productDetail);
    //     })
    //     .catch((error) => console.log(error));
    //   const number = dataCart.length;
    //   setCount(number);
    setCount(dataCart.length);
  }, [dataCart]);

  return <Carts.Provider value={object}>{children}</Carts.Provider>;
};

export { CartContext, Carts };
