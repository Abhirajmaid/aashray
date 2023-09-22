import React from "react";

const IdentityProof = () => {
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center p-1 md:p-14 md:pt-2 md:w-[100%] md:max-w-[650px]">
          <span className="mb-3 md:text-4xl text-xl font-bold">
            Submit your Identity Proof!
          </span>
          <span className="font-light text-gray-400 mb-2 text-md">
            Valid identity proof - College ID / Aadhar card
          </span>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between w-full py-2 gap-3">
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Name</span>
                <input
                  type="file"
                  //   placeholder={`${aashrayUser[0]?.attributes?.name}`}
                  //   value={aashrayUser[0]?.attributes?.name}
                  className={` w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  name="name"
                  readOnly
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="!p-2  mb-6 w-full btn btn-primary !shadow-none md:w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IdentityProof;
