import React from "react";
import ContactInfo from "../../container/contents-home/contact-info/index";
import CustomProduct from "../../container/contents-home/custom-product";
import PopularProducts from "../../container/contents-home/popular-products";
import ShopBands from "../../container/contents-home/shop-brands";
import ShopifySection from "../../container/contents-home/shopify-section";
import SubBanner from "../../container/contents-home/sub-banner";
import TrendingProducts from "../../container/contents-home/trending-products";

export default function HomePage() {
  return (
    <>
      <ShopifySection />
      <PopularProducts />
      <SubBanner />
      <TrendingProducts />
      <CustomProduct />
      <ShopBands />
      <ContactInfo />
    </>
  );
}
