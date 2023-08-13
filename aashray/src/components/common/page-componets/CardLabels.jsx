import { BiHeart } from "react-icons/bi";

const cardLabels = ({ purpose, distance }) => {
  return (
    <div className="absolute top-2 left-2 flex-align-center justify-between gap-x-2 w-full pr-[12px]">
      <div className="flex gap-x-2">
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
          {distance}km away
        </span>
        <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
          {purpose}
        </span>
      </div>
      <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
        <BiHeart />
      </div>
    </div>
  );
};

export default cardLabels;
