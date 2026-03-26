import { experiences } from "@/configs/data";
import { motion } from "framer-motion";
import InfoCard from "./ui/Cards/InfoCard";
import { stagger } from "@utils/Animation";
import { useTranslations } from "next-intl";
import { Timeline } from "antd";
import useDeviceType from "@/hooks/useDeviceType";

export const MyExperience = () => {
  const { isMobile } = useDeviceType();
  const t = useTranslations("");

  return (
    <div id="experience" className="grow p-4 mt-5 custom-card-bg rounded-4xl">
      <h5 className="my-3 text-2xl font-bold tracking-wider text-foreground">
        {t("about.exp_title")}
      </h5>
      <motion.div variants={stagger} initial="initial" animate="final">
        <Timeline
          className="ml-2 md:ml-8 w-auto"
          mode={isMobile ? "left" : "alternate"} // Options: 'left', 'alternate', 'right'
          variant="filled"
          items={experiences?.map((exp) => ({
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
    </div>
  );
};
