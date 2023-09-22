import React from "react";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";
import { BiBed, BiTab } from "react-icons/bi";
import { Icon } from "@iconify/react";
import { MdBalcony, MdOutlineDoorSliding } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RoomieFlatCard = ({
  name,
  email,
  mobile,
  location,
  society,
  landmark,
  city,
  locality,
  bedrooms,
  bathrooms,
  id,
  balcony,
  furnitureStatus,
  totalRent,
  rentperson,
  depositeperson,
  currentFlatmates,
  floorNo,
  distance,
}) => {
  const navigate = useNavigate();

  const link = () => {
    navigate(`/roomie-flats/${id}`, { replace: true });
  };

  return (
    <div className="relative h-[300px] grid grid-cols-1 gap-3 mt-3 overflow-hidden border card card-shadow rounded-lg sm:grid-cols-3 md:grid-cols-4 dark:border-card-dark group">
      <div className="sm:col-span-1">
        <div className="group !opacity-100 overflow-hidden relative h-full">
          <img
            src={"images/property (3).jpg "}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-125 transition-a rounded-lg"
          />
          <CardHoverIcons slug={id} />
        </div>
        <CardLabels distance={distance} />
      </div>
      <div className="sm:col-span-2 md:col-span-3">
        <div className="p-3">
          <div className="flex items-center gap-5">
            <div
              onClick={link}
              className="group-hover:text-primary transition-a cursor-pointer "
            >
              <h1 className="text-2xl font-bold capitalize tracking-wider">{`${bedrooms} bhk Flat in ${locality}`}</h1>
            </div>
            <Icon
              icon="mi:location"
              width="35"
              className=" text-primary mb-1 cursor-pointer"
            />
          </div>
          <div className="flex-align-center flex-wrap md:flex gap-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered mt-3">
            <div className="flex-align-center gap-x-2 ">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiBed />
              </div>
              <p className=" text-base ">{bedrooms} Bhk</p>
            </div>
            <Icon
              icon="fluent:divider-tall-24-regular"
              style={{ fontSize: "20px" }}
            />
            <div className="flex-align-center gap-x-2 ">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <BiTab />
              </div>
              <p className=" text-base ">{bathrooms} Baths</p>
            </div>
            <Icon
              icon="fluent:divider-tall-24-regular"
              style={{ fontSize: "20px" }}
            />
            <div className="flex-align-center gap-x-2 ">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <MdBalcony />
              </div>
              <p className=" text-base ">{balcony} Balcony</p>
            </div>
            <Icon
              icon="fluent:divider-tall-24-regular"
              style={{ fontSize: "20px" }}
            />
            <div className="flex-align-center gap-x-2 ">
              <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
                <MdOutlineDoorSliding />
              </div>
              <p className=" text-base ">{furnitureStatus}</p>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-4">
            <div className="flex gap-6">
              <p className="text-lg font-bold tracking-wider">
                Total Rent: ₹{totalRent}
              </p>
              <p className="text-lg font-bold tracking-wider">
                Rent/person: ₹{rentperson}
              </p>
              <p className="text-lg font-bold tracking-wider">
                Deposite/person: ₹{depositeperson}
              </p>
            </div>
            <div className="flex gap-6">
              <p className="text-lg font-bold tracking-wider">
                Floor No.: {floorNo}
              </p>
              <p className="text-lg font-bold tracking-wider">
                Current no. of Flatmates: {currentFlatmates}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={`https://api.whatsapp.com/send?phone=91${mobile}&text=hello`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-secondary">Chat with {name}</button>
            </a>
            <button onClick={link} className="btn btn-secondary">
              details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomieFlatCard;
