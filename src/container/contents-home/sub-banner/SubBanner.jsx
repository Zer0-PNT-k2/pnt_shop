import React from "react";
import { subBanners } from "../../../constants";
import Wrapper from "../../../components/wrapper";

export default function SubBanner() {
  return (
    <Wrapper>
      <div className="flex gap-9 mb-20 font-['Open_Sans'] text-base">
        {subBanners.map((subBanner, i) => {
          return (
            <div className="relative" key={i}>
              <img className="" src={subBanner.img} alt={subBanner.title} />
              <div className="w-full absolute top-24 text-center">
                <span>{subBanner.title}</span>
                <h1 className="my-4 text-3xl font-semibold">
                  {subBanner.name}
                </h1>
                {Math.ceil(subBanner.price)}
                {subBanner.button}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
