import { FC } from "react";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next/types";
import { getI18nProps } from "@lib/i18n";

import useDeviceType from "@hooks/useDeviceType";
import Profile from "@components/ui/Profile/Profile";
import Sidebar from "@components/ui/Profile/MobileProfile";
import MyHeader from "@components/layout/MyHeader";
import { MyExperience } from "@components/MyExperience";
import { MyTechStack } from "@components/MyTechStack";
import GetInTouch from "@components/GetInTouch";
import FindMe from "@components/FindMe";

/*
 *Locale is passed as a prop to the component
 */
 export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const normalizedLocale = locale || "en";

  return {
    props: {
      ...(await getI18nProps(normalizedLocale)),
    },
  };
};


const Index: FC = () => {
  const { isDesktop } = useDeviceType();
  const t = useTranslations("about");
  return (
    <div>
      <MyHeader />
      <div className="flex flex-col gap-6 px-5 my-4 mt-16">
        {isDesktop ? (
          <Profile />
        ) : (
          <div className="col-span-12 p-4 text-center lg:col-span-3 rounded-2xl">
            <Sidebar />
          </div>
        )}
        <p className="justify-around md:font-medium tracking-wider text-justify px-4">
          {t("intro")}
          <br />
          <br />
          {t("intro1")}
        </p>
        <MyTechStack />
        <MyExperience />
        <GetInTouch />
        <FindMe />
      </div>
    </div>
  );
};

export default Index;