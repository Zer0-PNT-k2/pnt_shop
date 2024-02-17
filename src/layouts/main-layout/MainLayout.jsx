import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import HeaderTop from "../../components/headers/header";
import Navigation from "../../components/headers/navigation";
import Footer from "../../components/footer";

export default function MainLayout() {
  return (
    <div>
      <ScrollToTop
        smooth
        className="animate-bounce !w-12 !h-12 pl-2.5 !bg-red-400 !rounded-full"
      />
      <HeaderTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
