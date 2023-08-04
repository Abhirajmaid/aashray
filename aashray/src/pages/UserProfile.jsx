import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const UserProfile = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    // const single_user = querySnapshot?.find((doc) => {
    //   return user.email === doc.email;
    // });

    console.log(querySnapshot);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      <div>User {user && user.email} </div>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
      <div className="flex flex-col gap-8">
        <div className=" w-full !p-6 bg-white card card-shadow dark:shadow-none flex gap-6"></div>
        <div className=" w-full md:!p-6 bg-white card card-shadow dark:shadow-none flex flex-col md:flex-row justify-between items-center">
          <h2 className=" text-primary text-lg ">Prime Membership</h2>
          <button className="btn">Not Active Get it Now &#10143; </button>
        </div>
        <div className=" w-full md:!p-6 bg-white card card-shadow dark:shadow-none flex flex-col md:flex-row justify-between items-center">
          <h2 className=" text-primary text-lg ">Aashray Roomies</h2>
          <button className="btn">
            Not Active, <br /> Start Finding your vibe &#10143;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
