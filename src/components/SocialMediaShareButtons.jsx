import React from "react";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMeta, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillYoutube, AiOutlineLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const SocialMediaShareButtons = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a target="_blank" rel="noreferrer" href="/">
        <AiFillFacebook className="text-[black] w-12 h-12" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <BsLinkedin className="text-[black] w-12 h-12" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <RiTwitterXFill className="text-[black] w-12 h-12" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <BsInstagram className="text-[black] w-12 h-12" />
      </a>
      <a target="_blank" rel="noreferrer" href="/">
        <AiFillYoutube className="text-[black] w-12 h-12" />
      </a>
    </div>
  );
};

export default SocialMediaShareButtons;
