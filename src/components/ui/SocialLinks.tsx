import { linkFB, linkTwitter, linkLinkedIn, linkGithub } from "@/configs/url";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

export const SocialLinks = () => {
  return (
    <div className="flex justify-around w-9/12 mx-auto my-5 text-white md:w-full">
      <Link href={`${linkFB}`} className="px-4">
        <AiOutlineFacebook className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkTwitter}`} className="px-4">
        <FaTwitter className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkLinkedIn}`} className="px-4">
        <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
      <Link href={`${linkGithub}`} className="px-4">
        <AiOutlineGithub className="w-8 h-8 cursor-pointer hover:animate-pulse" />
      </Link>
    </div>
  );
};
