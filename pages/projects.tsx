import { motion } from "framer-motion";
import React from "react";
import ProjectsTabBar from "../components/NavBar/ProjectsTabBar";
import ProjectCard from "../components/serviceCard/ProjectCard";
import { projects as projectsCopy } from "../configs/data";
import { Category } from "../configs/data-type";
import { pageSwitchAnimation, stagger } from "../utils/Animation";
import Head from "next/head";
type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = React.useState(projectsCopy);
  const [activeTab, setActiveTab] = React.useState("all");
  const [projectSelected, setProjectSelected] = React.useState<number | null>(
    null
  );
  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsCopy);
      setActiveTab(category);
      return;
    }
    setProjects(
      projectsCopy.filter((project) => project.category.includes(category))
    );
    setActiveTab(category);
  };
  return (
    // overflow-y-scroll
    <motion.div
      variants={pageSwitchAnimation}
      initial="initial"
      animate="final"
      exit="exit"
      className="px-5 py-2"
      // style={{
      //   height: "65vh",
      // }}
    >
      <Head>
        <title>Suzeet Twanabasu | Projects</title>
        <meta
          name="description"
          content="Full Stack Web Developer looking for job "
        />
      </Head>
      <ProjectsTabBar
        handleFilterCategory={handleFilterCategory}
        active={activeTab as Category}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 overflow-auto"
        style={{
          height: "65vh",
        }}
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

/*
 *Locale is passed as a prop to the component
 */
export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../configs/locales/${locale}.json`)).default,
    },
  };
}
