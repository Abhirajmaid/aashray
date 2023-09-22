import { BiHeart } from "react-icons/bi";

const cardLabels = ({ purpose, distance, college, studyBackground }) => {
  return (
    <div className="absolute top-2 left-2 flex-align-center justify-between gap-x-2 w-full pr-[30px]">
      <div className="flex gap-x-2">
        {distance ? (
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
            {distance}km away
          </span>
        ) : null}
        {purpose ? (
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
            {purpose}
          </span>
        ) : null}
        {college ? (
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary">
            {college}
          </span>
        ) : null}
        {studyBackground ? (
          <span className="py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary">
            {studyBackground}
          </span>
        ) : null}
      </div>
      <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
        <BiHeart />
      </div>
    </div>
  );
};

export default cardLabels;
