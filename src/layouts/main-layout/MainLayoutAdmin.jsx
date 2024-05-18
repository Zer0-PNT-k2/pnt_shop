import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../components/footer";
import HeaderDashboard from "../../components/headers/dashboard";
import Navigate from "../../components/navigate";
import { Grid } from "@mui/material";

export default function MainLayoutAdmin() {
  return (
    <div className="text-base">
      <ScrollToTop
        smooth
        className="animate-bounce !w-12 !h-12 pl-2.5 !bg-red-400 !rounded-full"
      />
      <HeaderDashboard />
      <div className="mb-10">
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Navigate />
          </Grid>
          <Grid item xs={10}>
            <div className="max-w-full min-h-full overflow-x-hidden">
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
