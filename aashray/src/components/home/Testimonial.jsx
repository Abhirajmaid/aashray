import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchDataFromApi } from "../../utils/api";
import Loader from "../common/Loader";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [testimonial, setTestimonials] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setShowLoader(true);
    const { data } = await fetchDataFromApi("/api/testimonials?populate=*");
    setTestimonials(data);
    setShowLoader(false);
  };

  // console.log(testimonial.length);
  useEffect(() => {
    setIndex(index < 0 ? testimonial?.length - 1 : index);
    setIndex(index > testimonial?.length - 1 ? 0 : index);
  }, [index, testimonial]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="pt-20 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">testimonial</h1>
      </div>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="flex-center-center max-w-[600px] w-[90%] h-[500px] md:h-[350px] mx-auto relative overflow-hidden">
          {testimonial?.map((t, currentIndex) => {
            const { id, attributes } = t;

            let position = "nextSlide";
            position = index === currentIndex ? "activeSlide" : position;
            position =
              currentIndex === index - 1 ||
              (currentIndex === testimonial?.length - 1 && index === 0)
                ? "lastSlide"
                : position;
            return (
              <div
                className={`w-full text-center h-full p-6 transition absolute opacity-0 ${position}`}
                key={id}
              >
                <img
                  src={attributes?.image?.data?.attributes?.url}
                  alt={attributes.name}
                  className="object-cover w-20 h-20 mx-auto rounded-full shadow-xl"
                />
                <div className="px-10 info">
                  <h1 className="mt-4 uppercase text-md">{attributes.name}</h1>
                  <p className="text-sm capitalize text-primary">
                    {attributes.role}
                  </p>
                  <p className="mt-2 italic">"{attributes.reviewText}"</p>
                  <div className="flex-center-center">
                    <FaQuoteRight className="absolute text-primary/10 text-8xl" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="btns">
            <button
              className="w-10 h-10 shadow rounded-full text-primary border !border-primary flex-center-center absolute right-0  top-1/2 translate-y-1/2"
              onClick={() => setIndex(index + 1)}
            >
              <BsChevronRight />
            </button>
            <button
              className="w-10 h-10 shadow rounded-full text-primary border !border-primary flex-center-center absolute left-0 top-1/2 translate-y-1/2"
              onClick={() => setIndex(index - 1)}
            >
              <BsChevronLeft />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
