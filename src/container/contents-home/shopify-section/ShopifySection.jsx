import React from "react";
import Slider from "react-slick";
import { shopifySection } from "../../../constants";
import Wrapper from "../../../components/wrapper";

export default function ShopifySection() {
  const settings = {
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {shopifySection.map((sB, i) => {
        return (
          <div key={i} className="text-base">
            <img
              className="relative inline-sblock"
              src={sB.img}
              alt="Electronics Store One"
            />
            <Wrapper>
              <div className="font-['Open_Sans']">
                <div className="absolute top-44">
                  <span className="text-2xl mb-6">{sB.sale}</span>
                  <h1 className="text-5xl font-semibold my-6">{sB.name}</h1>
                  {sB.title}
                  {sB.button}
                </div>
              </div>
            </Wrapper>
          </div>
        );
      })}
    </Slider>
  );
}
