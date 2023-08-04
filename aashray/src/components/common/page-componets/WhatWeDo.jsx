import { focus } from "../../../data/data";

const WhatWeDo = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">what we do</h1>
        <h1 className="heading">our main focus your property grow</h1>
      </div>
      <div className="grid grid-cols-2 mt-10 sm:grid-cols-4 md:grid-cols-6">
        {focus.map(({ id, name, icon, text }) => (
          <div className="p-3 text-center rounded-lg group " key={id}>
            <div className="icon-box !opacity-100 !w-16 !h-16 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white">
              <div className="text-3xl"> {icon}</div>
            </div>
            <h1 className="mt-4 !text-[15px]">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
