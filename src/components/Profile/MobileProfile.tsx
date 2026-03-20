import { ImProfile } from "react-icons/im";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { SocialLinks } from "../ui/SocialLinks";
import { SendMailButton } from "../ui/SendMailButton";
import { QuickInfo } from "../ui/QuickInfo";
import { ProfileAvatar } from "../ui/ProfileAvatar";

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
          className="flex items-center justify-center p-2 my-2 glass-card rounded-full hover:scale-105 duration-200 text-foreground"
          href="/assets/documents/Citizenship-Suzeet.jpg"
          download="CitizenResume-Suzeet.jpg"
        >
          <ImProfile className="w-6 h-6 mr-2" /> {t("btn_download_resume")}
        </Link>
      </div>
      <SocialLinks />
      <QuickInfo />
      <SendMailButton />
    </>
  );
}
