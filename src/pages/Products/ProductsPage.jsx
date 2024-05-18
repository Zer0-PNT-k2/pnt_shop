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
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [paging, setPaging] = useState({
    perPage: 1,
    totalPages: 0,
  });
  const [price, setPrice] = useState({
    prevPrice: 0,
    nextPrice: 150000,
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3001/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setDatas(json);
        dataCloneRef.current = json;
        getProductCategories(json);
        getProductSizes(json);
        getProductColors(json);
      })
      .catch((error) => console.log(error));
  }, []);

  // tính tổng số trang
  useEffect(() => {
    const totalPages = Math.ceil(datas.length / pageSize);
    setPaging((prev) => ({ ...prev, totalPages }));
  }, [datas]);
  // lấy số trang trên url
  useEffect(() => {
    setPaging((prev) => ({
      ...prev,
      perPage: parseInt(query.get("page")) || 1,
    }));
  }, [query]);

  // phân trang
  useEffect(() => {
    const offset = (paging.perPage - 1) * pageSize;
    setDataRender(datas.slice(offset, offset + pageSize));
  }, [datas, paging]);

  const getProductCategories = (productData) => {
    fetch("http://localhost:3001/products/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) =>
        setCategories(
          json.map((c) => {
            const quantity = productData.filter((element) => {
              return element.category_id.name === c.name;
            });
            return { ...c, quantity: quantity.length };
          })
        )
      );
  };

  const getProductSizes = (productData) => {
    fetch("http://localhost:3001/products/sizes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) =>
        setSizes(
          json.map((c) => {
            const quantity = productData.filter((element) =>
              element.size_id.some((x) => x.name === c.name)
            );
            return { ...c, quantity: quantity.length };
          })
        )
      );
  };

  const getProductColors = (productData) => {
    fetch("http://localhost:3001/products/colors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) =>
        setColors(
          json.map((c) => {
            const quantity = productData.filter((element) =>
              element.color_id.some((x) => x.name === c.name)
            );
            return { ...c, quantity: quantity.length };
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
        setDatas((d) => {
          return [...d].sort((a, b) => a.title.localeCompare(b.title));
        });
        break;
      case "3":
        setDatas((d) => {
          return [...d].sort((a, b) => b.title.localeCompare(a.title));
        });
        break;
      case "4":
        setDatas((d) => {
          return [...d].sort((a, b) => a.price - b.price);
        });
        break;
      case "5":
        setDatas((d) => {
          return [...d].sort((a, b) => b.price - a.price);
        });
        break;
      default:
        throw new Error("Invalid sort value: " + e.target.value);
    }
  };

  // Handle isCheck loại hàng
  const handleCheck = (e) => {
    switch (e.target.name) {
      case "Thongke":
        break;
      case "Loai":
        const category = e.target.value;
        setCategories((prev) => {
          const result = prev.map((c) =>
            c.name === category ? { ...c, isChecked: !c.isChecked } : c
          );

          const checked = result.filter((x) => x.isChecked);
          setDatas(
            dataCloneRef.current.filter((data) =>
              checked.length
                ? checked.find(
                    (element) => data.category_id?.name === element.name
                  )
                : data
            )
          );
          return result;
        });
        break;
      case "Size":
        const size = e.target.value;
        setSizes((prev) => {
          const result = prev.map((c) =>
            c.name === size ? { ...c, isChecked: !c.isChecked } : c
          );
          const checked = result.filter((x) => x.isChecked);
          setDatas(
            dataCloneRef.current.filter((data) =>
              checked.length
                ? checked.find((element) =>
                    data.size_id.filter((x) => x.name === element.name).join("")
                  )
                : data
            )
          );
          return result;
        });
        break;
      case "Color":
        const color = e.target.value;
        setColors((prev) => {
          const result = prev.map((c) =>
            c.name === color ? { ...c, isChecked: !c.isChecked } : c
          );
          const checked = result.filter((x) => x.isChecked);
          setDatas(
            dataCloneRef.current.filter((data) =>
              checked.length
                ? checked.find((element) =>
                    data.color_id
                      .filter((x) => x.name === element.name)
                      .join("")
                  )
                : data
            )
          );
          return result;
        });
        break;
      default:
        throw new Error("Invalid sort value: " + e.target.value);
    }
  };

  // Handle count
  const handlePrePrice = (e) => {
    setPrice((prev) =>
      e.target.value ? { ...prev, prevPrice: e.target.value } : { ...prev }
    );
  };

  const handleNextPrice = (e) => {
    setPrice((prev) =>
      e.target.value ? { ...prev, nextPrice: e.target.value } : { ...prev }
    );
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
        sizes={sizes}
        colors={colors}
      />
    </>
  );
}
