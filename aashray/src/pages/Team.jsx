import { Link } from "react-router-dom";
import { teamMembers } from "../data/data";

const Team = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamMembers.map(({ id, name, role, image, socials }) => (
          <div className="h-[250px] w-full mb-16" key={id}>
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="relative z-10 w-4/5 p-2 mx-auto -mt-10 text-center bg-white rounded-lg shadow-md dark:bg-dark-light">
              <h1 className="text-lg font-semibold">{name}</h1>
              <p>{role}</p>
              <div className="mt-3 flex-center-center gap-x-3">
                {socials?.map((social) => {
                  return (
                    <Link
                      to={social?.link}
                      className="hover:text-primary transition-a"
                    >
                      {social?.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
