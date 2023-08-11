import React from "react";

import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const OwnerDetails = () => {
  const { user } = UserAuth();

  return (
    <>
      {user ? (
        <div className=" w-full !bg-white card card-shadow flex flex-col gap-6">
          <h1 className="text-xl font-bold dark:text-slate-900">
            Contact Seller
          </h1>
          <div className="flex">
            <div className="bg-slate-400 rounded-[50%] overflow-hidden">
              <img
                src="https://i.pinimg.com/564x/74/d7/b0/74d7b05c3476e062ca7c26452ffb22cb.jpg"
                alt=""
                className=" w-[100px]"
              />
            </div>
            <div>
              <h3></h3>
              <span></span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <button className="w-full !shadow-none btn btn-primary md:w-[40%]">
              Call
            </button>
            <button className="w-full !shadow-none btn btn-primary md:w-[50%]">
              Whatsapp
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className=" w-full !bg-white card card-shadow flex flex-col gap-6 relative">
            <h1 className="text-xl font-bold dark:text-slate-900">
              Contact Seller
            </h1>
            <div className="flex">
              <div className="bg-slate-400 rounded-[50%] overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/74/d7/b0/74d7b05c3476e062ca7c26452ffb22cb.jpg"
                  alt=""
                  className=" w-[100px]"
                />
              </div>
              <div>
                <h3></h3>
                <span></span>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <button className="w-full !shadow-none btn btn-primary md:w-[40%]">
                Call
              </button>
              <button className="w-full !shadow-none btn btn-primary md:w-[50%]">
                Whatsapp
              </button>
            </div>
            <div className="w-full h-full top-0 left-0 border-none card card-shadow flex-col gap-6 flex-center-center absolute !bg-[#ffffff] !bg-opacity-30 !backdrop-blur-md z-50">
              <h1 className=" text-dark font-bold ">
                CHECK OWNERS/LISTERS DETAILS
              </h1>
              <p className="text-dark">Singup first to see details</p>
              <Link to="/signup" className="!w-full">
                <button className="w-full btn btn-primary !opacity-100 ">
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OwnerDetails;
