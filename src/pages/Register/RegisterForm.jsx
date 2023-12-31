import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/input";

const RegisterForm = () => {
  return (
    <>
      <span>
        Already have an account?
        <Button className="px-2 py-6 text-blue-500">
          <Link to="/auth/login">Sign in</Link>
        </Button>
      </span>
      <div className="mb-6">
        <label
          className="inline-flex items-center"
          htmlFor="username-resgister"
        >
          <CiUser className="inline-flex" /> <b>Username</b>
        </label>
        <br />
        <Input
          className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="username-resgister"
          type="text"
          autoComplete="new-username"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label
          className="inline-flex items-center"
          htmlFor="password-resgister"
        >
          <RiLockPasswordFill className="inline-flex" /> <b>Password</b>
        </label>
        <br />
        <input
          className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="password-resgister"
          type="password"
          autoComplete="new-password"
          placeholder="Password"
        />
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="email-resgister">
          <RiLockPasswordFill className="inline-flex" /> <b>Email</b>
        </label>
        <br />
        <input
          className="w-full pl-2 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="email-resgister"
          type="email"
          placeholder="Email"
        />
      </div>
      <Button
        type="submit"
        className="py-1 w-full bg-blue-500 text-white rounded-xl"
      >
        Đăng kí
      </Button>
      <Link to="/">
        <span className="block text-end mt-6">
          Quay lại cửa hàng
        </span>
      </Link>
    </>
  );
};

export default RegisterForm;
