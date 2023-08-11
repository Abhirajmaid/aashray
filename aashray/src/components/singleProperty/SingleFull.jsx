import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { BiBed, BiTab } from "react-icons/bi";
import { MdBalcony, MdOutlineDoorSliding } from "react-icons/md";
import { ImageCarousel, VideoModel } from "../common/page-componets";

const SingleFull = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOnClose = () => {
    setShowVideo(false);
  };

  console.log(data);
  return (
    <>
      <div className=" items-center w-full md:!p-6 !p-4 bg-white card card-shadow dark:shadow-none flex flex-col gap-6">
        <div className="flex md:flex-row flex-col w-full justify-center items-center gap-3">
          <h1 className="md:text-4xl text-2xl font-bold">₹{data?.price}</h1>
          <Icon
            icon="fluent:divider-tall-24-regular"
            style={{ fontSize: "30px" }}
            className="md:block hidden "
          />
          <h1 className="md:text-3xl text-xl font-bold">{data?.name}</h1>
        </div>
        <div className=" w-full md:w-[80%] flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 overflow-hidden ">
          <ImageCarousel images={data?.image?.data} />
        </div>
        {data?.video ? (
          <button
            onClick={() => setShowVideo(true)}
            className="btn btn-primary"
          >
            Watch Video
          </button>
        ) : null}
        <div className="flex-align-center flex-wrap md:flex gap-2 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
          <div className="flex-align-center gap-x-2 ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className=" text-base ">{data?.number_of_beds} Bhk</p>
          </div>
          <Icon
            icon="fluent:divider-tall-24-regular"
            style={{ fontSize: "20px" }}
          />
          <div className="flex-align-center gap-x-2 ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className=" text-base ">{data?.number_of_bathrooms} Baths</p>
          </div>
          <Icon
            icon="fluent:divider-tall-24-regular"
            style={{ fontSize: "20px" }}
          />
          <div className="flex-align-center gap-x-2 ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <MdBalcony />
            </div>
            <p className=" text-base ">{data?.number_of_bathrooms} Balcony</p>
          </div>
          <Icon
            icon="fluent:divider-tall-24-regular"
            style={{ fontSize: "20px" }}
          />
          <div className="flex-align-center gap-x-2 ">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <MdOutlineDoorSliding />
            </div>
            <p className=" text-base ">{data?.furniture}</p>
          </div>
        </div>
      </div>
      <VideoModel
        onClose={handleOnClose}
        visible={showVideo}
        url={data?.video?.data?.attributes?.url}
      />
    </>
  );
};

export default SingleFull;
