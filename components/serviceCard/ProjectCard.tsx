/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../configs/data-type";
import { fadeInLeft, fadeInUp, stagger } from "../../utils/Animation";

const EducationCard: React.FC<{
  project: IProject;
  projectSelected: number | null;
  setProjectSelected: (id: number | null) => void;
}> = ({
  project: {
    id,
    name,
    image,
    category,
    url_deployed,
    url_github,
    description,
    key_features,
  },
  projectSelected,
  setProjectSelected,
  ...props
}) => {
  return (
    <motion.div
      className="col-span-12 p-2 rounded bg-gradient-to-r from-light-400 to-light-300 dark:from-zeit-950 dark:to-zeit-800 sm:col-span-6 lg:col-span-4"
      variants={fadeInUp}
    >
      <div className="px-1 my-2 overflow-auto ">
        <div className="relative w-full group">
          <Image
            onClick={() => setProjectSelected(id)}
            src={image}
            alt={name}
            height={190}
            width={350}
            layout="responsive"
            className="object-cover object-bottom w-full h-48 my-1 rounded-sm cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center text-xl font-semibold duration-300 bg-gray-700 opacity-0 group-hover:opacity-90">
            <h6 className="my-2 font-bold text-center text-zinc-100 dark:text-zinc-400">
              {name}
            </h6>
          </div>
        </div>
        <p className="justify-around mr-4 text-white">
          <span className="line-clamp-2">{description}</span>
          {/* <span className="ml-4 dark:text-zeit-100">{url_deployed}</span> */}
        </p>
        {projectSelected === id && (
          <div className="absolute top-0 left-0 z-20 grid w-full text-white md:p-8 rounded-b-xl md:grid-cols-2 gap-x-12 bg-gradient-to-r from-black to-slate-800">
            <motion.div
              className="p-4"
              variants={stagger}
              initial="initial"
              animate="final"
            >
              <motion.div variants={fadeInUp}>
                <Image
                  src={image}
                  alt={name}
                  height={250}
                  width={459}
                  layout="responsive"
                  className="object-cover object-bottom w-full h-56 my-1 rounded-sm"
                />
              </motion.div>
              <motion.div
                className="flex justify-center my-4 space-x-3 text-white"
                variants={fadeInUp}
              >
                <a
                  href={url_github}
                  className="flex justify-center px-4 py-2 space-x-3 text-lg rounded w-52 bg-zeit-100 dark:bg-zeit-200"
                >
                  <AiFillGithub className="w-6 h-6 mr-2" />
                  <span>Github</span>
                </a>
                <a
                  href={url_deployed}
                  className="flex justify-center px-4 py-2 space-x-3 text-lg rounded w-52 bg-zeit-100 dark:bg-zeit-200"
                >
                  <AiFillProject className="w-6 h-6 mr-2 " />
                  <span>View Project</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="p-4"
              variants={stagger}
              initial="initial"
              animate="final"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-xl font-medium md:text-2xl"
              >
                {name}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mb-3 text-xl font-medium"
              >
                {description}
              </motion.p>
              <motion.div
                variants={stagger}
                initial="initial"
                animate="final"
                className="flex flex-wrap-reverse mt-5 space-x-2 text-sm tracking-wider"
              >
                {key_features.map((feature, index) => (
                  <motion.span
                    variants={fadeInLeft}
                    key={index}
                    className="px-2 py-1 text-sm rounded bg-zeit"
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <button
              className="absolute p-1 bg-gray-300 rounded-full right-3 top-3 focus:outline-none hover:bg-gray-400"
              onClick={() => setProjectSelected(null)}
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
