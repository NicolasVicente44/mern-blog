import React from "react";
import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2 relative">
        <h1 className="font-roboto text-3xl text-center font-bold text-black md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          doloribus soluta officia consequuntur, id quasi, cupiditate, tempore
          excepturi illo ullam amet ratione placeat. Adipisci, eius itaque
          laudantium officiis cumque praesentium.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Find Articles..."
            />
            {/* Conditionally render the button based on screen size */}
            <button className="hidden md:inline absolute right-3 top-1/2 -translate-y-1/2 border-black border-2 hover:opacity-[0.7] delay-20 text-black font-semibold rounded-lg px-5 py-3 md:w-fit md:py-2">
              Search
            </button>
          </div>
          {/* Render the button outside the input for smaller screens */}
          <button className="w-full border-black border-2 text-black font-semibold rounded-lg px-5 py-3 md:hidden">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7 ">
          <span className="text-dark-light font-semibold lg:mt-4 mt-2 italic lg:text-sm xl:text-base">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-black bg-opacity-10 py-1.5 px-3 text-black font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-black  bg-opacity-10 py-1.5 px-3 text-black  font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-black  bg-opacity-10 py-1.5 px-3 text-black font-semibold">
              User Interface
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-3/4 h-auto ml-20"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
