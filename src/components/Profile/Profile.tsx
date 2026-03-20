import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SendMailButton } from "../ui/SendMailButton";
import { ProfileAvatar } from "../ui/ProfileAvatar";
import { FaDownload } from "react-icons/fa6";

type ProfileProps = {};

export default function Profile({}: ProfileProps) {
  const locale = useLocale();
  const t = useTranslations("profile");
  return (
    <div
      id="profile"
      className="flex flex-1 w-auto justify-around items-center"
    >
      <div id="left-section" className="flex flex-col w-3/12">
        <ProfileAvatar />
        <SocialLinks />
        <SendMailButton />
      </div>

      <div
        id="right-section"
        className="py-4 my-3 text-muted-foreground w-6/12"
      >
        <div id="name" className="my-3 mt-9">
          <h3 className="my-2 mt-4 text-5xl font-extrabold tracking-wider text-muted-foreground font-inspiration">
            {locale === "jp" ? (
              <>
                <span className="text-foreground">{t("last_name")}</span>
                <span> {t("first_name")}</span>
              </>
            ) : (
              <>
                <span className="text-foreground">{t("first_name")}</span>{" "}
                <span>{t("last_name")}</span>
              </>
            )}
          </h3>
          <p className="py-2 my-3 mt-2 text-foreground text-left text-3xl font-bold">
            {t("work_title")}
          </p>
          <h4 className="justify-around my-3 font-medium tracking-wider text-justify">
            {t.rich("intro", {
              strong: (chunks) => (
                <strong className="text-foreground">{chunks}</strong>
              ),
            })}
          </h4>
          <Link
            className="flex items-center justify-center p-2 my-2 glass-card rounded-full w-2/5 right-0 text-foreground hover:scale-105 duration-200"
            href="/assets/documents/Citizenship-Suzeet.jpg"
            download="CitizenResume-Suzeet.jpg"
          >
            <FaDownload className="w-6 h-6 mr-2 " /> {t("btn_download_resume")}
          </Link>
        </div>
      </div>
    </div>
  );
}
