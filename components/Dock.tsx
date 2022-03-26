import { useTheme } from "next-themes";
import React from "react";
import { FaLanguage, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";
import Image from "next/image";

const Dock = () => {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLanguage = () => {
    const nextLocale = locale === "en" ? "jp" : "en";
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };
  const changeLocaletoNp = () => {
    const nextLocale = locale === "en" ? "np" : "en";
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };
  return (
    <div className="fixed top-0 right-0 mr-2 rounded-b-lg lg:mr-16 w-38 bg-gradient-to-r from-light-500 to-light-200 dark:from-zeit-800 dark:to-zeit-200 md:mr-4">
      <div className="flex items-center ">
        <button
          className="px-2 my-1 text-white rounded-r-md"
          onClick={changeTheme}
        >
          {theme === "light" ? (
            <FaToggleOff className="w-6 h-6" />
          ) : (
            <FaToggleOn className="w-6 h-6" />
          )}
        </button>
        <br />
        <button className="px-1 my-1">
          <Image
            className="w-6 h-6 mt-1 mr-2 rounded-sm"
            src="/assets/images/nepalFlag.png"
            alt="nepal icons"
            height={20}
            width={20}
            layout="intrinsic"
            quality={100}
            onClick={() => changeLocaletoNp()}
          />
        </button>
      </div>
      <div>
        <button
          className="flex px-2 my-1 text-white rounded-r-md"
          onClick={changeLanguage}
        >
          <FaLanguage className="w-6 h-6 mr-2" />
          {/* if locale is en show en , else if locale is np show np, else show jp */}
          {/* {locale === "en" ? "EN" : locale === "np" ? "NP" : "JP"} */}
          {locale === "en" ? (
            <>
              <span>EN</span>
            </>
          ) : locale === "np" ? (
            <>
              <span>NP</span>
            </>
          ) : (
            <>
              <span>JP</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Dock;
