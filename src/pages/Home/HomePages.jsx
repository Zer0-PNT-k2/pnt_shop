import SiteBar from "../../container/contents-home/site-bar";
import PopularProducts from "../../container/contents-home/popular-products";
import SubBanner from "../../container/contents-home/sub-banner";
import TrendingProducts from "../../container/contents-home/trending-products";
import CustomProduct from "../../container/contents-home/custom-product";
import ShopBands from "../../container/contents-home/shop-brands";
import ContactInfo from "../../container/contents-home/contact-info/index";


const HomePages = () => {
  return (
    <>
      <SiteBar />
      <PopularProducts />
      <SubBanner />
      <TrendingProducts />
      <CustomProduct />
      <ShopBands />
      <ContactInfo />
    </>
  );
};

export default HomePages;
