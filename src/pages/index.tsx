// import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import { FC } from "react";
// import ParticleWrapper from "../components/Particles/Particles";
import InfoCard from "../components/serviceCard/ServiceCard";
import { experiences } from "../configs/data";
import { pageSwitchAnimation, stagger } from "../utils/Animation";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next/types";
import { getI18nProps } from "@/lib/i18n";
import useDeviceType from "@/hooks/useDeviceType";
import Profile from "@/components/Profile/Profile";
import Sidebar from "@/components/Profile/MobileProfile";
import MyHeader from "@/components/layout/MyHeader";
import { MyExperience } from "@/components/MyExperience";

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
        <h4 className="justify-around my-3 font-medium tracking-wider">
          {t("intro")}
        </h4>
        <p className="justify-around my-3 font-medium tracking-wider">
          {t("intro1")}
        </p>

        <MyExperience/>
      </div>
      {/* <div className="absolute flex w-32 h-32 -z-10">
        <ParticleWrapper width="300px" height="200px" />
      </div> */}
    </motion.div>
  );
};

export default Index;

// export const getServerSideProps = async (context: GetServerSideProps) => {
//   const resData = await Axios.get(`/api/services`).then((res) => res.data);
//   return {
//     props: {
//       services: resData.services,
//     },
//   };
// };

/*
 *Locale is passed as a prop to the component
 */
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await getI18nProps(locale || "en")),
    },
  };
};
