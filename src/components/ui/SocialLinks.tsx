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
    <div className="flex justify-around w-9/12 mx-auto my-5 text-foreground md:w-full">
      <Link href={`${linkLinkedIn}`} className="px-4 hover:text-white ">
        <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkGithub}`} className="px-4 hover:text-white">
        <AiOutlineGithub className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkFB}`} className="px-4 hover:text-white">
        <AiOutlineFacebook className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkTwitter}`} className="px-4 hover:text-white">
        <FaTwitter className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkYoutube}`} className="px-4 hover:text-white">
        <FaYoutube className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
    </div>
  );
};
