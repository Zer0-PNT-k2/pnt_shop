import { createContext, useEffect, useState } from "react";

const Carts = createContext();

const CartContext = ({ children }) => {
  const [count, setCount] = useState(0);

  const object = { count, setCount };

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("dataCart") || "[]");
    const number = carts.length;
    setCount(number);
  }, []);

  return <Carts.Provider value={object}>{children}</Carts.Provider>;
};

export { CartContext, Carts };
