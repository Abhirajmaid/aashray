import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../context/ToastContext";
import { PostDataToApi, PostUpdate, fetchDataFromApi } from "../../utils/api";
import { UserAuth } from "../../context/AuthContext";
import Loader from "../common/Loader";

const initialstate = {
  name: "",
  email: "",
  mobile: "",
  college: "",
  studyBackground: "",
  branch: "",
  passoutyear: "",
  degree: "",
  homeTown: "",
  hobbies: "",
  interest: "",
};

const RoomieReg = ({ visible, onClose }) => {
  const [roomieUser, setRoomieUser] = useState(initialstate);
  const {
    name,
    mobile,
    email,
    college,
    branch,
    studyBackground,
    passoutyear,
    degree,
    homeTown,
    hobbies,
    interest,
  } = roomieUser;
  const [aashrayUser, setAashrayUser] = useState([]);

  const [showLoader, setShowLoader] = useState(false);

  const [status, setStatus] = useState(false);

  const { success, error, warn } = Toast();
  const navigate = useNavigate();

  const { user } = UserAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setRoomieUser((currentUser) => ({
      ...currentUser,
      name: aashrayUser[0]?.attributes?.name,
      email: aashrayUser[0]?.attributes?.email,
      mobile: aashrayUser[0]?.attributes?.mobile,
    }));
  }, [aashrayUser]);

  const fetchUser = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi(
      `/api/aashray-users?populate=*&[filters][email][$eq]=${user.email}`
    );
    setAashrayUser(data);
    setShowLoader(false);
  };

  const postRoomieUser = () => {
    try {
      PostDataToApi("/api/roomie-users", roomieUser);
      PostUpdate(`/api/aashray-users/${aashrayUser[0]?.id}`, {
        roomies: true,
      });
      success("Your Roomies Profile is Created!");
      navigate("/user-profile");
    } catch (e) {
      warn(e);
      error("Somthing Went Wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomieUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(true);
    if (
      college === "" ||
      branch === "" ||
      studyBackground === "" ||
      passoutyear === "" ||
      degree === "" ||
      homeTown === "" ||
      hobbies === "" ||
      interest === ""
    ) {
      error("Please fill all the fields!");
    } else if (!(mobile.length === 10 || mobile.startsWith("0"))) {
      error("Wrong mobile no.");
    } else {
      try {
        postRoomieUser();
      } catch (e) {
        error(e);
      }
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-50 ">
      <div className=" p-9 bg-white card card-shadow rounded-2xl flex flex-col items-center justify-center ">
        {/* <button className="btn bg-slate-500 mb-6 " onClick={onClose}>
          X
        </button> */}
        <div className="flex flex-col justify-center p-1 md:p-12 md:py-2 md:w-[100%] md:max-w-[650px]">
          <span className="mb-3 md:text-4xl text-xl font-bold">
            Roomies Registration!
          </span>
          <span className="font-light text-gray-400 mb-2 text-md">
            🔴Before using Roomies section complete your profile.
          </span>
          {showLoader ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between w-full py-2 gap-3">
                <div className="py-4 w-full">
                  <span className="mb-2 text-md">Name</span>
                  <input
                    type="text"
                    placeholder={`${aashrayUser[0]?.attributes?.name}`}
                    value={aashrayUser[0]?.attributes?.name}
                    className={`${
                      status ? (name ? "" : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    name="name"
                    readOnly
                  />
                </div>
                <div className="py-4 w-full">
                  <span className="mb-2 text-md">Mobile No.</span>
                  <input
                    type="number"
                    name="mobile"
                    placeholder={`${aashrayUser[0]?.attributes?.mobile}`}
                    value={aashrayUser[0]?.attributes?.mobile}
                    className={`${
                      status ? (mobile ? " " : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    readOnly
                  />
                </div>
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="text"
                  placeholder={`${aashrayUser[0]?.attributes?.email}`}
                  value={aashrayUser[0]?.attributes?.email}
                  className={`${
                    status ? (email ? "" : "!border-red-600") : ""
                  } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                  name="email"
                  readOnly
                />
              </div>
              <div className="flex justify-between w-full py-2 gap-3">
                <div className="py-4 w-[50%]">
                  <span className="mb-2 text-md">Home Town</span>
                  <input
                    type="text"
                    name="homeTown"
                    placeholder="Pune"
                    className={`${
                      status ? (homeTown ? " " : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="py-4 w-[50%] ">
                  <span className="mb-2 text-md">College</span>
                  <div className="flex-align-center gap-x-2">
                    <select
                      name="college"
                      className="filter rounded-md !p-3"
                      onChange={handleChange}
                      required
                    >
                      <option value="">College</option>
                      <option value="VIIT">VIIT</option>
                      <option value="VIT">VIT</option>
                      <option value="MIT-wpu">MIT-wpu</option>
                      <option value="PVG">PVG</option>
                      <option value="PICT">PICT</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full py-2 gap-3">
                <div className="py-4 w-[50%]">
                  <span className="mb-2 text-md">Study Background</span>
                  <div className="flex-align-center gap-x-2">
                    <select
                      name="studyBackground"
                      className="filter rounded-md !p-3"
                      onChange={handleChange}
                    >
                      <option value="">Engineering</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Medical">Medical</option>
                      <option value="Science">Science</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Arts">Arts</option>
                    </select>
                  </div>
                </div>
                <div className="py-4 w-[50%]">
                  <span className="mb-2 text-md">Branch</span>
                  <input
                    type="text"
                    name="branch"
                    placeholder="Field of Study (IT/EnTC/CA...) "
                    className={`${
                      status ? (branch ? " " : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between w-full py-2 gap-3">
                <div className="py-4 w-[50%]">
                  <span className="mb-2 text-md">Pursuing Degree</span>
                  <input
                    type="text"
                    name="degree"
                    placeholder="BTech/BCom/BSc... "
                    className={`${
                      status ? (degree ? " " : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-4 w-[50%]">
                  <span className="mb-2 text-md">Year of Passout</span>
                  <div className="flex-align-center gap-x-2">
                    <select
                      name="passoutyear"
                      className="filter rounded-md !p-3"
                      onChange={handleChange}
                    >
                      <option value="">Year</option>
                      <option value="Y2024">2024</option>
                      <option value="Y2025">2025</option>
                      <option value="Y2026">2026</option>
                      <option value="Y2027">2027</option>
                      <option value="Y2028">2028</option>
                      <option value="Y2029">2029</option>
                      <option value="Y2030">2030</option>
                      <option value="Y2031">2031</option>
                      <option value="Y2032">2032</option>
                      <option value="Y2033+">2033+</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full py-2 gap-3">
                <div className="py-4 w-full">
                  <span className="mb-2 text-md">Hobbies</span>
                  <input
                    type="text"
                    name="hobbies"
                    placeholder="hobbies"
                    className={`${
                      status ? (hobbies ? "" : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-4 w-full">
                  <span className="mb-2 text-md">Interest</span>
                  <input
                    type="text"
                    name="interest"
                    placeholder="interest"
                    className={`${
                      status ? (interest ? " " : "!border-red-600") : ""
                    } w-full p-2 rounded-md placeholder:font-light placeholder:text-gray-500 bg-slate-100 dark:bg-hover-color-dark card-bordered outline-none`}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="!p-2 w-full btn btn-primary !shadow-none md:w-full"
              >
                Complete Profile
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomieReg;
