import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Toast } from "../../context/ToastContext";

const RegForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const [status, setStatus] = useState(false);

  const { createUser, googleSignIn, user } = UserAuth();
  const { success, error, warn } = Toast();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-6 space-y-8 bg-white card card-shadow rounded-2xl md:flex-row md:space-y-0">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-1 md:p-14 md:pt-2">
          <span className="mb-3 md:text-4xl text-xl font-bold">
            Create Account With Us!
          </span>
          <span className="font-light text-gray-400 mb-2 text-md">
            Hi! Please enter your details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <span className="mb-2 text-md">Name</span>
              <input
                type="text"
                className={`${
                  status ? (name ? "" : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="py-4  ">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className={`${
                  status ? (email ? " " : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                className={`${
                  status ? (password ? " " : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Mobile No.</span>
              <input
                type="number"
                name="mobile"
                className={`${
                  status ? (mobile ? " " : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-0 md:mr-24">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  className="mr-2 input-check"
                />
                <span className="text-md ">Remember for 30 days</span>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="!p-2  mb-6 w-full btn btn-primary !shadow-none md:w-full"
            >
              Sign UP
            </button>
          </form>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 bg-slate-100 dark:bg-transparent hover:border-black dark:hover:bg-black hover:bg-black hover:text-white">
            <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Signup with Google
          </button>
          <div className="text-center text-gray-400">
            Have an account?
            <Link to="/signin">
              <span className="font-bold dark:text-inherit text-black cursor-pointer">
                {" "}
                Sign In
              </span>
            </Link>
          </div>
        </div>
        {/* <!-- right side --> */}
        <div className="relative">
          <img
            src="/images/signup.jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* <!-- text on image  --> */}
          <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              We've been uesing Untitle to kick"
              <br />
              start every new project and can't <br />
              imagine working without it."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
