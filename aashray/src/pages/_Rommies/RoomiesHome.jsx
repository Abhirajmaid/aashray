import React, { useEffect, useState } from "react";
import { Hero, RoomieReg } from "../../components/roomies";
import Loader from "../../components/common/Loader";
import { fetchDataFromApi } from "../../utils/api";
import { UserAuth } from "../../context/AuthContext";

const Roomies = () => {
  const [showForm, setShowForm] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const [aashrayUser, setAashrayUser] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (aashrayUser[0]?.attributes?.roomies === true) {
      setShowForm(false);
    }
  }, [aashrayUser]);

  const fetchUser = async () => {
    setShowLoader(true);
    try {
      const { data } = await fetchDataFromApi(
        `/api/aashray-users?populate=*&[filters][email][$eq]=${user.email}`
      );
      setAashrayUser(data);
      setShowLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(aashrayUser);

  const handleOnClose = () => {
    setShowForm(false);
  };

  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      {showLoader ? (
        <Loader />
      ) : (
        <div>
          <Hero />
          <RoomieReg onClose={handleOnClose} visible={showForm} />
        </div>
      )}
    </div>
  );
};

export default Roomies;
