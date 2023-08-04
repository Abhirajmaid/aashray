import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleProductCard from "../common/page-componets/SingleProductCard";

const PropertyList = ({ basis }) => {
  const { currentDataItems } = useSelector(dataStore);

  // console.log(currentDataItems?.[0]?.attributes);
  return (
    <div className="flex flex-wrap gap-4">
      {currentDataItems?.map(({ id, attributes }) => (
        <SingleProductCard key={id} {...attributes} basis={basis} />
      ))}
    </div>
  );
};

export default PropertyList;
