import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      // style={{
      //   background: "url('/images/hero-bg-pattern.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "contain",
      // }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <h1 className="text-4xl font-bold capitalize md:text-6xl">
          Discover Your
          <br /> Ideal Living Space!
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary hidden sm:block">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nulla
            unde exercitationem! Recusandae error quaerat sapiente
          </p>
        </div>
        <Link to="/premium">
          <button className="mt-7 mb-5 btn btn-primary hover:scale-110">
            get Premium
          </button>
        </Link>
        <div className="mt-6 text-center flex-align-center gap-x-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              12k <span className="text-2xl sm:text-4xl text-primary">+</span>
            </h1>
            <p className="">Requested Projects</p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              15k <span className="text-2xl sm:text-4xl text-primary">+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              100 <span className="text-2xl sm:text-4xl text-primary">+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-[20rem] max-h-[750px] border-solid border-[10px] dark:border-hover-color-dark border-slate-100 rounded-t-full overflow-hidden">
        <img src="/images/hero-image.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
