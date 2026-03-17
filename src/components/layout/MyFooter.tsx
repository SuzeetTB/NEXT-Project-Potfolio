import { FC } from 'react';
import { 
  IoLocationOutline, 
  IoMailOutline, 
  IoCallOutline, 
  IoLinkOutline 
} from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiLinktree } from "react-icons/si";
import { useLocale, useTranslations } from 'next-intl';

const MyFooter: FC = () => {
  
  const locale = useLocale();
  const t = useTranslations("sidebar");
  const currentYear = new Date().getFullYear();

  // Reusable style for the Quick Links to keep the JSX clean
  const linkItemStyle = "text-sm text-gray-300 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200";
  
  // Reusable style for the Social Icon circles
  const socialIconStyle = "flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-cyan-400 bg-white/50 dark:bg-white/5 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300";

  return (
    <footer className="w-full py-12 px-6 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About Section */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-white dark:text-cyan-400">About</h3>
            <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-400">
              Passionate about building intuitive UIs and scalable backend systems. 
              Let's build meaningful digital experiences together.
            </p>
            <div className="flex items-center gap-x-3 text-gray-300 dark:text-gray-400">
              <IoLocationOutline className="text-xl text-white dark:text-cyan-400" />
              <span className="text-sm">{t("street_address")}-{t("ward")},{t("city")},{t("country")}</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-white dark:text-cyan-400">Quick Links</h3>
            <ul className="flex flex-col gap-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className={linkItemStyle}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-white dark:text-cyan-400">Contact</h3>
            <div className="flex items-center gap-x-3 text-gray-300 dark:text-gray-400">
              <IoMailOutline className="text-xl text-white dark:text-cyan-400" />
              <span className="text-sm truncate">jerophinstanley47@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-3 text-gray-300 dark:text-gray-400">
              <IoCallOutline className="text-xl text-white dark:text-cyan-400" />
              <span className="text-sm">+919940306399</span>
            </div>
            <div className="flex items-center gap-x-3">
              <IoLinkOutline className="text-xl text-white dark:text-cyan-400" />
              <a href="#" className="text-sm text-white dark:text-cyan-400 border-b border-cyan-600 dark:border-cyan-400 pb-0.5">
                All Links
              </a>
            </div>
          </div>

          {/* Connect Section - Using your custom glass-card logic */}
          <div className="flex flex-col gap-y-4">
            <h3 className="text-xl font-bold text-white dark:text-cyan-400">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className={socialIconStyle}><FaLinkedinIn /></a>
              <a href="#" className={socialIconStyle}><FaGithub /></a>
              <a href="#" className={socialIconStyle}><SiLeetcode /></a>
              <a href="#" className={socialIconStyle}><SiLinktree /></a>
            </div>
          </div>

        </div>

        {/* Divider Bar (The Glass Card Row) */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-300">
          <p>© {currentYear} SUZEET TWANABASU | All Rights Reserved</p>
          <p>Built with Next.js, React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;