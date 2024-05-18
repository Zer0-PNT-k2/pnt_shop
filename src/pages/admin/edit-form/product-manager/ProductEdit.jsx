import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ToastifySuccess from "../../../../components/toasttify/success/ToastifySuccess";
import ToastifyError from "../../../../components/toasttify/toasttifyError/ToastifyError";
import axios from "axios";
import { ToastContainer } from "react-toastify";

export function ProductEdit() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [dataEdit, setDataEdit] = useState({});
  const [datas, setDatas] = useState({
    categories: [],
    sizes: [],
    colors: [],
  });
  const [check, setCheck] = useState({
    category_id: dataEdit.category_id?._id,
    size_id: dataEdit.size_id?.map((s) => s._id),
    color_id: dataEdit.color_id?.map((c) => c._id),
  });

  const [objectProduct, setObjectProduct] = useState({
    title: dataEdit?.title,
    image: dataEdit?.image,
    description: dataEdit?.description,
    price: dataEdit?.price,
    quantity: dataEdit?.quantity,
    category_id: datas.categories,
    size_id: datas.sizes,
    color_id: datas.colors,
  });
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/products/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        setDatas((prev) => ({ ...prev, categories: data }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [token]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/sizes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        setDatas((prev) => ({ ...prev, sizes: data }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [token]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/colors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const data = json;
        setDatas((prev) => ({ ...prev, colors: data }));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [token]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const obj = json;
        setCheck({
          category_id: obj.category_id?._id,
          size_id: obj.size_id?.map((s) => s._id),
          color_id: obj.color_id?.map((c) => c._id),
        });
        setObjectProduct((prev) => ({
          ...prev,
          title: obj.title,
          image: obj.image,
          description: obj.description,
          price: obj.price,
          quantity: obj.quantity,
        }));
        setDataEdit(obj);
      });
  }, [params]);

  // input
  function handleInput(e) {
    setObjectProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Check box
  function handleCheck(option, id) {
    setCheck((prev) => {
      if (option !== "category_id") {
        const ischecked = prev[option].includes(id);
        if (ischecked) {
          return {
            ...prev,
            [option]: prev[option].filter((item) => item !== id),
          };
        } else {
          return {
            ...prev,
            [option]: [...prev[option], id],
          };
        }
      } else {
        return {
          ...prev,
          [option]: id,
        };
      }
    });
  }

  useEffect(() => {
    setObjectProduct((prevObjectProduct) => ({
      ...prevObjectProduct,
      category_id: check.category_id,
      size_id: check.size_id,
      color_id: check.color_id,
    }));
  }, [check]);

  function handleSelect(e) {
    setObjectProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  }

  async function onSubmitObjectProduct(e) {
    e.preventDefault();
    try {
      console.log(objectProduct);
      const product = await axios(
        `http://localhost:3001/products/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          data: objectProduct,
        }
      );

      if (product.status === 200) {
        ToastifySuccess("Update thành công!!!");
        setTimeout(() => {
          navigate("/admin/products");
        }, 2000);
      }
    } catch (error) {
      ToastifyError(error.response.data.message);
    }
  }

  return (
    <form action="" onSubmit={onSubmitObjectProduct}>
      <Grid container spacing={8}>
        <Grid item xs={5}>
          <div className="mb-6">
            <label htmlFor="title">Tên sản phẩm: </label>
            <br />
            <input
              onChange={handleInput}
              className="w-full rounded border border-black border-solid outline-none"
              type="text"
              name="title"
              id="title"
              value={dataEdit.title}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description">Mô tả: </label>
            <br />
            <textarea
              onChange={handleInput}
              type="text"
              name="description"
              id="description"
              value={dataEdit.description}
              className="w-full h-44 rounded border border-black border-solid outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price">Giá sản phẩm: </label>
            <br />
            <input
              onChange={handleInput}
              type="number"
              name="price"
              id="price"
              value={dataEdit.price}
              className="w-full rounded border border-black border-solid outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="quantity">Số lượng sản phẩm: </label>
            <br />
            <input
              onChange={handleInput}
              type="number"
              name="quantity"
              id="quantity"
              value={dataEdit.quantity}
              className="w-full rounded border border-black border-solid outline-none"
            />
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="mb-6">
            <label htmlFor="">Loại sản phẩm: </label>
            <ul>
              {datas.categories.map((category) => (
                <li key={category._id}>
                  <input
                    onChange={() => handleCheck("category_id", category._id)}
                    type="radio"
                    name="category_id"
                    id="category_id"
                    checked={check.category_id === category._id}
                  />
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <label htmlFor="image">Chọn ảnh:</label>
            <br />
            <input
              onChange={handleSelect}
              type="file"
              name="image"
              id="image"
            />
            <img
              className="object-cover h-12 w-16 mt-2"
              src={
                objectProduct.image?.name
                  ? objectProduct.image?.name
                  : `http://localhost:3001/${dataEdit?.image}`
              }
              alt=""
            />
          </div>
          <div className="mb-4">
            <label htmlFor="size">Kích cỡ: </label>
            <br />
            <div className="flex">
              {datas.sizes.map((size) => {
                return (
                  <div key={size._id}>
                    {size.name}
                    <input
                      onChange={() => handleCheck("size_id", size._id)}
                      type="checkbox"
                      name="size_id"
                      checked={check.size_id?.some((s) => s === size._id)}
                      id={size._id}
                      value={size._id}
                      className="ml-2 mr-4"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="color">Màu sắc: </label>
            <br />
            <div className="flex">
              {datas.colors.map((color) => {
                return (
                  <div key={color._id}>
                    {color.name}
                    <input
                      onChange={() => handleCheck("color_id", color._id)}
                      type="checkbox"
                      name="color_id"
                      id={color._id}
                      value={color._id}
                      checked={check.color_id?.some((s) => s === color._id)}
                      className="ml-2 mr-4"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex my-6 ">
            <div className="mr-4 text-center w-44 py-1 content-center border-black-500 border rounded-md border-solid">
              <Link to={"/admin/products"}>Cancel</Link>
            </div>
            <div className="text-center w-44 py-1 content-center hover:bg-green-600 text-green-500 hover:text-white border-green-600 border rounded-md border-solid">
              <button>Update</button>
            </div>
            <ToastContainer />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
