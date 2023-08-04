import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-10 pb-16 mt-[5rem] md:mt-[10rem]">
      <div className="gap-10 flex-col md:flex-row sm:flex-align-center ">
        <div className=" flex flex-1 flex-col basis-[20rem] gap-2">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">we specialize in quality home renovations</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum
            earum saepe quibusdam, temporibus aut sapiente, ea alias libero,
            ipsam perferendis. Consectetur maiores, dicta, earum eaque facilis
            adipisci dignissimos optio fuga officia itaque quo impedit.
          </p>
          <div className="mt-4 flex flex-col gap-y-4 ">
            <div className="flex-align-center gap-x-2">
              <div className="sm:icon-box h-7 w-7 flex-align-center rounded-full justify-center text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Outstanding Property</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="sm:icon-box h-7 w-7 flex-align-center rounded-full justify-center text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Professional and experienced human resource</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="sm:icon-box h-7 w-7 flex-align-center rounded-full justify-center text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Provide the best services for users</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="sm:icon-box h-7 w-7 flex-align-center rounded-full justify-center text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Modern city locations and exceptional lifestyle</p>
            </div>
            <Link to={"/about-us"}>
              <button className="mt-[30px] btn btn-primary">read more</button>
            </Link>
          </div>
        </div>
        <div className="flex-1 basis-[20rem] hidden sm:block ">
          <div className="relative">
            <div className=" border-solid border-[10px] dark:border-hover-color-dark border-slate-100  rounded-t-full h-full overflow-hidden">
              <img
                src="/images/property (5).jpg"
                alt=""
                className="w-full sm:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20">
              <div className="p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>Discover your perfect home away from home.</h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiUsers />
                </div>
              </div>
              <div className="p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                <h1>
                  Working with the symbol and reputation of trustworthy trait
                </h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
