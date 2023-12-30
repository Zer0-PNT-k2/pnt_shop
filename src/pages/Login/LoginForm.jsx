import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from '../../components/button';
import Input from '../../components/input';

// import alias in

const LoginForm = () => {
  return (
    <>
      <div className="mb-6">
        <b className="text-lg">Sign in</b>
        <br />
        <p className="opacity-50">to continue to PNT-SHOP</p>
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="username-login">
          <FaRegUser className="inline-flex" /> <b>Username</b>
        </label>
        <br />
        <Input
          className="w-full pl-3 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="username-login"
          type="text"
          autoComplete="new-username"
          placeholder="Username"
        />
      </div>
      <div className="mb-6">
        <label className="inline-flex items-center" htmlFor="password-login">
          <RiLockPasswordFill className="inline-flex" /> <b>Password</b>
        </label>
        <br />
        <Input
          className="w-full pl-3 outline-none border-solid border-2 border-b-blue-500 rounded-xl"
          id="password-login"
          autoComplete="new-password"
          type="password"
          placeholder="Password"
        />
      </div>
      <Link to="/">
        <Button
          type="submit"
          className="py-1 w-full bg-blue-500 text-white rounded-xl"
        >
          Login
        </Button>
      </Link>

      <span>
        No account?
        <Button className="px-2 py-6 text-blue-500">
          <Link to="/auth/register">Sign up</Link>
        </Button>
      </span>
    </>
  );
};

export default LoginForm;
