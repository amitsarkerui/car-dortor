import React, { useContext } from "react";
import loginImage from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logIn } = useContext(AuthContextProvider);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        Swal.fire("Any fool can use a computer");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          text: "Please check and try again",
          icon: "error",
          confirmButtonText: "Okey !",
        });
      });
  };
  return (
    <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 my-10">
      <img src={loginImage} alt="" />
      <div className="border p-10 rounded-lg">
        <h1 className="text-3xl font-bold my-6 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-6">
            <label className="label mb-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-6">
            <label className="label mb-2">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered"
            />
          </div>
          <input
            className=" my-5 btn btn-block border-none bg-[#FF3811]"
            type="submit"
            value="Login"
          />
          <hr className="my-6" />
          <p className="my-6 text-center font-semibold text-gray-500">
            Or continue with
          </p>
          <span className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <button className="btn bg-[#4285F4] border-none">
              Continue with Google
            </button>
            <button className="btn">Continue with Github</button>
          </span>
          <div className="text-center mx-auto mt-10">
            Have no account?
            <Link className="btn btn-link" to={"/register"}>
              Create One
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
