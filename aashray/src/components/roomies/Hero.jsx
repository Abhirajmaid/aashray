import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[500px] overflow-hidden rounded-lg relative flex items-center justify-center flex-col ">
        <div className="w-full h-auto absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-10"></div>
        <img
          className="w-full md:object-contain object-fill bg-bottom  absolute -top-20 left-0 align-middle"
          src="/images/aa_hero.png"
          alt=""
        />
        <div className="absolute z-40 flex justify-center flex-col items-center gap-6">
          <h3 className="text-3xl font-bold capitalize md:text-5xl text-center">
            Find Your Vibe with Aashray Roomies!
          </h3>
          <div className="flex gap-5">
            <Link to="/room-mates" className="!opacity-100">
              <button className="btn btn-primary">Find roommates</button>
            </Link>
            <Link to="/roomies-register" className="!opacity-100">
              <button className="btn btn-primary">Register your Flat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
