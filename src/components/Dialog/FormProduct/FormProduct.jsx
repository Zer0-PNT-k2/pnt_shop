import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import axios from "axios";
import ToastifySuccess from "../../toasttify/success/ToastifySuccess";
import { ToastContainer } from "react-toastify";
import ToastifyError from "../../toasttify/toasttifyError/ToastifyError";

export default function FormProduct(props) {
  const { token, open, handleClose } = props;
  const [check, setCheck] = useState({
    category_id: "",
    size_id: [],
    color_id: [],
  });
  const [datas, setDatas] = useState({
    categories: [],
    sizes: [],
    colors: [],
  });
  const [objectProduct, setObjectProduct] = useState({
    title: "",
    image: {},
    description: "",
    price: 0,
    quantity: 0,
    category_id: datas.categories,
    size_id: datas.sizes,
    color_id: datas.colors,
  });

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

  function handleSelect(e) {
    setObjectProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  }

  useEffect(() => {
    setObjectProduct((prevObjectProduct) => ({
      ...prevObjectProduct,
      category_id: check.category_id,
      size_id: check.size_id,
      color_id: check.color_id,
    }));
  }, [check]);

  async function onSubmitObjectProduct(e) {
    e.preventDefault();
    try {
      const product = await axios(`http://localhost:3001/products/create`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        data: objectProduct,
      });

      if (product.status === 200) {
        ToastifySuccess("Thêm thành công!!!");
      }

      handleClose();
    } catch (error) {
      ToastifyError(error.response.data.message);
    }
    setObjectProduct({
      title: "",
      image: {},
      description: "",
      price: 0,
      quantity: 0,
      category_id: "",
      size_id: [],
      color_id: [],
    });

    setCheck({
      category_id: "",
      size_id: [],
      color_id: [],
    });
  }

  return (
    <>
      <Dialog
        open={open}
        maxWidth="xl"
        fullWidth
        xs={40}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: onSubmitObjectProduct,
        }}
      >
        <DialogTitle>Nhập thông tin sản phẩm</DialogTitle>
        <DialogContent className="flex w-full text-base">
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <div className="mb-6">
                <label htmlFor="title">Tên sản phẩm: </label>
                <br />
                <input
                  className="w-full rounded border border-black border-solid outline-none"
                  onChange={handleInput}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Nhập tên sản phẩm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="description">Mô tả: </label>
                <br />
                <textarea
                  className="w-full h-44 rounded border border-black border-solid outline-none"
                  onChange={handleInput}
                  type="text"
                  size="450"
                  name="description"
                  id="description"
                  placeholder="Mô tả sản phẩm sản phẩm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="quantity">Số lượng: </label>
                <br />
                <input
                  className="w-full rounded border border-black border-solid outline-none"
                  onChange={handleInput}
                  type="number"
                  name="quantity"
                  id="quantity"
                  placeholder="Số lượng sản phẩm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="price">Giá: </label>
                <br />
                <input
                  className="w-full rounded border border-black border-solid outline-none"
                  onChange={handleInput}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Giá sản phẩm"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="mb-6">
                <label htmlFor="image">Chọn ảnh:</label>
                <br />
                <input
                  onChange={handleSelect}
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="category">Loại sản phẩm: </label>
                <br />
                <ul className="ml-2">
                  {datas.categories.map((category) => (
                    <li key={category._id}>
                      <input
                        onChange={() =>
                          handleCheck("category_id", category._id)
                        }
                        type="radio"
                        name="category_id"
                        id="category"
                      />
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
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
                          id="size"
                          value={size._id}
                          className="ml-2 mr-4"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-6">
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
                          id="color"
                          value={color._id}
                          className="ml-2 mr-4"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </>
  );
}
