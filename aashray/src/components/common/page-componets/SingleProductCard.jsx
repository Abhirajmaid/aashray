import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCard = ({
  id,
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
  basis,
  slugId,
  Type,
}) => {
  const navigate = useNavigate();

  const link = () => {
    navigate(`/properties/property/${slugId}`, { replace: true });
  };
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <img
          src={image?.data[0]?.attributes?.url}
          alt={name}
          className="w-full h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a"
        />
        <CardHoverIcons slug={slugId} />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={Type} distance={distance} />
      <div className="p-3">
        <div
          onClick={link}
          className="group-hover:text-primary transition-a cursor-pointer"
        >
          <h1 className="text-xl font-bold capitalize">{name}</h1>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-[1px] ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className=" text-[15px] ">{number_of_beds} Beds</p>
          </div>
          <div className="flex-align-center gap-x-[1px]">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className=" text-[15px] ">{number_of_bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-[1px] ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className=" text-[15px] ">
              {dimensions ? `${dimensions}sq ft` : `600sq ft`}
            </p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-2xl font-semibold text-primary">Rs. {price}</h1>

          <button onClick={link} className="btn btn-secondary">
            details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
