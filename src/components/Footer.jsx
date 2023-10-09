import React from "react";
import { images } from "../constants";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMeta, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillYoutube, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-black">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-20 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 mb-5 lg:col-span-2">
          <h3 className="text-white font-bold md:text-lg">Product</h3>
          <ul className="text-white text-sm md:text-lg mt-5 space-y-4">
            <li>
              <a href="/">Landing Page</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Partners</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-white font-bold md:text-lg">Services</h3>
          <ul className="text-white text-sm md:text-lg mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">UI-UX</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2">
          <h3 className="text-white font-bold md:text-lg">Company</h3>
          <ul className="text-white text-sm md:text-lg mt-5 space-y-4">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">ESG</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-white font-bold md:text-lg">More</h3>
          <ul className="text-white text-sm md:text-lg mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">History</a>
            </li>
          </ul>
        </div>
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          <img
            src={images.Logo}
            alt=""
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-white md:text-lg text-sm text-center mt-4 md:text-left lg:text-sm">
            Get the most reliable up-to-date information today.
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-white md:justify-start lg:text-2xl">
            <li>
              <a href="/">
                <RiTwitterXFill />
              </a>
            </li>
            <li>
              <a href="/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="/">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <BsMeta />
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
        <div className="flex justify-center space-x-4 py-4">
          <div className="w-5 h-5 bg-[#ff4757] rounded-full"></div>
          <div className="w-5 h-5 bg-[#ff4757] rounded-full"></div>
          <div className="w-5 h-5 bg-[#ff4757] rounded-full"></div>
        </div>
        <p className="text-white pb-10">
          Copyright © Pulse Press - {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Footer;
