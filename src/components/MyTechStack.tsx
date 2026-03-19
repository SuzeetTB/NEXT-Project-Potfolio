import { skillGroups } from "@/configs/data";
import { fadeInUp } from "@/utils/Animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const MyTechStack = () => {
  const t = useTranslations("about");
  return (
    <div
      className="grow p-4 mt-5"
      style={{
        marginRight: "-1.5rem",
        marginLeft: "-1.5rem",
      }}
    >
      <h5 className="my-3 text-xl font-bold tracking-wider text-white dark:text-light-300">
        {t("tech_stack_title")}
      </h5>
      <motion.div variants={fadeInUp} initial="initial" animate="final">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 transition-all duration-300 group glass-card"
            >
              <div className="flex flex-1 items-center gap-3">
                {/* Category Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform">
                    <group.Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-lg md:text-xl font-semibold text-center md:text-left mb-8 text-slate-200">
                  {group.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="custom-tag-bg px-3 py-1 text-sm font-medium rounded-full  transition-colors cursor-default flex items-center gap-2 hover:animate-bounce"
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
