import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  const [college, setCollege] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const search = () => {
    navigate(
      `/properties?filters[college][&eqi]=${college}&filters[Type][$eqi]=${type}&filters[gender][$eqi]=${gender}&populate=*`
    );
  };

  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt-8 sm:-mt-20">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-full sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">College</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location of the property"
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Property Type</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="Flat/Apartment">Flats/Appartment</option>
                <option value="Hostel">Hostel</option>
                <option value="PG">PGs</option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">For</h1>
            <div className="flex-align-center gap-x-2">
              <BiBriefcase />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="any">Any</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
              </select>
            </div>
          </div>
        </div>

        {/* <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
           <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Price range</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1000,000">
                  $500,000 - $1000,000
                </option>
              </select>
            </div>
          </div> 
        </div> */}
        <button className="w-full btn btn-primary md:w-fit" onClick={search}>
          search
        </button>
      </div>
    </div>
  );
};

export default Filters;
