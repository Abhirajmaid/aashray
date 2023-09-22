import React from "react";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Icon } from "@iconify/react";
import { MdBalcony, MdOutlineDoorSliding } from "react-icons/md";
import { Link } from "react-router-dom";

const RoomiesSinglesCard = ({
  name,
  email,
  mobile,
  college,
  age,
  studyBackground,
  branch,
  degree,
  passoutyear,
  hobbies,
  interest,
}) => {
  return (
    <div className="flex flex-col basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
      <div className="group !opacity-100 overflow-hidden relative">
        <img
          src="images/profile/ToyFaces_Colored_BG_29.jpg"
          alt={name}
          className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
        />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <Icon icon="bi:quote" />
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <CardLabels college={college} studyBackground={studyBackground} />
      <div className="p-3">
        <div
          //   onClick={link}
          className="group-hover:text-primary transition-a cursor-pointer"
        >
          <h1 className="text-xl font-bold capitalize">
            {name}, {age}
          </h1>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-[1px] ">
            {/* <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div> */}
            <p className=" text-[15px] ">{hobbies}</p>
          </div>
          <div className="flex-align-center gap-x-[1px]">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              {/* <BiTab /> */}
            </div>
            {/* <p className=" text-[15px] ">{number_of_bathrooms} Bathrooms</p> */}
          </div>
          <div className="flex-align-center gap-x-[1px] ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              {/* <BiMapAlt />  */}
            </div>
            <p className=" text-[15px] ">
              {/* {dimensions ? `${dimensions}sq ft` : `600sq ft`} */}
            </p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <a
            href={`https://api.whatsapp.com/send?phone=91${mobile}&text=hello`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-secondary">Chat {name}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomiesSinglesCard;
