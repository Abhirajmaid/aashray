import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Toast } from "../../context/ToastContext";
import { Icon } from "@iconify/react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const [passVisible, setPassVisible] = useState(false);

  const navigate = useNavigate();

  const { signIn, user, googleSignIn } = UserAuth();
  const { success, error, warn } = Toast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    if (password === "" || email === "") {
      error("Please fill all field.");
    } else if (!(password.length >= 6)) {
      error("Password Must be greater than 6 character.");
    } else {
      try {
        await signIn(email, password);
        success("Login Succeessfully");
        navigate("/user-profile");
      } catch (e) {
        console.log(e.message);
        if (e.message === "Firebase: Error (auth/invalid-email).") {
          error("Invalid Email.");
        } else if (e.message === "Firebase: Error (auth/user-not-found).") {
          warn("User not found, Check your mail.");
        } else if (e.message === "Firebase: Error (auth/wrong-password).") {
          error("Wrong Password, enter correct password!");
        }
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      success("Login Succeessfully");
      navigate("/user-profile");
    }
  }, [user]);

  return (
    <div className="pt-12 md:px-[6%] px-[5%] ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative flex flex-col m-6 space-y-8 bg-white card card-shadow rounded-2xl md:flex-row md:space-y-0">
          {/* <!-- left side --> */}
          <div className="flex flex-col justify-center p-1 md:p-14">
            <span className="mb-3 md:text-4xl text-2xl font-bold">
              Welcome back
            </span>
            <span className="font-light text-gray-400 md:mb-8 mb-3">
              Welcom back! Please enter your details
            </span>
            <form onSubmit={handleSubmit}>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="text"
                  className={`${
                    status ? (email ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="py-4 relative">
                <span className="mb-2 text-md">Password</span>
                <input
                  type={passVisible ? "text" : "password"}
                  name="pass"
                  className={`${
                    status ? (password ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Icon
                  className=" absolute right-3 top-[55%] cursor-pointer"
                  icon={passVisible ? "bi:eye-fill" : "bi:eye-slash-fill"}
                  onClick={() => setPassVisible((passVisible) => !passVisible)}
                />
              </div>
              <div className=" md:flex-row flex-col flex md:items-baseline gap-2 md:gap-0 items-center justify-between w-full py-4">
                <div className="mr-0 md:mr-24">
                  <input
                    type="checkbox"
                    name="ch"
                    id="ch"
                    className="mr-2 input-check"
                  />
                  <span className=" text-md ">Remember for 30 days</span>
                </div>
                <span className="font-bold text-md cursor-pointer">
                  Forgot password
                </span>
              </div>
              <p className=" text-red-500 text-sm py-4">{error}</p>
              <button
                onClick={handleSubmit}
                className="!p-2  mb-6 w-full btn btn-primary !shadow-none md:w-full"
              >
                Sign in
              </button>
            </form>
            <button
              onClick={handleGoogleSignIn}
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 bg-slate-100 dark:bg-transparent hover:border-black dark:hover:bg-black hover:bg-black hover:text-white"
            >
              <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
              Sign in with Google
            </button>
            <div className="text-center text-sm md:text-[16px] text-gray-400">
              Dont'have an account?
              <Link to="/signup">
                <span className="font-bold dark:text-inherit text-black cursor-pointer">
                  {" "}
                  Sign up for free
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

export default Signin;
