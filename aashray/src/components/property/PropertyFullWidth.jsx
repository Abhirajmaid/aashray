import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleProductCardFullWidth from "../common/page-componets/SingleProductCardFullWidth";
const PropertyFullWidth = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div>
      {currentDataItems?.map(({ id, attributes }) => (
        <SingleProductCardFullWidth key={id} {...attributes} />
      ))}
    </div>
  );
};

export default PropertyFullWidth;
