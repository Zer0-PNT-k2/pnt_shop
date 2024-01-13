import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs";
import Wrapper from "../../components/wrapper";

const Details = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const contactBreadcrumbs = [
    {
      to: "/products/all",
      title: "Sản phẩm",
    },
    {
      to: "",
      title: data.title,
    },
  ];

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <>
      <Breadcrumbs breadcrumbs={contactBreadcrumbs} />
      <Wrapper>
        <div className="my-24">
          <div>
            <img className="w-72 h-72 m-12" src={data.image} alt={data.title} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Details;
