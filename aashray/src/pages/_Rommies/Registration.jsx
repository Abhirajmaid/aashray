import React, { useEffect, useState } from "react";
import { FlatRegForm } from "../../components/roomies";
import { UserAuth } from "../../context/AuthContext";
import { fetchDataFromApi } from "../../utils/api";
import Loader from "../../components/common/Loader";

const Registration = () => {
  const [showLoader, setShowLoader] = useState(false);

  const [aashrayUser, setAashrayUser] = useState([]);

  const { user } = UserAuth();

  useEffect(() => {
    fetchUser();
  }, []);

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
  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      {showLoader ? <Loader /> : <FlatRegForm aashrayUser={aashrayUser} />}
    </div>
  );
};

export default Registration;
