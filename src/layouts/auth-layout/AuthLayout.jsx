import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <form
      action=""
      className="flex bg-slate-100 h-screen items-center justify-center"
    >
      <div className="w-96 h-auto p-8 bg-white rounded-2xl">
        <div className="flex mb-6">
          <img
            className="w-16 h-16 rounded-full"
            alt="LOGO_SHOP"
            src="/images/LogoTS.png"
          />
          <span className="flex mx-4 items-center">PNT-SHOP</span>
        </div>
        <Outlet />
      </div>
    </form>
  );
};

export default AuthLayout;
