import { skillGroups } from "@configs/data";
import { fadeInUp } from "@utils/Animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const MyTechStack = () => {
  const t = useTranslations();
  return (
    <div id="skills" className="grow p-4 mt-5">
      <h5 className="my-3 text-2xl font-bold tracking-wider text-foreground">
        {t("about.tech_stack_title")}
      </h5>
      <motion.div variants={fadeInUp} initial="initial" animate="final">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 transition-all duration-300 group glass-card hover:scale-105 backdrop-blur-md"
            >
              <div className="flex flex-1 items-center gap-3">
                {/* Category Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-foreground/20 rounded-2xl group-hover:scale-110 transition-transform">
                    <group.Icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-lg md:text-xl font-semibold text-center md:text-left mb-8 text-foreground">
                  {t(group.category)}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="custom-tag-bg px-3 py-1 transition-colors cursor-default flex items-center gap-2 hover:animate-ring"
                  >
                    <skill.Icon />
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
