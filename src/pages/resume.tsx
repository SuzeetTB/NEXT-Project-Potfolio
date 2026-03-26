import { FC, useEffect, useState } from "react";
import Bar from "../components/ui/Bar";
import EducationCard from "../components/ui/Cards/EducationCard";
import InfoCard from "../components/ui/Cards/InfoCard";
import {
  academics,
  languages,
  tools,
  experiences,
  trainingsAndParticipations,
} from "../configs/data";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../utils/Animation";
import { GetStaticProps } from "next/types";
import { getI18nProps } from "@/lib/i18n";
import MyHeader from "@/components/layout/MyHeader";
import { IExperience } from "@/configs/data-type";
import { Flex, Timeline } from "antd";
import useDeviceType from "@/hooks/useDeviceType";
import { useTranslations } from "next-intl";
import MyAchievements from "@/components/MyAchievements";

const Resume: FC = () => {
  const { isMobile } = useDeviceType();
  const t = useTranslations();
  const [services, setServices] = useState<Array<IExperience>>();
  useEffect(() => {
    setServices(experiences.slice(0, 2));
  }, []);

  return (
    <div>
      <MyHeader subtitle={"Resume"} />
      {/* Experience and education */}
      <div id="participations" className="flex flex-col gap-6 px-5 my-4 mt-18">
        <motion.div variants={stagger} initial="initial" animate="final">
          <h1 className="text-teal-600 dark:text-primary md:text-3xl md:font-extrabold text-lg text-center mt-8 my-4 font-bold">
            {t("resume.trainAndParticipations")}
          </h1>
          <Timeline
            className="ml-2 md:ml-8 w-auto"
            mode={isMobile ? "left" : "alternate"} // Options: 'left', 'alternate', 'right'
            variant="filled"
            items={trainingsAndParticipations?.map((exp) => ({
              // The label usually shows the date on the opposite side (if mode="alternate")
              label: isMobile ? (
                ""
              ) : (
                <span className="text-foreground font-mono">{t(exp.date)}</span>
              ),
              dot: (
                <div className="size-4 rounded-full bg-foreground shadow-[0_0_10px_var(--color-cyan-400)] mt-2" />
              ),
              tail: { style: { background: "white" } },
              children: <InfoCard exp={exp} key={exp.id} />,
            }))}
          />
        </motion.div>

        <motion.div
          className="p-5 text-white rounded-2xl"
          variants={fadeInUp}
          initial="initial"
          animate="final"
        >
          <MyAchievements />
        </motion.div>

        <motion.div
          className="p-5 rounded-2xl"
          variants={fadeInUp}
          initial="initial"
          animate="final"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-teal-600 dark:text-primary tracking-tight">
            {t("resume.academics_title")}
            </h2>
            <p className="mt-2 text-lg text-gray-500 dark:text-muted-foreground">
            {t("resume.academics_subtitle")}
            </p>
          </div>
          <Flex vertical>
            <Timeline
              className="m-2 md:m-8 w-auto my-9"
              mode={isMobile ? "left" : "alternate"} // Options: 'left', 'alternate', 'right'
              variant="filled"
              orientation="horizontal"
              items={academics?.map((academic) => ({
                // The label usually shows the date on the opposite side (if mode="alternate")
                label: isMobile ? (
                  ""
                ) : (
                  <span className="text-foreground font-mono">
                    {t(academic.year)}
                  </span>
                ),
                dot: (
                  <div className="size-4 rounded-full bg-foreground shadow-[0_0_10px_var(--color-cyan-400)] mt-2" />
                ),
                tail: { style: { background: "white" } },
                children: (
                  <EducationCard academic={academic} key={academic.id} />
                ),
              }))}
            />
          </Flex>
        </motion.div>
      </div>
      {/* Skills */}
      {/* <div className="gap-6 mt-6">
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
      </div> */}
    </div>
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
