'use client';
import { FC } from "react";
import { motion, Variants } from "framer-motion";

import { ISkill } from "@configs/data-type";

const Bar: FC<{ skillInfo: ISkill }> = ({
  skillInfo: { Icon, id, title, level },
  ...props
}) => {
  const animate: Variants = {
    initial: {
      width: 0,
    },
    final: {
      width: level,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="flex my-2 text-white rounded-full dark:bg-slate-400 bg-slate-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full custom-tag-bg"
        style={{ width: level }}
        variants={animate}
        initial="initial"
        animate="final"
      >
        <Icon className="w-6 h-6" />
        <p className="px-3 line-clamp-1" data-hover={title}>
          {title}
        </p>
      </motion.div>
    </div>
  );
};

export default Bar;
