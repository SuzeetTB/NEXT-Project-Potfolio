'use client';

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import ThemeAndLanguageToggler from "../ui/ThemeAndLanguageToggler";
import { AnimatePresence, motion } from "framer-motion";

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
        className="text-xl font-medium text-foreground hover:text-transparent bg-clip-text hover:bg-linear-to-bl from-teal-500 to-teal-100 md:text-2xl"
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
    <nav className="fixed h-16 top-0 right-0 w-full z-50 bg-none backdrop-blur-md shadow-2xl">
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">
        <div className="flex flex-row">
          <Image
            src="/assets/images/my_logo.png"
            alt="profile-avatar"
            height={28}
            width={32}
            quality={100}
          />
          <ThemeAndLanguageToggler />
        </div>
        {/* Active Page Title */}
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-bl from-teal-500 to-teal-100 border-b-4 border-teal-500">
          {activeNavItem !== t("home") && activeNavItem}
        </span>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-foreground  p-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Simple Hamburger Icon SVG */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Nav Items - Desktop View */}
        <div className="hidden md:flex gap-5 dark:text-white text-dark">
          <NavList
            activeNavItem={activeNavItem}
            onItemClick={handleItemClick}
            t={t}
          />
        </div>
      </div>

      {/* Nav Items - Mobile Dropdown */}
      {/* {isOpen && (
        <div className="flex flex-col right-0 items-end gap-4 mx-2 p-2 rounded-xl md:hidden animate-in fade-in zoom-in duration-200 glass-card w-1/2">
          <NavList activeNavItem={activeNavItem} onItemClick={handleItemClick} t={t} />
        </div>
      )} */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-4 top-20 z-50 flex flex-col items-end gap-4 p-4 rounded-2xl md:hidden backdrop-blur-md! glass-card w-64 shadow-2xl"
            style={{
              // background: "rgba(0, 18, 44, 0.3)", // Very transparent to let blur show
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <NavList
              activeNavItem={activeNavItem}
              onItemClick={handleItemClick}
              t={t}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper component to keep code DRY
const NavList = ({ activeNavItem, onItemClick, t }: any) => (
  <>
    <NavItem
      activeNavItem={activeNavItem}
      setActiveNavItem={onItemClick}
      name={t("home")}
      route="/"
    />
    <NavItem
      activeNavItem={activeNavItem}
      setActiveNavItem={onItemClick}
      name={t("blogs")}
      route="/blogs"
    />
    <NavItem
      activeNavItem={activeNavItem}
      setActiveNavItem={onItemClick}
      name={t("resume")}
      route="/resume"
    />
    <NavItem
      activeNavItem={activeNavItem}
      setActiveNavItem={onItemClick}
      name={t("projects")}
      route="/projects"
    />
  </>
);

export default MyNavbar;
