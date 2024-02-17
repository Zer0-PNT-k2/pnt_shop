import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import ProductLayout from "../../layouts/product-layout/ProductLayout";

export default function ProductsPage() {
  const pageSize = 12;
  const [query] = useSearchParams();
  const [datas, setDatas] = useState([]);
  const dataCloneRef = useRef([]);
  const [dataRender, setDataRender] = useState([]);
  const [categories, setCategories] = useState([]);
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
        setDatas(json);
        dataCloneRef.current = json;
        getProductCategories(json);
      })
      .catch((error) => console.log(error));
  }, []);
  // phân trang
  useEffect(() => {
    const totalPages = Math.ceil(datas.length / pageSize);
    setPaging((prev) => ({ ...prev, totalPages }));
  }, [datas]);
  // lấy số trang trên url
  useEffect(() => {
    setPaging((prev) => ({ ...prev, page: parseInt(query.get("page")) || 1 }));
  }, [query]);

  // phân trang
  useEffect(() => {
    const offset = (paging.page - 1) * pageSize;
    setDataRender(datas.slice(offset, offset + pageSize));
  }, [datas, paging]);

  const getProductCategories = (productData) => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) =>
        setCategories(
          json.map((c) => {
            const quantity = productData.filter((x) => x.category === c);
            return { title: c, isChecked: false, quantity: quantity.length };
          })
        )
      );
  };

  const productsBreadcrumbs = [
    {
      to: "/products",
      title: "Sản phẩm",
    },
  ];
  // sắp xếp
  const handleSort = (e) => {
    switch (e.target.value) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        setDatas((d) => {
          return [...d].sort((a, b) => a.title.localeCompare(b.title));
        });
        break;
      case "4":
        setDatas((d) => {
          return [...d].sort((a, b) => b.title.localeCompare(a.title));
        });
        break;
      case "5":
        setDatas((d) => {
          return [...d].sort((a, b) => a.price - b.price);
        });
        break;
      case "6":
        setDatas((d) => {
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
    switch (e.target.name) {
      case "Thongke":
        break;
      case "Loai":
        const category = e.target.value;
        setCategories((prev) => {
          const result = prev.map((c) =>
            c.title === category ? { ...c, isChecked: !c.isChecked } : c
          );
          const checked = result.filter((x) => x.isChecked);
          setDatas(
            dataCloneRef.current.filter((p) =>
              checked.length ? checked.find((x) => x.title === p.category) : p
            )
          );
          return result;
        });
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
    const newData = datas.filter((d, _) => {
      return d.price >= price.prevPrice && d.price <= price.nextPrice;
    });
    setDatas(newData);
  };

  const handleResetPrice = () => {
    setDatas(dataCloneRef.current);
  };

  return (
    <>
      <Breadcrumbs breadcrumbs={productsBreadcrumbs} />
      <ProductLayout
        view={query.get("view")}
        dataRender={dataRender}
        paging={paging}
        price={price}
        onSort={handleSort}
        onCheck={handleCheck}
        onPrePriceChange={handlePrePrice}
        onNextPriceChange={handleNextPrice}
        handleFilter={handleFilterPrice}
        handleReset={handleResetPrice}
        categories={categories}
      />
    </>
  );
}
