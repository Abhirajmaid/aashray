import { Featured, Team, WhatWeDo } from "../components/common/page-componets";

import {
  Testimonial,
  Hero,
  Filters,
  Search,
  About,
  PortfolioHome,
} from "../components/home";

const Home = () => {
  return (
    <>
      <div className="pt-16 md:px-[6%] px-[5%] ">
        <Hero />
        <Filters />
        <About />
        <WhatWeDo />
        <Featured />
        <PortfolioHome />
        <Team />
        <Search />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
