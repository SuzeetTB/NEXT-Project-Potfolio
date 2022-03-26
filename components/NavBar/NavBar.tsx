import React, { FunctionComponent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

type Props = {};

const NavItem: FunctionComponent<{
  activeNavItem: string;
  setActiveNavItem: (activeNavItem: string) => void; //Function to set active nav item
  name: string;
  route: string;
}> = ({ activeNavItem, setActiveNavItem, name, route }) => {
  const t = useTranslations("navbar");
  return activeNavItem !== name ? (
    <Link href={route}>
      <a className="relative text-xl ">
        <span
          className="text-2xl font-bold text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-bl from-teal-500 to-teal-100 dark:border-light-500 md:text-2xl " //hover:text-slate-500 hover:border-r-2
          onClick={() => {
            setActiveNavItem(name);
          }}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const NavBar = (props: Props) => {
  const [activeNavItem, setActiveNavItem] = React.useState("");
  const { pathname } = useRouter();
  const t = useTranslations("navbar");

  useEffect(() => {
    if (pathname === "/") setActiveNavItem(`${t("home")}`);
    if (pathname === "/blogs") setActiveNavItem(`${t("blogs")}`);
    if (pathname === "/resume") setActiveNavItem(`${t("resume")}`);
    if (pathname === "/projects") setActiveNavItem(`${t("projects")}`);
  }, [pathname, t]);
  return (
    <>
      <div className="flex justify-between px-5 py-3 my-3">
        <span className="text-2xl font-bold text-transparent text-white border-b-4 bg-clip-text bg-gradient-to-bl from-teal-500 to-teal-100 border-zeit-300 dark:border-light-500 md:text-2xl">
          {activeNavItem !== `${t("home")}` && activeNavItem}
        </span>
        <div className="flex space-x-5 text-lg">
          <NavItem
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            name={t("home")}
            route="/"
          />
          <NavItem
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            name={t("blogs")}
            route="/blogs"
          />
          <NavItem
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            name={t("resume")}
            route="/resume"
          />
          <NavItem
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            name={t("projects")}
            route="/projects"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
