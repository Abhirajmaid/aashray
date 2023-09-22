import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  CTA,
  Pagination,
  SocialIcons,
} from "../../components/common/page-componets";
import Loader from "../../components/common/Loader";
import { closeFilterMenu, uiStore } from "../../features/uiSlice";
import { fetchDataFromApi } from "../../utils/api";
import { RoomieSingleList } from "../../components/roomies";
import RoomiesFilter from "../../components/common/page-componets/roomies-filters/RoomiesFilter";
import { Toast } from "../../context/ToastContext";

const SinglesListings = () => {
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();

  const [showLoader, setShowLoader] = useState(true);

  const { error, warn } = Toast();

  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [listingsData, setListingsData] = useState([]);

  useEffect(() => {
    fetchRoomieSingles();
  }, []);

  const fetchRoomieSingles = async () => {
    try {
      setShowLoader(true);
      const { data } = await fetchDataFromApi("/api/roomie-users?populate=*");
      setListingsData(data);
      console.log("data:", listingsData);
      setShowLoader(false);
    } catch (e) {
      error("Something Went Wrong!");
      warn(e);
    }
  };

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      {showLoader ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-4 gap-x-14 mt-5">
          <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
            <RoomieSingleList roomieSingles={listingsData} />
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
                {/* <RoomiesFilter /> */}
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

export default SinglesListings;
