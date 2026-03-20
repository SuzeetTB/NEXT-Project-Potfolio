// import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import { FC } from "react";
// import ParticleWrapper from "../components/Particles/Particles";
import { pageSwitchAnimation, stagger } from "../utils/Animation";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next/types";
import { getI18nProps } from "@/lib/i18n";
import useDeviceType from "@/hooks/useDeviceType";
import Profile from "@/components/Profile/Profile";
import Sidebar from "@/components/Profile/MobileProfile";
import MyHeader from "@/components/layout/MyHeader";
import { MyExperience } from "@/components/MyExperience";
import { MyTechStack } from "@/components/MyTechStack";
import GetInTouch from "@/components/GetInTouch";
import FindMe from "@/components/FindMe";

const Index: FC = () => {
  const { isDesktop } = useDeviceType();
  const t = useTranslations("about");
  return (
    <motion.div
      variants={pageSwitchAnimation}
      initial="initial"
      animate="final"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale || "en")),
    },
  };
};
