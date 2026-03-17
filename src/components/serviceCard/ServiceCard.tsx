import { motion } from "framer-motion";
import { FC } from "react";
import { Iservices } from "../../configs/data-type";
import { fadeInUp } from "../../utils/Animation";
import useDeviceType from "@/hooks/useDeviceType";

const InfoCard: FC<{ service: Iservices }> = ({
  service: { Icon, category, id, title, image, description },
  ...props
}) => {
  const createMarkup = (description: string) => ({ __html: description });
  const { isMobile } = useDeviceType();

  return (
    <motion.div
      className="flex items-center p-4 my-2 gap-x-4 rounded-lg lg:col-span-1 bg-linear-to-r from-light-400 to-light-300 dark:from-zeit-600 dark:to-zeit-800"
      variants={fadeInUp}
    >
      <Icon
        className={`${isMobile ? "w-20 h-20" : "w-12 h-12"} + dark:text-light-300 text-light-900`}
      />
      <div className="w-auto">
        <h4 className="font-bold text-light-900 dark:text-light-300">
          {title}
        </h4>
        <p
          className="dark:text-gray-300 text-zinc-700"
          dangerouslySetInnerHTML={createMarkup(description)}
        />
      </div>
    </motion.div>
  );
};

export default InfoCard;
