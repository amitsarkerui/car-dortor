import React, { useContext } from "react";
import loginImage from "../../assets/images/login/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AuthContextProvider);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    register(email, password)
      .then((result) => {
        const registeredUser = result.user;
        updateProfile(registeredUser, {
          displayName: name,
        });
        console.log(registeredUser);
        Swal.fire({
          title: "Registration Successfully !!!",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Login Now",
        });
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-2 my-10">
      <img src={loginImage} alt="" />
      <div className="border p-10 rounded-lg">
        <h1 className="text-3xl font-bold my-6 text-center">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="form-control mb-6">
            <label className="label mb-2">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your email"
              className="input input-bordered"
            />
          </div>
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
            value="Register"
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
            Already have account?
            <Link className="btn btn-link" to={"/login"}>
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
