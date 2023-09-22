import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../context/ToastContext";
import { PostDataToApi } from "../../utils/api";

const initialstate = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  location: "",
  society: "",
  landmark: "",
  type: "",
  locality: "",
  bedrooms: "",
  bathrooms: "",
  balcony: "",
  furnitureStatus: "",
  totalRent: "",
  rentperson: "",
  deposite: "",
  depositeperson: "",
  currentFlatmates: "",
  floorNo: "",
  details: "",
};

const RegForm = ({ aashrayUser }) => {
  const [flat, setFlat] = useState(initialstate);
  const {
    name,
    email,
    mobile,
    location,
    society,
    landmark,
    city,
    locality,
    type,
    bedrooms,
    bathrooms,
    balcony,
    furnitureStatus,
    totalRent,
    deposite,
    rentperson,
    depositeperson,
    currentFlatmates,
    floorNo,
    details,
  } = flat;

  const [status, setStatus] = useState(false);

  const { success, error, warn } = Toast();

  const navigate = useNavigate();

  useEffect(() => {
    setFlat((currentUser) => ({
      ...currentUser,
      name: aashrayUser[0]?.attributes?.name,
      email: aashrayUser[0]?.attributes?.email,
      mobile: aashrayUser[0]?.attributes?.mobile,
    }));
  }, [aashrayUser]);

  const postFlat = () => {
    try {
      PostDataToApi("/api/roomie-flats", flat);
      success("Flat is Registered!");
      navigate("/roomies");
    } catch (e) {
      warn(e);
      error("Somthing Went Wrong");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlat((currentFlat) => ({
      ...currentFlat,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    if (
      city === "" ||
      location === "" ||
      society === "" ||
      type === "" ||
      locality === "" ||
      bedrooms === "" ||
      bathrooms === "" ||
      balcony === "" ||
      furnitureStatus === "" ||
      totalRent === "" ||
      rentperson === "" ||
      deposite === "" ||
      depositeperson === "" ||
      currentFlatmates === "" ||
      floorNo === ""
    ) {
      error("Please fill all the fields!");
    } else {
      try {
        postFlat();
      } catch (e) {
        warn(e);
        error("Something went wrong!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col m-0 md:m-6 space-y-8 bg-white card card-shadow rounded-2xl md:flex-row md:space-y-0">
        {/* <!-- left side --> */}
        <div className="flex flex-col justify-center p-1 md:p-14 md:pt-2 md:w-[100%] md:max-w-[650px]">
          <span className="mb-3 md:text-4xl text-xl font-bold">
            Register your Flat!
          </span>
          <span className="font-light text-gray-400 mb-2 text-md">
            Hi! Please enter flat details
          </span>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between w-full py-2 gap-3">
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Name</span>
                <input
                  type="text"
                  placeholder={`${aashrayUser[0]?.attributes?.name}`}
                  value={aashrayUser[0]?.attributes?.name}
                  className={`${
                    status ? (name ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  name="name"
                  readOnly
                />
              </div>
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Mobile No.</span>
                <input
                  type="number"
                  name="mobile"
                  placeholder={`${aashrayUser[0]?.attributes?.mobile}`}
                  value={aashrayUser[0]?.attributes?.mobile}
                  className={`${
                    status ? (mobile ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                placeholder={`${aashrayUser[0]?.attributes?.email}`}
                value={aashrayUser[0]?.attributes?.email}
                className={`${
                  status ? (email ? "" : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                name="email"
                readOnly
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Property Type</span>
              <div className="flex-align-center gap-x-2">
                <select
                  name="type"
                  className="filter rounded-md !p-3"
                  onChange={handleChange}
                >
                  <option value="">Type</option>
                  <option value="Flats/Apartments">Flats/Apartments</option>
                  <option value="PG">PGs</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full py-2 md:gap-3 ">
              <div className="py-4 w-full">
                <span className="mb-2 text-md">No. of Current Flatmates</span>
                <input
                  type="Number"
                  name="currentFlatmates"
                  placeholder="Number of current Flamates (2)"
                  className={`${
                    status ? (currentFlatmates ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Floor No.</span>
                <input
                  type="number"
                  name="floorNo"
                  placeholder="3"
                  className={`${
                    status ? (floorNo ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between w-full py-2 gap-3">
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Apartment/Society</span>
                <input
                  type="text"
                  name="society"
                  placeholder="Three Jewels"
                  className={`${
                    status ? (society ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Locality</span>
                <input
                  type="text"
                  name="locality"
                  placeholder="Kondhwa bk"
                  className={`${
                    status ? (locality ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full py-2 md:gap-3">
              <div className="py-4 w-full">
                <span className="mb-2 text-md">City</span>
                <input
                  type="text"
                  name="city"
                  placeholder="Pune"
                  className={`${
                    status ? (city ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 w-full relative">
                <span className="mb-2 text-md">Local Landmark</span>
                <input
                  type="text"
                  name="landmark"
                  placeholder="Iskon Temple"
                  className={`w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
                <span className=" absolute right-2 p-1 px-2 rounded-md mt-2 text-xs bg-gray-200 dark:bg-gray-800 ">
                  Optional
                </span>
              </div>
            </div>
            <div className="py-4  ">
              <span className="mb-2 text-md">Location/Address</span>
              <input
                type="text"
                name="location"
                placeholder="Hubtown Rd, Tilekar Nagar, Kondhwa bk, Pune 411048"
                className={`${
                  status ? (location ? " " : "!border-red-600") : ""
                } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-full max-w-[550px] py-2 gap-3">
              <div className="py-4">
                <span className="mb-2 text-md">Bedrooms</span>
                <input
                  type="number"
                  name="bedrooms"
                  placeholder="0"
                  className={`${
                    status ? (bedrooms ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Bathrooms</span>
                <input
                  type="number"
                  name="bathrooms"
                  placeholder="0"
                  className={`${
                    status ? (bathrooms ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Balconies</span>
                <input
                  type="number"
                  placeholder="0"
                  name="balcony"
                  className={`${
                    status ? (balcony ? " " : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Furniture Status</span>
              <div className="flex-align-center gap-x-2">
                <select
                  name="furnitureStatus"
                  className="filter rounded-md !p-3"
                  onChange={handleChange}
                >
                  <option value="">Status</option>
                  <option value="Furnished">Furnished</option>
                  <option value="Semi-furnished">Semi-Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between w-full max-w-[550px] py-2 gap-3">
              <div className="py-4 w-[50%] ">
                <span className="mb-2 text-md">Rent</span>
                <input
                  type="number"
                  name="totalRent"
                  placeholder="Total Rent (₹.)"
                  className={`${
                    status ? (totalRent ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 w-[50%]">
                <span className="mb-2 text-md">Deposite</span>
                <input
                  type="number"
                  name="deposite"
                  placeholder="Total Deposite (₹.)"
                  className={`${
                    status ? (deposite ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full max-w-[550px] py-2 gap-3">
              <div className="py-4 w-full ">
                <span className="mb-2 text-md">Rent/person</span>
                <input
                  type="number"
                  name="rentperson"
                  placeholder="Monthly Rent per Person (₹.)"
                  className={`${
                    status ? (rentperson ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
              <div className="py-4 w-full">
                <span className="mb-2 text-md">Deposite/person</span>
                <input
                  type="number"
                  name="depositeperson"
                  placeholder="Deposite per Person (₹.)"
                  className={`${
                    status ? (depositeperson ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="py-4 relative">
              <span className="mb-2 text-md">Details</span>
              <textarea
                rows="5"
                type=""
                placeholder="details..."
                name="details"
                className={`w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                onChange={handleChange}
              />
              <span className=" absolute right-2 p-1 px-2 rounded-md mt-2 text-xs bg-gray-200 dark:bg-gray-800 ">
                Optional
              </span>
            </div>
            <button
              onClick={handleSubmit}
              className="!p-2  mb-6 w-full btn btn-primary !shadow-none md:w-full"
            >
              Regiter Flat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
