// import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import React from "react";
// import ParticleWrapper from "../components/Particles/Particles";
import ServiceCard from "../components/serviceCard/ServiceCard";
import { services } from "../configs/data";
import { pageSwitchAnimation, stagger } from "../utils/Animation";
// import Axios from "../utils/Axios";
import Head from "next/head";
import { useLocale, useTranslations } from "next-intl";
import Sidebar from "../components/sidebar/Sidebar";
const Index: React.FC = () => {
  const t = useTranslations("about");
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-4 lg:px-4 sm:px-20 md:px-32">
      <Head>
        <title>Suzeet Twanabasu</title>
        <meta
          name="description"
          content="Full Stack Web Developer looking for job "
        />
      </Head>
      <div className="col-span-12 p-0 text-center lg:col-span-3 rounded-2xl md:col-span-12">
        <Sidebar />
      </div>
      <motion.div
        className="col-span-12 overflow-hidden rounded-2xl lg:col-span-9 md:col-span-12"
        variants={pageSwitchAnimation}
        initial="initial"
        animate="final"
        exit="exit"
      >
        <div className="flex flex-col flex-grow px-6 pt-1 text-white">
          <h4 className="justify-around my-3 font-medium tracking-wider">
            {t("intro")}
          </h4>
          <p className="justify-around my-3 font-medium tracking-wider">
            {t("intro1")}
          </p>

          <div
            className="flex-grow p-4 mt-5"
            style={{
              marginRight: "-1.5rem",
              marginLeft: "-1.5rem",
            }}
          >
            <h5 className="my-3 text-xl font-bold tracking-wider">
              {t("exp_title")}
            </h5>
            <motion.div
              className="grid gap-6 lg:grid-cols-2"
              variants={stagger}
              initial="initial"
              animate="final"
            >
              {services &&
                services?.map((service) => (
                  <ServiceCard service={service} key={service.id} />
                ))}
            </motion.div>
          </div>
        </div>
        {/* <div className="absolute flex w-32 h-32 -z-10">
        <ParticleWrapper width="300px" height="200px" />
      </div> */}
      </motion.div>
    </div>
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
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../configs/locales/${locale}.json`)).default,
    },
  };
}
