import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../context/ToastContext";
import { PostDataToApi } from "../../utils/api";
import { Icon } from "@iconify/react";

const initialUser = {
  name: "",
  email: "",
  city: "",
  mobile: "",
  password: "",
  profile: "",
};
const Signup = () => {
  const [aashrayUser, setAashrayUser] = useState(initialUser);
  const { name, email, city, mobile, password } = aashrayUser;

  const [status, setStatus] = useState(false);

  const [passVisible, setPassVisible] = useState(false);

  const { createUser } = UserAuth();
  const { success, error, warn } = Toast();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAashrayUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const storeUser = () => {
    try {
      PostDataToApi("/api/aashray-users", {
        name: name,
        email: email,
        city: city,
        mobile: mobile,
        password: password,
      });
      success("Signed-Up Successfully!");
      navigate("/user-profile");
    } catch (e) {
      warn(e);
      error("Somthing went wrong!");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    if (
      password === "" ||
      email === "" ||
      name === "" ||
      mobile === "" ||
      city === ""
    ) {
      error("Please fill all the fields!");
    } else if (!(mobile.length === 10 || mobile.startsWith("0"))) {
      error("Wrong mobile no.");
    } else if (!(password.length >= 6)) {
      error("Password should be at leat 6 character!");
    } else {
      try {
        await createUser(email, password);
        storeUser();
      } catch (e) {
        if (e.message === "Firebase: Error (auth/invalid-email).") {
          error("Invalid Email.");
        } else if (
          e.message === "Firebase: Error (auth/email-already-in-use)."
        ) {
          warn("User Exist");
        }
      }
    }
  };

  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 relative">
                <span className="mb-2 text-md">Password</span>
                <input
                  type={passVisible ? "text" : "password"}
                  name="password"
                  autocomplete="new-password"
                  className={`${
                    status ? (password ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
                <Icon
                  className=" absolute right-3 top-[55%] cursor-pointer"
                  icon={passVisible ? "bi:eye-fill" : "bi:eye-slash-fill"}
                  onClick={() => setPassVisible((passVisible) => !passVisible)}
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">City</span>
                <input
                  type="text"
                  name="city"
                  className={`${
                    status ? (city ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
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
                  onChange={handleChange}
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
    </div>
  );
};

export default Signup;
