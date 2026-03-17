import { useTranslations } from "next-intl";
import { SiMinutemailer } from "react-icons/si";

export const SendMailButton = () => {
  const t = useTranslations("profile");
  return (
    <div className="flex items-center justify-around p-2">
      <a
        href="mailto:suzeettb@gmail.com"
        className="flex justify-center w-11/12 px-2 py-3 my-2 dark:text-white text-light-800 rounded-full bg-linear-to-r from-light-500 to-light-200 dark:from-zeit dark:to-zeit-200 focus:outline-none"
      >
        <SiMinutemailer className="w-6 h-6 mr-2 animate-pulse" />{" "}
        {t("btn_send_email")}
      </a>
    </div>
  );
};
