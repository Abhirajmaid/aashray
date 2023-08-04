import React from "react";
import { Icon } from "@iconify/react";

const Amenities = ({ amenities }) => {
  console.log(amenities);
  return (
    <div className=" w-full !p-6 bg-white card card-shadow dark:shadow-none flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Amenities</h1>
      <div className="w-full md:flex flex flex-wrap items-center gap-4">
        {amenities?.map((a) => {
          return (
            <div className="flex items-center gap-4">
              <div className="w-fit flex md:gap-2 gap-1 items-center">
                <Icon
                  className=" text-primary text-[35px] md:text-[40px]"
                  icon={a?.attributes?.LogoTxt}
                />
                <span className="text-md">{a?.attributes?.amenity}</span>
              </div>
              <Icon icon="mdi:divide" className="text-[30px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
