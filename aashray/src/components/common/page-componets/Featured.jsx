import { useEffect, useState } from "react";
import SingleProductCard from "./SingleProductCard";
import { fetchDataFromApi } from "../../../utils/api";
import Loader from "../Loader";

const Featured = () => {
  const [listingsData, setListingsData] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi("/api/listings?populate=*");
    setListingsData(data);
    // console.log(data);
    setShowLoader(false);
  };

  const featuredProperty = listingsData?.filter(({ id, attributes }) => {
    return attributes?.featured === true;
  });
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <h1 className="heading">explore featured latest properties</h1>
      </div>
      <div className="flex flex-wrap gap-10 mt-8">
        {showLoader ? (
          <Loader />
        ) : (
          featuredProperty
            ?.slice(0, 3)
            .map(({ id, attributes }) => (
              <SingleProductCard key={id} {...attributes} />
            ))
        )}
      </div>
    </div>
  );
};

export default Featured;
