import { useState } from "react";
import "./style.css";

import { primeDetails } from "../../../data/data";
import { Icon } from "@iconify/react";

const PremiumBox = () => {
  const [detailsData, setDetailsData] = useState(primeDetails);
  console.log(detailsData);
  return (
    <>
      <div className="bg-white card card-shadow flex flex-col gap-[30px]">
        <div className="p_wrapper">
          <div className="p_benifit">
            {detailsData.map((detail) => {
              return (
                <>
                  <p>{detail.benifit}</p>
                </>
              );
            })}
          </div>
          <div className="p_regular">
            <h3>Regular</h3>
            {detailsData.map((detail) => {
              return (
                <>
                  {detail.regular ? (
                    <Icon className="p_icon" icon="mdi:tick" />
                  ) : (
                    <Icon className="p_icon" icon="gridicons:cross" />
                  )}
                </>
              );
            })}
          </div>
          <div className="p_premium rounded-[10px] bg-primary">
            <h3>Premium</h3>
            {detailsData.map((detail) => {
              return (
                <>
                  {detail.premium ? (
                    <Icon className="text-[24px]" icon="mdi:tick" />
                  ) : (
                    <Icon className="text-[24px] " icon="gridicons:cross" />
                  )}
                </>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="p_pricing">
          <span className="w-3/5 text-base text-center font-[bold];">
            Choose best plan for you. ⟶
          </span>
          <div className="text-base leading-[22px] cursor-pointer p-5 bg-slate-100 card-shadow dark:shadow-none dark:bg-hover-color-dark px-5 py-[30px] rounded-[10px] border-solid">
            <span>Monthly Premium</span>
            <p>
              <strong>₹199/3mo</strong>
            </p>
          </div>
          <div className="text-base leading-[22px] cursor-pointer p-5 rounded-xl bg-primary font-bold">
            <span>Annualy Premium</span>
            <p>
              <s>₹799</s> ₹749/year
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumBox;
