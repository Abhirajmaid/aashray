import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  CTA,
  Pagination,
  SocialIcons,
} from "../../components/common/page-componets";
import Loader from "../../components/common/Loader";
import { closeFilterMenu, uiStore } from "../../features/uiSlice";
import { fetchDataFromApi } from "../../utils/api";
import { RoomieFlatList } from "../../components/roomies";
import RoomiesFilter from "../../components/common/page-componets/roomies-filters/RoomiesFilter";

const Listings = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const [showLoader, setShowLoader] = useState(true);

  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [listingsData, setListingsData] = useState(null);

  useEffect(() => {
    fetchRoomieFlats();
  }, []);

  const fetchRoomieFlats = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi("/api/roomie-flats?populate=*");
    setListingsData(data);
    setShowLoader(false);
    // console.log(listingsData);
  };

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      {showLoader ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
          <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
            <RoomieFlatList roomieFlats={listingsData} />
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
                <RoomiesFilter />
                <SocialIcons />
                <CTA />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listings;
