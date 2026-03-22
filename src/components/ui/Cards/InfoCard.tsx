import { motion } from "framer-motion";
import { FC } from "react";

import { fadeInUp } from "@utils/Animation";
import useDeviceType from "@hooks/useDeviceType";
import { IExperience } from "@configs/data-type";

const InfoCard: FC<{ exp: IExperience }> = ({
  exp: { Icon, role, id, title, image, description, location, date },
  ...props
}) => {
  const createMarkup = (description: string) => ({ __html: description });
  const { isMobile } = useDeviceType();

  return (
    <motion.div
      className="flex items-center p-4 my-2 gap-x-4 rounded-lg lg:col-span-1 glass-card hover:scale-y-110 duration-300"
      variants={fadeInUp}
    >
      <Icon
        className={`${isMobile ? "w-20 h-20" : "w-12 h-12"} + text-foreground`}
      />
      <div className="w-auto ">
        {role && <h2 className="text-2xl font-bold text-foreground">{role}</h2>}
        <h4 className="text-lg font-bold text-foreground">
          {title}
          {location && <span className="text-xs">, {location}</span>}
        </h4>
        {date && isMobile && (
          <h1 className="text-sm font-bold text-muted-foreground">{date}</h1>
        )}

        <p
          className="text-foreground text-justify"
          dangerouslySetInnerHTML={createMarkup(description)}
        />
      </div>
    </motion.div>
  );
};

export default InfoCard;
