import { socials } from "../../../data/data";

const SocialIcons = () => {
  return (
    <div className="p-3 mt-8 border dark:border-dark">
      <h1 className="font-semibold">Sociall Media</h1>
      <div className="flex-wrap gap-2 mt-3 flex-align-center">
        {socials.map((icon, i) => (
          <a href={icon.link} target="_blank" rel="noreferrer">
            <div
              key={i}
              className="icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-white"
            >
              {icon.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
