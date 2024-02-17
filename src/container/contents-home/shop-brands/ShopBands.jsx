import React from "react";
import { shopBands } from "../../../constants";
import Button from "../../../components/Button";
import Wrapper from "../../../components/wrapper";

export default function ShopBands() {
  return (
    <Wrapper>
      <div className="flex justify-between pt-16 pb-6">
        <div>
          <h1 className="leading-9 text-3xl font-semibold">Shop by brands</h1>
        </div>
      </div>
      <div className="flex grid grid-cols-6 gap-6 mb-16">
        {shopBands.map((bands, i) => {
          return (
            <Button key={i} className="rounded-full shadow-lg">
              <img className="w-auto h-16" src={bands.img} alt={bands.title} />
            </Button>
          );
        })}
      </div>
    </Wrapper>
  );
}
