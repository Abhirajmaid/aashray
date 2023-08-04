import React from "react";
import { PremiumBox } from "../components/premium";
import { Testimonial } from "../components/home";

const Premium = () => {
  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      <h1 className="text-4xl text-center mb-11 mt-11">AASHRAY PREMIUM</h1>
      <PremiumBox />
      <div className="mt-8">
        <Testimonial />
      </div>
    </div>
  );
};

export default Premium;
