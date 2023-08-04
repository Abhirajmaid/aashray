import React from "react";

const OwnerDetails = () => {
  return (
    <div className=" w-full !bg-white card card-shadow flex flex-col gap-6">
      <h1 className="text-xl font-bold dark:text-slate-900">Contact Seller</h1>
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
  );
};

export default OwnerDetails;
