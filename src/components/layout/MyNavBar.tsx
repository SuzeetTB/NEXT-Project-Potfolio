"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Shader, Swirl } from "shaders/react";

import ThemeAndLanguageToggler from "../ui/ThemeAndLanguageToggler";

import {
  FaHouse,
  FaBlog,
  FaFileLines,
  FaDiagramProject,
} from "react-icons/fa6";

type NavItemType = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

const NavItem: FC<{
  activeNavItem: string;
  setActiveNavItem: (activeNavItem: string) => void;
  item: NavItemType;
}> = ({ activeNavItem, setActiveNavItem, item }) => {
  return activeNavItem !== item.name ? (
    <Link
      href={item.route}
      className="relative flex items-center gap-2 text-xl group"
      onClick={() => setActiveNavItem(item.name)}
    >
      <span className="text-lg text-teal-400 transition-all group-hover:text-teal-200">
        {item.icon}
      </span>

      <span className="font-medium text-foreground hover:text-transparent bg-clip-text hover:bg-linear-to-bl from-teal-500 to-teal-100 md:text-2xl">
        {item.name}
      </span>
    </Link>
  ) : null;
};

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const t = useTranslations("navbar");

  const navItems: NavItemType[] = [
    {
      name: t("home"),
      route: "/",
      icon: <FaHouse />,
    },
    {
      name: t("blogs"),
      route: "/blogs",
      icon: <FaBlog />,
    },
    {
      name: t("resume"),
      route: "/resume",
      icon: <FaFileLines />,
    },
    {
      name: t("projects"),
      route: "/projects",
      icon: <FaDiagramProject />,
    },
  ];

  const handleItemClick = (name: string) => {
    setActiveNavItem(name);
    setIsOpen(false);
  };

  return (
    <nav className="fixed h-16 top-0 right-0 w-full z-50 bg-none backdrop-blur-md shadow-2xl">
      <div className="flex justify-between items-center px-5 py-3 max-w-7xl mx-auto">
        <div className="flex flex-row items-center gap-2">
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-foreground p-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
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

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <NavList
            navItems={navItems}
            activeNavItem={activeNavItem}
            onItemClick={handleItemClick}
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed right-4 top-20 z-50 flex flex-col items-en gap-5 p-5 rounded-2xl md:hidden backdrop-blur-md glass-card w-52 shadow-2xl"
          >
            <div className="absolute inset-0 -z-10">
              <Shader className="w-full h-full blur-md">
                <Swirl colorA="teal" colorB="lightblue" />
              </Shader>
            </div>

            <NavList
              navItems={navItems}
              activeNavItem={activeNavItem}
              onItemClick={handleItemClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavList = ({
  navItems,
  activeNavItem,
  onItemClick,
}: any) => (
  <>
    {navItems.map((item: NavItemType) => (
      <NavItem
        key={item.route}
        item={item}
        activeNavItem={activeNavItem}
        setActiveNavItem={onItemClick}
      />
    ))}
  </>
);

export default MyNavbar;