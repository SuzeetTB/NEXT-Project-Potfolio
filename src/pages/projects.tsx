import { motion } from "framer-motion";
import { useState } from "react";
import { GetStaticProps } from "next/types";

import ProjectsTabBar from "@components/ui/ProjectsTabBar";
import ProjectCard from "@components/ui/Cards/ProjectCard";
import { projects as projectsCopy } from "@configs/data";
import { Category } from "@configs/data-type";
import { pageSwitchAnimation, stagger } from "@utils/Animation";
import { getI18nProps } from "@lib/i18n";
import MyHeader from "@components/layout/MyHeader";

/*
 *Locale is passed as a prop to the component
 */
 export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const normalizedLocale = locale || "en";

  return {
    props: {
      ...(await getI18nProps(normalizedLocale)),
    },
  };
};


type Props = {};

const Projects = (props: Props) => {
  
  const [projects, setProjects] = useState(projectsCopy);
  const [activeTab, setActiveTab] = useState("all");
  const [projectSelected, setProjectSelected] = useState<number | null>(null);
  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsCopy);
      setActiveTab(category);
      return;
    }
    setProjects(
      projectsCopy.filter((project) => project.category.includes(category)),
    );
    setActiveTab(category);
  };
  return (
    <motion.div
      variants={pageSwitchAnimation}
      initial="initial"
      animate="final"
      exit="exit"
      className="px-5 py-2 mt-16"
    >
      <MyHeader subtitle={"Projects"} />
      <ProjectsTabBar
        handleFilterCategory={handleFilterCategory}
        active={activeTab as Category}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 overflow-auto py-8"
        variants={stagger}
        initial="initial"
        animate="final"
      >
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={project.id}
            setProjectSelected={setProjectSelected}
            projectSelected={projectSelected}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;