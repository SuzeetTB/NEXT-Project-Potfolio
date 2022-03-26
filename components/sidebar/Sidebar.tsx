import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTwitter, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  linkFB,
  linkGithub,
  linkLinkedIn,
  linkTwitter,
} from "../../configs/url";

type Props = {};

export default function Sidebar({}: Props) {
  const locale = useLocale();
  const t = useTranslations("sidebar");
  return (
    <>
      <div>
        <div className="relative flex items-center justify-center w-full ml-4">
          {/* <div className='absolute z-10 mt-6 bg-white rounded-full shadow-ring h-44 w-44 animate-ring'></div> */}
          <div className="absolute z-20 w-40 h-40 mt-6 bg-white rounded-full dark:bg-black animate-ring"></div>
          <div className="relative z-40 mr-1 rounded-full">
            <Image
              src="/assets/images/profile_circle.png"
              alt="profile-avatar"
              height={183}
              width={179}
              layout="intrinsic"
              quality={100}
            />
          </div>
        </div>
        <div className="static my-3 mt-9">
          {locale === "en" ? (
            <h3 className="my-3 mt-4 text-5xl font-extrabold tracking-wider text-white mt-30 font-inspiration">
              <span className=" text-zinc hover:animate-pulse">
                {t("first_name")}
              </span>
              <br />
              {t("last_name")}
            </h3>
          ) : (
            <h3 className="my-3 mt-4 text-4xl font-extrabold tracking-wider text-white mt-30 font-inspiration">
              <span className=" text-zinc hover:animate-pulse">
                {t("first_name")}
              </span>
              <br />
              {t("last_name")}
            </h3>
          )}
          <p className="px-2 py-2 my-3 mt-6 bg-gray-200 rounded-full">
            {t("work_title")}
          </p>
          <a
            className="flex items-center justify-center p-2 my-2 bg-gray-200 rounded-full"
            href="/assets/documents/Citizenship-Suzeet.jpg"
            download="CitizenRuesme-Suzeet.jpg"
          >
            <ImProfile className="w-6 h-6 mr-2" /> {t("btn_download_resume")}
          </a>
        </div>
      </div>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-white md:w-full">
        {/* Social links */}
        <a href={`${linkFB}`} className="px-4">
          <AiOutlineFacebook className="w-8 h-8 cursor-pointer hover:animate-pulse" />
        </a>
        <a href={`${linkTwitter}`} className="px-4">
          <FaTwitter className="w-8 h-8 cursor-pointer hover:animate-pulse" />
        </a>
        <a href={`${linkLinkedIn}`} className="px-4">
          <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:animate-pulse" />
        </a>
        <a href={`${linkGithub}`} className="px-4">
          <AiOutlineGithub className="w-8 h-8 cursor-pointer hover:animate-pulse" />
        </a>
      </div>

      <div
        className="py-4 my-3 text-white"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div>
          {/* Address */}
          <p className="flex items-center justify-center my-2 space-x-2">
            <GoLocation className="w-6 h-6 mr-2" />
            {t("street_address")}-{t("ward")},{t("city")},{t("country")}
          </p>
          <p className="flex items-center justify-center my-2 space-x-2">
            <AiOutlineMail className="w-6 h-6 mr-2" />
            {t("email")}
          </p>
          <p className="flex items-center justify-center my-2 space-x-2">
            <GiRotaryPhone className="w-6 h-6 mr-2" />
            {t("phone")}
          </p>
        </div>
      </div>

      <div className="items-center justify-around p-2">
        <button
          className="flex justify-center w-11/12 px-2 py-3 my-2 text-white rounded-full bg-gradient-to-r from-light-500 to-light-200 dark:from-zeit dark:to-zeit-200 focus:outline-none"
          onClick={() => {
            window.open("mailto:suzeettb@gmail.com");
          }}
        >
          <SiMinutemailer className="w-6 h-6 mr-2 animate-pulse" />{" "}
          {t("btn_send_email")}
        </button>
      </div>

      {/* <div className="static flex -z-10">
        <ParticleWrapper width="300px" height="200px" />
      </div> */}
    </>
  );
}

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: (await import(`../../configs/locales/${locale}.json`)).default,
//     },
//   };
// }
