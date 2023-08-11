import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";

import {
  Details,
  Amenities,
  OwnerDetails,
  SingleFull,
} from "../components/singleProperty";
import Loader from "../components/common/Loader";
import { Featured } from "../components/common/page-componets";

const SingleProperty = () => {
  const { slug } = useParams();
  const [showLoader, setShowLoader] = useState(null);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetchProperty();
  }, []);

  const fetchProperty = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi(
      `/api/listings?populate=*&[filters][slugId][$eq]=${slug}`
    );
    setProperty(data);
    setShowLoader(false);
  };

  // console.log(property);

  const propertyData = property?.find((p) => {
    return p?.attributes?.slugId === slug;
  });

  // console.log(propertyData);
  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      {propertyData ? (
        <div className="md:flex-row flex flex-col w-full gap-5 ">
          <div className="md:w-[75%] w-full flex flex-col gap-6">
            <SingleFull data={propertyData?.attributes} />
            <Details details={propertyData?.attributes?.description} />
            <Amenities amenities={propertyData?.attributes?.amenities?.data} />
          </div>
          <div className="md:w-[25%] w-full mb-10">
            <OwnerDetails />
          </div>
        </div>
      ) : (
        <Loader />
      )}
      <Featured />
    </div>
  );
};

export default SingleProperty;
