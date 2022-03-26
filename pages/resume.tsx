import React, { useEffect } from "react";
import Bar from "../components/bar/Bar";
import EducationCard from "../components/serviceCard/EducationCard";
import ServiceCard from "../components/serviceCard/ServiceCard";
import {
  academics,
  languages,
  tools,
  services as AllServices,
} from "../configs/data";
import { motion } from "framer-motion";
import { fadeInUp, pageSwitchAnimation } from "../utils/Animation";
import { Iservices } from "../configs/data-type";
import Head from "next/head";
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
      <Head>
        <title>Suzeet Twanabasu | Resume</title>
        <meta
          name="description"
          content="Full Stack Web Developer looking for job "
        />
      </Head>
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
            <ServiceCard key={service.id} service={service} />
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
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../configs/locales/${locale}.json`)).default,
    },
  };
}
