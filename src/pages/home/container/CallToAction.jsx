import React from "react";
import { images } from "../../../constants";

const CallToAction = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="black"
        />
      </svg>

      <section className="relative bg-black px-5 ">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get articles delivered from us to your inbox weekly.
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="text"
                placeholder="Your Email..."
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
              />
              <button className="px-4 py-3 rounded-lg w-full  border-white border-2 text-white hover:bg-white hover:text-black font-bold md:w-fit md:whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-grey">
                Get a response from a member of our team within 3 business days.
                If we received before 9am we will respond within a day.
              </span>{" "}
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#ff4757] rounded-lg absolute top-[10%] right-[-8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.8] absolute -bottom-[10%] -left-[8%]" />
              <div className=" w-full bg-white p-3 z-[1] relative rounded-xl">
                <img
                  src={images.CTAImage}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl tex md:text-2xl lg:text-[28px]">
                    Stay Connected
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg">
                    Get articles, recommendations, and authors notes directly in
                    your inbox.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
