import { Featured, Team, WhatWeDo } from "../components/common/page-componets";

import {
  Testimonial,
  Hero,
  Filters,
  Search,
  About,
  Services,
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
        <Services />
        <Team />
        <Search />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
