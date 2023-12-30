import HeaderTop from "../../components/headers/header-top";
import HeaderBottom from "../../components/headers/header-bottom";
import SiteBar from "../../container/contents-home/site-bar";
import PopularProducts from "../../container/contents-home/popular-products";
import SubBanner from "../../container/contents-home/sub-banner";
import TrendingProducts from "../../container/contents-home/trending-products";
import CustomProduct from "../../container/contents-home/custom-product";
import ShopBands from "../../container/contents-home/shop-brands";
import ContactInfo from "../../container/contents-home/contact-info/index";
import Footer from "../../components/footer";
import ScrollToTop from "react-scroll-to-top";

const HomePages = () => {
  return (
    <div>
      <ScrollToTop smooth className="animate-bounce !bg-red-600" />
      <HeaderTop />
      <HeaderBottom />
      <SiteBar />
      <PopularProducts />
      <SubBanner />
      <TrendingProducts />
      <CustomProduct />
      <ShopBands />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomePages;
