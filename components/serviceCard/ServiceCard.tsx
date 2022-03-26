import { motion } from "framer-motion";
import React from "react";
import { Iservices } from "../../configs/data-type";
import { fadeInUp } from "../../utils/Animation";

const ServiceCard: React.FC<{ service: Iservices }> = ({
  service: { Icon, category, id, title, image, description },
  ...props
}) => {
  const createMarkup = (description: string) => ({ __html: description });

  return (
    <motion.div
      className="flex items-center p-2 my-2 space-x-4 rounded-lg lg:col-span-1 bg-gradient-to-r from-light-400 to-light-300 dark:from-zeit-950 dark:to-zeit-800"
      variants={fadeInUp}
    >
      <Icon className="w-12 h-12" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup(description)} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
