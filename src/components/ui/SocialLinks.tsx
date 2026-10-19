'use client';
import {
  linkFB,
  linkTwitter,
  linkLinkedIn,
  linkGithub,
  linkYoutube,
} from "@configs/url";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaTwitter, FaYoutube } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center lg:w-9/12 mx-auto my-5 text-foreground w-full">
      <Link aria-label="My LinkedIn" href={linkLinkedIn} target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white ">
        <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link aria-label="My Github" href={linkGithub} target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white">
        <AiOutlineGithub className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link aria-label="My Facebook" href={linkFB} target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white">
        <AiOutlineFacebook className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link aria-label="My X" href={linkTwitter} target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white">
        <FaTwitter className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link aria-label="My Youtube" href={linkYoutube} target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white">
        <FaYoutube className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
    </div>
  );
};
