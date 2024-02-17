import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BannerCollection from "../banner-collection";
import Button from "../../../components/Button";
import Wrapper from "../../../components/wrapper";
import { Link } from "react-router-dom";

export default function PopularProducts() {
  return (
    <Wrapper>
      <div className="font-['Open_Sans'] text-base">
        <div className="flex justify-between pt-16 pb-6">
          <div>
            <h1 className="leading-9 text-3xl font-semibold">
              Popular products
            </h1>
          </div>
          <div>
            <Link to="/products/all">
              <Button className="hover:text-red-600 leading-9 font-semibold pr-2">
                View all products
              </Button>
            </Link>
            <FaArrowRight className="inline-flex text-red-600" />
          </div>
        </div>
        <div className="mb-24">
          <BannerCollection />
        </div>
      </div>
    </Wrapper>
  );
}
