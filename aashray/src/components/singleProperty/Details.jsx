import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Details = ({ details }) => {
  const { user } = UserAuth();
  return (
    <div className=" w-full !p-6 bg-white card card-shadow dark:shadow-none flex flex-col gap-6">
      <h1 className="text-2xl font-bold">More Details</h1>
      <p className=" text-justify  ">{details}</p>
      <Link to={`${user ? "/" : "/signup"}`}>
        <button className="w-full !shadow-none btn btn-primary md:w-fit">
          Contact Agent
        </button>
      </Link>
    </div>
  );
};

export default Details;
