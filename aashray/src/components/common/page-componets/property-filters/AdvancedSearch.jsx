const AdvancedSearch = () => {
  return (
    <div className="p-3 border dark:border-dark">
      <h1 className="font-semibold">Advanced Search</h1>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">College</option>
          <option value="viit">VIIT</option>
          <option value="vit">VIT</option>
          <option value="pvg">PVG</option>
          <option value="pict">PICT</option>
          <option value="mit-wpu">MIT-WPU</option>
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Categories</option>
          <option value="flats">Flats/Apartments</option>
          <option value="hostels">Hostels</option>
          <option value="pgs">PGs</option>
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Furnished Status</option>
          <option value="furnished">Furnished</option>
          <option value="unfurnished">Unfurnished</option>
          <option value="semi-furnished">Semi Furnished</option>
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">Availability</option>
          <option value="immediately">Immediately</option>
          <option value="15days">Within 15 days</option>
          <option value="within30days">Within 30 days</option>
          <option value="after30days">After 30 days</option>
        </select>
      </div>
      <div className="mt-3">
        <select name="" id="" className="filter">
          <option value="">For</option>
          <option value="rent">Girls</option>
          <option value="sell">Boys</option>
          <option value="sell">Any</option>
        </select>
      </div>
      <div className="gap-2 mt-3 flex-align-center">
        <select name="" id="" className="filter">
          <option value="">Bathrooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">Above 4</option>
        </select>
        <select name="" id="" className="filter">
          <option value="">Beds(bhk)</option>
          <option value="1">1bhk</option>
          <option value="2">2bhk</option>
          <option value="2">2.5bhk</option>
          <option value="2">3bhk</option>
        </select>
      </div>
      <button className="btn bg-secondary w-full mt-4 text-slate-200 !rounded-none">
        search property
      </button>
    </div>
  );
};

export default AdvancedSearch;
