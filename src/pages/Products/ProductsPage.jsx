import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import ProductLayout from "../../layouts/product-layout/ProductLayout";

const Products = () => {
  const pageSize = 12;
  const [query] = useSearchParams();
  const [data, setData] = useState([]);
  const [dataRender, setDataRender] = useState([]);
  const [paging, setPaging] = useState({
    page: 1,
    totalPages: 0,
  });
  const [price, setPrice] = useState({
    prevPrice: 0,
    nextPrice: 150000,
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
    // return () => {
    //   setData([]);
    // };
  }, []);
  // phân trang
  useEffect(() => {
    const totalPages = Math.ceil(data.length / pageSize);
    setPaging((prev) => ({ ...prev, totalPages }));
  }, [data]);
  // lấy số trang trên url
  useEffect(() => {
    setPaging((prev) => ({ ...prev, page: parseInt(query.get("page")) || 1 }));
  }, [query]);

  // phân trang
  useEffect(() => {
    const offset = (paging.page - 1) * pageSize;
    setDataRender(data.slice(offset, offset + pageSize));
  }, [data, paging]);
  const productsBreadcrumbs = [
    {
      to: "/products",
      title: "Sản phẩm",
    },
  ];

  console.log(data)

  const handleSort = (e) => {
    switch (e.target.value) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        setData((d) => {
          return [...d].sort((a, b) => a.title.localeCompare(b.title));
        });
        break;
      case "4":
        setData((d) => {
          return [...d].sort((a, b) => b.title.localeCompare(a.title));
        });
        break;
      case "5":
        setData((d) => {
          return [...d].sort((a, b) => a.price - b.price);
        });
        break;
      case "6":
        setData((d) => {
          return [...d].sort((a, b) => b.price - a.price);
        });
        break;
      case "7":
        break;
      case "8":
        break;
      default:
        throw new Error("Invalid sort value: " + e.target.value);
    }
  };

  const handleCheck = (e) => {
    console.log(e.target.value);
    switch (e.target.name) {
      case "Availability":
        // if(e.target.name === "inStock") {
        // } else
        break;
      default:
        throw new Error("Invalid sort value: " + e.target.value);
    }
  };

  const handlePrePrice = (e) => {
    setPrice((prev) => ({ ...prev, prevPrice: Number(e.target.value) }));
  };

  const handleNextPrice = (e) => {
    setPrice((prev) => ({ ...prev, nextPrice: Number(e.target.value) }));
  };

  const handleFilterPrice = () => {
    const data2 = [...data]
    const newData = data2.filter(
      (d) => d.price >= price.prevPrice && d.price <= price.nextPrice
    );
    setDataRender(newData);
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={productsBreadcrumbs} />
      <ProductLayout
        view={query.get("view")}
        dataRender={dataRender}
        paging={paging}
        onSort={handleSort}
        onCheck={handleCheck}
        onPrePriceChange={handlePrePrice}
        onNextPriceChange={handleNextPrice}
        handleFilter={handleFilterPrice}
      />
    </>
  );
};

export default Products;
