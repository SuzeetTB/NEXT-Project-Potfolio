'use client';
import { useTranslations } from "next-intl";
import { AiOutlineMail } from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

export const QuickInfo = () => {
  const t = useTranslations("profile");
  return (
    <div
      id="quick-info"
      className="py-4 my-3 text-foreground"
      style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
    >
      <div>
        <p className="flex items-center justify-center my-2 space-x-2">
          <GoLocation className="w-6 h-6 mr-2" />
          {t("street_address")}-{t("ward")},{t("city")},{t("country")}
        </p>
        <p className="flex items-center justify-center my-2 space-x-2">
          <AiOutlineMail className="w-6 h-6 mr-2" />
          {t("email")}
        </p>
        <p className="flex items-center justify-center my-2 space-x-2">
          <GiRotaryPhone className="w-6 h-6 mr-2" />
          {t("phone")}
        </p>
      </div>
    </div>
  );
};
