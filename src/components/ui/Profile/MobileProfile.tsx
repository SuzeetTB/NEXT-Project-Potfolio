import { ImProfile } from "react-icons/im";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { SendMailButton } from "../SendMailButton";
import { QuickInfo } from "../QuickInfo";
import { ProfileAvatar } from "../ProfileAvatar";
import { FaDownload } from "react-icons/fa6";

type Props = {};

export default function Sidebar({}: Props) {
  const locale = useLocale();
  const t = useTranslations("profile");
  return (
    <>
      <ProfileAvatar />
      <div className="static my-3 mt-9">
        <h3 className="my-2 mt-4 text-5xl font-extrabold tracking-wider text-muted-foreground font-inspiration">
          {locale === "jp" ? (
            <>
              <span className="text-foreground pb-2">{t("last_name")}</span>
              <br />
              <span> {t("first_name")}</span>
            </>
          ) : (
            <>
              <span className="text-foreground pb-2">{t("first_name")}</span>
              <br />
              <span>{t("last_name")}</span>
            </>
          )}
        </h3>
        <p className="px-2 py-2 my-3 mt-6 glass-card text-foreground rounded-full">
          {t("work_title")}
        </p>
        <Link
          className="flex items-center justify-center p-2 my-2 glass-card rounded-full w-2/5 right-0 text-foreground hover:scale-105 duration-200"
          // Use encodeURI for the path, but keep the download name as is
          href={
            locale === "jp"
              ? encodeURI("/assets/documents/履歴書－トナバス-スジト.pdf")
              : encodeURI("/assets/documents/Resume-Suzeet Twanabasu.pdf")
          }
          download={
            locale === "jp"
              ? "履歴書－トナバス-スジト.pdf"
              : "Resume-Suzeet Twanabasu.pdf"
          }
          target="_blank" // Adding this helps trigger the download action better
          rel="noopener noreferrer"
        >
          <FaDownload className="w-6 h-6 mr-2" /> {t("btn_download_resume")}
        </Link>
      </div>
      <SocialLinks />
      <QuickInfo />
      <SendMailButton />
    </>
  );
}
