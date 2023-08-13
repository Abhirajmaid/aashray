import React, { useEffect, useState } from "react";

import { Icon } from "@iconify/react";

import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { profilePic } from "../data/data";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const UserProfile = () => {
  const [primeInfo, setPrimeInfo] = useState(false);
  const [roomiesInfo, setRoomiesInfo] = useState(false);
  const [index, setIndex] = useState(null);

  const [userInfoList, setUserInfoList] = useState([]);
  const [singleUser, setSingleUser] = useState([]);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        const single = list.find((item) => {
          return item.email === user.email;
        });
        setSingleUser(single);
        console.log(single);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
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
  useEffect(() => {
    setIndex(Math.floor(Math.random() * 10) + 1);
  }, []);

  // console.log(index);
  const profileImg = profilePic?.find((p) => {
    return p.id === index;
  });
  console.log(profileImg);

  return (
    <div className="pt-16 md:px-[6%] px-[5%] ">
      {/* <div>User {user && user.email} </div> */}

      <div className="flex flex-col gap-8">
        {singleUser && (
          <div className="w-full !p-6 bg-white card card-shadow dark:shadow-none md:justify-between flex md:flex-row flex-col gap-6 items-center justify-center">
            <div className=" w-[140px] aspect-square rounded-full dark:bg-slate-600 bg-slate-300 overflow-hidden">
              <img
                src={profileImg?.profile}
                className="object-contain"
                alt=""
              />
            </div>
            <div className="flex -ml-20 gap-2 items-center">
              <Icon
                icon="guidance:up-arrow"
                rotate={3}
                width="50"
                className=" text-primary md:block hidden"
              />
              <h2
                className=" bg-dark-light p-3 rounded-lg cursor-pointer rotate-3 text-center"
                onClick={() => {
                  setIndex(Math.floor(Math.random() * 10) + 1);
                }}
              >
                Let's Change it every time
              </h2>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex gap-5 items-center">
                <span>Name: </span>
                <h2 className=" font-bold text-lg">{user.email}</h2>
              </div>
              <div className="flex gap-5 items-center">
                <span>Email: </span>
                <h2 className=" font-bold text-lg">{user.email}</h2>
              </div>
            </div>
            <div>
              <Icon
                className=" dark:text-slate-100 text-dark-light md:block hidden"
                height="80"
                icon="fluent:divider-tall-16-regular"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex gap-5 items-center">
                <span>Contact: </span>
                <h2 className=" font-bold text-lg">{user.email}</h2>
              </div>
              <div className="flex gap-5 items-center">
                <span>City: </span>
                <h2 className=" font-bold text-lg">{user.email}</h2>
              </div>
            </div>
            <div>
              <button onClick={handleLogout} className="border rounded-lg btn">
                Logout
              </button>
            </div>
          </div>
        )}
        <div className=" w-full md:!p-6 bg-white card card-shadow dark:shadow-none flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2">
            <h2 className=" text-primary text-lg ">Prime Membership</h2>
            <div className="relative">
              <Icon
                icon="material-symbols:info-outline"
                onMouseEnter={() => {
                  setPrimeInfo(true);
                }}
                onMouseLeave={() => {
                  setPrimeInfo(false);
                }}
              />
              {primeInfo ? (
                <div className="w-[200px] h-auto card card-shadow dark:!bg-dark absolute top-2 left-2 p-2 rounded-lg">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    eum.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <Link to="/premium">
            <button className="btn">Not Active Get it Now &#10143; </button>
          </Link>
        </div>
        <div className=" w-full md:!p-6 bg-white card card-shadow dark:shadow-none flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2 ">
            <h2 className=" text-primary text-lg ">Aashray Roomies</h2>
            <div className="relative">
              <Icon
                icon="material-symbols:info-outline"
                onMouseEnter={() => {
                  setRoomiesInfo(true);
                }}
                onMouseLeave={() => {
                  setRoomiesInfo(false);
                }}
              />
              {roomiesInfo ? (
                <div className="w-[200px] h-auto card card-shadow dark:!bg-dark absolute top-2 left-2 p-2 rounded-lg">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    eum.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <Link to="/roomies">
            <button className="btn">
              Not Active, <br /> Start Finding your vibe &#10143;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
