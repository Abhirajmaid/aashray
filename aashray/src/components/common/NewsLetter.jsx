import { FiArrowRight } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <div className=" w-full flex justify-center ">
      <div className="flex flex-wrap justify-center w-fit sm:px-20 -mt-24 bg-primary h-fit sm:h-[250px] rounded-xl py-4 px-4 text-slate-100">
        <div className="flex-1 basis-[16rem] md:basis-[20rem] mt-3 sm:mt-10">
          <div className="text-center sm:text-center ">
            <h1 className="text-xl sm:text-2xl font-bold capitalize">
              subscribe to our newsletter
            </h1>
            <p className=" text-[12px] sm:text-[16px] ">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
          </div>
          <div className="mt-3">
            <div className="justify-center flex-align-center gap-x-2 sm:justify-center ">
              <input
                type="text"
                className="px-4 py-1 border-none rounded-md outline-none"
                placeholder="Email address..."
              />
              <button className="p-2 rounded-md btn-secondary">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
