import { motion } from "framer-motion";
import { FC } from "react";

import { fadeInUp } from "@utils/Animation";
import useDeviceType from "@hooks/useDeviceType";
import { IExperience } from "@configs/data-type";
import { useTranslations } from "next-intl";

const InfoCard: FC<{ exp: IExperience }> = ({
  exp: { Icon, role, id, title, image, description, location, date },
  ...props
}) => {
  const { isMobile } = useDeviceType();
  const t = useTranslations();

  return (
    <motion.div
      className="flex items-center p-4 my-2 gap-x-4 rounded-lg lg:col-span-1 glass-card hover:scale-y-110 duration-300"
      variants={fadeInUp}
    >
      <Icon
        className={`${isMobile ? "w-20 h-20" : "w-12 h-12"} + text-foreground`}
      />
      <div className="w-auto ">
        {role && (
          <h2 className="text-2xl font-bold text-foreground">{t(role)}</h2>
        )}
        <h4 className="text-lg font-bold text-foreground">
          {t(title)}
          {location && <span className="text-xs">, {t(location)}</span>}
        </h4>
        {date && isMobile && (
          <h1 className="text-sm font-bold text-muted-foreground">{t(date)}</h1>
        )}

        <p className="text-foreground text-justify">
          {t.rich(description, {
            em: (chunks) => <em className="text-foreground">{chunks}</em>,
            b: (chunks) => <b className="text-foreground">{chunks}</b>,
          })}
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
