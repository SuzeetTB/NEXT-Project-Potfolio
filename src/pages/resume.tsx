import React, { useEffect } from "react";
import Bar from "../components/ui/Bar";
import EducationCard from "../components/serviceCard/EducationCard";
import InfoCard from "../components/serviceCard/ServiceCard";
import {
  academics,
  languages,
  tools,
  experiences as AllServices,
} from "../configs/data";
import { motion } from "framer-motion";
import { fadeInUp, pageSwitchAnimation } from "../utils/Animation";
import { Iservices } from "../configs/data-type";
import Head from "next/head";
import { GetStaticProps } from "next/types";
import { getI18nProps } from "@/lib/i18n";
import MyHeader from "@/components/layout/MyHeader";
// type Props = {};

const Resume: React.FC = () => {
  const [services, setServices] = React.useState<Array<Iservices>>();
  useEffect(() => {
    setServices(AllServices.slice(0, 2));
  }, []);

  return (
    <motion.div
      className="px-2 py-4"
      variants={pageSwitchAnimation}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <MyHeader subtitle={"Resume"}/>
      {/* Experience and education */}
      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-2">
        <motion.div
          className="p-5 text-white rounded-2xl"
          variants={fadeInUp}
          initial="initial"
          animate="final"
        >
          <h5 className="text-2xl font-bold">Professional Experience</h5>
          {/* <div>
            <h5 className="text-xl font-bold">Work</h5>
            <p className="text-xl font-semi-bold">Company Name</p>
            <p className="my-3 text-xl font-inspiration">date</p>
          </div> */}
          {services?.map((service) => (
            <InfoCard key={service.id} service={service} />
          ))}
        </motion.div>
        <motion.div
          className="p-5 rounded-2xl"
          variants={fadeInUp}
          initial="initial"
          animate="final"
        >
          <h5 className="text-2xl font-bold text-white">Education</h5>
          {academics.map((academic) => (
            <EducationCard academic={academic} key={academic.id} />
          ))}
        </motion.div>
      </div>
      {/* Skills */}
      <div className="gap-6 mt-6">
        <div className="grid gap-6 text-white lg:grid-cols-2 md:grid-cols-2">
          <div className="p-5 rounded-2xl">
            <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
            <div>
              {languages?.map((language) => (
                <Bar skillInfo={language} key={language.id} />
              ))}
            </div>
          </div>
          <div className="p-5 rounded-2xl">
            <h5 className="my-3 text-2xl font-bold">Tools</h5>
            {tools?.map((tool) => (
              <Bar skillInfo={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;

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
