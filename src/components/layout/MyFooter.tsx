import { FC } from "react";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiLinktree } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";
import { linkGithub, linkLinkedIn } from "@/configs/url";
import Link from "next/link";

const MyFooter: FC = () => {
  const locale = useLocale();
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  // Reusable style for the Quick Links to keep the JSX clean
  const linkItemStyle =
    "text-sm text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200";

  // Reusable style for the Social Icon circles
  const socialIconStyle =
    "flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 text-white bg-dark hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300";

  return (
    <footer className="w-full py-12 px-6 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div className="flex flex-col gap-y-4 text-foreground">
            <h3 className="text-xl font-bold">{t("navbar.about")}</h3>
            <p className="text-sm text-justify leading-normal text-muted-foreground">
              {t.rich("profile.intro", {
                strong: (chunks) => (
                  <strong className="text-foreground">{chunks}</strong>
                ),
              })}
            </p>
            <div className="flex items-center gap-x-3 ">
              <IoLocationOutline className="text-xl" />
              <span className="text-sm">
                {t("profile.street_address")}-{t("profile.ward")},{" "}
                {t("profile.city")}, {t("profile.country")}
              </span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-y-4 text-foreground">
            <h3 className="text-xl font-bold">{t("quick_links")}</h3>
            <ul className="flex flex-col gap-y-2">
              <Link href={`/`} className={linkItemStyle}>
                <li key={'about'} />
                {t('navbar.about')}
              </Link>
              <Link href={`/#skills`} className={linkItemStyle}>
                <li key={'skills'} />
                {t('navbar.skills')}
              </Link>
              <Link href={`/#experience`} className={linkItemStyle}>
                <li key={'experience'} />
                {t('navbar.experience')}
              </Link>
              <Link href={`/projects`} className={linkItemStyle}>
                <li key={'projects'} />
                {t('navbar.projects')}
              </Link>
              <Link href={`/resume#participations`} className={linkItemStyle}>
                <li key={'participations'} />
                {t('navbar.participations')}
              </Link>
              <Link href={`/resume#achievements`} className={linkItemStyle}>
                <li key={'achievements'} />
                {t('navbar.achievements')}
              </Link>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {t("contact")}
            </h3>
            <div className="flex items-center gap-x-3 text-muted-foreground">
              <IoMailOutline className="text-xl " />
              <span className="text-sm truncate">{t("profile.email")}</span>
            </div>
            <div className="flex items-center gap-x-3 text-muted-foreground">
              <IoCallOutline className="text-xl " />
              <span className="text-sm">{t("profile.phone")}</span>
            </div>
            {/* <div className="flex items-center gap-x-3">
              <IoLinkOutline className="text-xl text-white dark:text-cyan-400" />
              <a href="#" className="text-sm text-white dark:text-cyan-400 border-b border-cyan-600 dark:border-cyan-400 pb-0.5">
                All Links
              </a>
            </div> */}
          </div>

          {/* Connect Section - Using your custom glass-card logic */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {t("connect")}
            </h3>
            <div className="flex flex-wrap gap-4">
              <a href={`${linkLinkedIn}`} className={socialIconStyle}>
                <FaLinkedinIn />
              </a>
              <a href={`${linkGithub}`} className={socialIconStyle}>
                <FaGithub />
              </a>
              <a href="#" className={socialIconStyle}>
                <SiLeetcode />
              </a>
              <a href="#" className={socialIconStyle}>
                <SiLinktree />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Bar (The Glass Card Row) */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>
            © {currentYear}{" "}
            {locale === "jp" ? (
              <>
                <span className="text-foreground ">
                  {t("profile.last_name")}
                </span>
                <span> {t("profile.first_name")}</span>
              </>
            ) : (
              <>
                <span className="text-foreground">
                  {t("profile.first_name")}
                </span>{" "}
                <span>{t("profile.last_name")}</span>
              </>
            )}{" "}
            | {t("copyright")}
          </p>
          <p className="italic">{t("built_on_stacks")}</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
