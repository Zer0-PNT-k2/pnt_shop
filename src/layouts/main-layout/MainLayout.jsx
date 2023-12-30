import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import HeaderTop from "../../components/headers/header-top";
import HeaderBottom from "../../components/headers/header-bottom";
import Footer from "../../components/footer";


const MainLayout = () => {
  return (
    <div>
      <ScrollToTop smooth className="animate-bounce !bg-red-600" />
      <HeaderTop />
      <HeaderBottom />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
