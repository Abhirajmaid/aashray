import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdvancedSearch = () => {
  const [selected, setSelected] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.id]: e.target.value });
  };

  const search = () => {
    navigate("/properties?filters[Type][$eq]=Flat&populate=*");
  };

  return (
    <div className="p-3 border dark:border-dark">
      {/* <h1 className="font-semibold">Advanced Search</h1>
      <div className="mt-3">
        <select
          name=""
          className="filter"
          id={"college"}
          value={selected["college"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">College</option>
          <option value="viit">VIIT</option>
          <option value="vit">VIT</option>
          <option value="pvg">PVG</option>
          <option value="pict">PICT</option>
          <option value="mit-wpu">MIT-WPU</option>
        </select>
      </div>
      <div className="mt-3">
        <select
          name=""
          id={"categories"}
          className="filter"
          value={selected["categories"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Categories</option>
          <option value="Flats/Apartments">Flats/Apartments</option>
          <option value="Hostel">Hostels</option>
          <option value="PG">PGs</option>
        </select>
      </div>
      <div className="mt-3">
        <select
          name=""
          id="furniture"
          className="filter"
          value={selected["furniture"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Furnished Status</option>
          <option value="Furnished">Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
          <option value="Semi-Furnished">Semi Furnished</option>
        </select>
      </div>
      <div className="mt-3">
        <select
          name=""
          id="gender"
          className="filter"
          value={selected["gender"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">For</option>
          <option value="Girls">Girls</option>
          <option value="Boys">Boys</option>
          <option value="Any">Any</option>
        </select>
      </div>

      <div className="gap-2 mt-3 flex-align-center">
        <select
          name=""
          id="number_of_bathrooms"
          className="filter"
          value={selected["number_of_bathrooms"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">Above 4</option>
        </select>
        <select
          name=""
          id="number_of_beds"
          className="filter"
          value={selected["number_of_beds"]}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Beds(bhk)</option>
          <option value="1">1bhk</option>
          <option value="2">2bhk</option>
          <option value="2.5">2.5bhk</option>
          <option value="3">3bhk</option>
        </select>
      </div>
      <button
        className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none"
        onClick={search}
      >
        search property
      </button> */}
    </div>
  );
};

export default AdvancedSearch;
