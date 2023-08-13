// import { BiHeart, BiStar } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CardHoverIcons = ({ slug }) => {
  const navigate = useNavigate();

  const link = () => {
    navigate(`/properties/property/${slug}`, { replace: true });
  };
  return (
    <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:block gap-x-3">
      <div className="text-white flex-align-center gap-x-2">
        {/* <div className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100">
          <BiHeart />
        </div> */}
        <div
          onClick={link}
          className="icon-box !w-7 !h-7 bg-primary hover:bg-secondary !opacity-100"
        >
          <FiEye />
        </div>
      </div>
    </div>
  );
};

export default CardHoverIcons;
