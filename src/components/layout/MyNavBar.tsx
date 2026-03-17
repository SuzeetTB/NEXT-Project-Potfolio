import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import ThemeAndLanguageToggler from "../ui/ThemeAndLanguageToggler";

const NavItem: FC<{
  activeNavItem: string;
  setActiveNavItem: (activeNavItem: string) => void; //Function to set active nav item
  name: string;
  route: string;
}> = ({ activeNavItem, setActiveNavItem, name, route }) => {
  const t = useTranslations("navbar");
  return activeNavItem !== name ? (
    <Link href={route} className="relative text-xl ">
      <span
        className="text-2xl font-bold text-white hover:text-transparent bg-clip-text hover:bg-linear-to-bl from-teal-500 to-teal-100 dark:border-light-500 md:text-2xl " //hover:text-slate-500 hover:border-r-2
        onClick={() => {
          setActiveNavItem(name);
        }}
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const { pathname } = useRouter();
  const t = useTranslations("navbar");

  // Close menu when a link is clicked
  const handleItemClick = (name: string) => {
    setActiveNavItem(name);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-linear-to-r from-light-500 to-light-200 dark:from-zeit dark:to-zeit-200" >
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">
      <div className="flex flex-row">
      <Image
          src="/assets/images/image.png"
          alt="profile-avatar"
          height={28}
          width={32}
          quality={100}
        />
      <ThemeAndLanguageToggler/>
      </div>
        {/* Active Page Title */}
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-bl from-teal-500 to-teal-100 border-b-4 border-teal-500">
          {activeNavItem !== t("home") && activeNavItem}
        </span>

        {/* Hamburger Icon for Mobile */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple Hamburger Icon SVG */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Nav Items - Desktop View */}
        <div className="hidden md:flex gap-5">
          <NavList activeNavItem={activeNavItem} onItemClick={handleItemClick} t={t} />
        </div>
      </div>

      {/* Nav Items - Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 py-4 bg-slate-800 rounded-xl md:hidden animate-in fade-in zoom-in duration-200">
          <NavList activeNavItem={activeNavItem} onItemClick={handleItemClick} t={t} />
        </div>
      )}
    </nav>
  );
};

// Helper component to keep code DRY
const NavList = ({ activeNavItem, onItemClick, t }: any) => (
  <>
    <NavItem activeNavItem={activeNavItem} setActiveNavItem={onItemClick} name={t("home")} route="/" />
    <NavItem activeNavItem={activeNavItem} setActiveNavItem={onItemClick} name={t("blogs")} route="/blogs" />
    <NavItem activeNavItem={activeNavItem} setActiveNavItem={onItemClick} name={t("resume")} route="/resume" />
    <NavItem activeNavItem={activeNavItem} setActiveNavItem={onItemClick} name={t("projects")} route="/projects" />
  </>
);

export default MyNavbar;
