import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  CTA,
  HeadeFilters,
  Pagination,
  SocialIcons,
  Type,
} from "../components/common/page-componets";
import Loader from "../components/common/Loader";
import { PropertyList, PropertyFullWidth } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";
import { fetchDataFromApi } from "../utils/api";

const Property = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const [showLoader, setShowLoader] = useState(false);

  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [listingsData, setListingsData] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi("/api/listings?populate=*");
    setListingsData(data);
    setShowLoader(false);
  };

  const [layout, setLayout] = useState("grid");

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeadeFilters
        layout={layout}
        setLayout={setLayout}
        total={listingsData?.length}
      />
      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={8} pageData={listingsData} />
        </div>
        <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex-center-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch />
              <Type />
              <SocialIcons />
              <CTA />
            </div>
          </div>
        </div>
      </div>
      {/* {showLoader ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
          <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
            {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
            <Pagination itemsPerPage={8} pageData={listingsData} />
          </div>
          <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
            <div
              className={`filter-modal ${isFilterMenuOpen && "open"}`}
              onClick={handleCloseFiltermenu}
            >
              <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
                <div className="flex-center-between border-b dark:border-dark md:hidden">
                  <div
                    className="icon-box md:hidden"
                    onClick={() => dispatch(closeFilterMenu())}
                  >
                    <FiDelete />
                  </div>
                  <p className="uppercase">Filters</p>
                </div>
                <AdvancedSearch />
                <Type />
                <SocialIcons />
                <CTA />
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Property;
