import { experiences } from "@/configs/data";
import { motion } from "framer-motion";
import InfoCard from "./serviceCard/ServiceCard";
import { stagger } from "../utils/Animation";
import { useTranslations } from "next-intl";

export const MyExperience = () => {
  const t = useTranslations("about");

  return (
    <div
      className="grow p-4 mt-5"
      style={{
        marginRight: "-1.5rem",
        marginLeft: "-1.5rem",
      }}
    >
      <h5 className="my-3 text-xl font-bold tracking-wider text-white dark:text-light-300">
        {t("exp_title")}
      </h5>
      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        variants={stagger}
        initial="initial"
        animate="final"
      >
        {experiences &&
          experiences?.map((exp) => (
            <InfoCard service={exp} key={exp.id} />
          ))}
      </motion.div>
    </div>
  );
};
