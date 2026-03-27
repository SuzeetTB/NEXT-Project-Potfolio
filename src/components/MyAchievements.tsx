'use client';
import { motion } from "framer-motion";
import { FaFileSignature, FaMedal } from "react-icons/fa";
import { achievements } from "@configs/data";
import { IAchievement } from "@configs/data-type";
import { useTranslations } from "next-intl";

const MyAchievements = () => {
  const t = useTranslations();
  return (
    <section id="achievements" className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-teal-600 dark:text-primary tracking-tight">
        {t("resume.awards_title")}
        </h2>
        <p className="mt-2 text-lg text-gray-500 dark:text-muted-foreground">
        {t("resume.awards_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((award: IAchievement, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className=" p-8 rounded-2xl shadow-lg border glass-card flex flex-col gap-4 relative"
          >
            {/* Type Indicator Icon */}
            <div className="absolute top-4 right-4 text-2xl text-teal-600 dark:text-primary/70">
              {award.type === "Certification" ? (
                <FaFileSignature />
              ) : (
                <FaMedal />
              )}
            </div>

            {/* Achievement / Title Highlight */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug">
              <span className="text-teal-600 dark:text-primary font-bold">
                {t(award.achievement)}
              </span>
              {" at "}
              {t(award.title)}
              {award.location && (
                <span className="block text-sm text-gray-600 dark:text-muted-foreground font-medium">
                  ({t(award.location)})
                </span>
              )}
            </h3>

            {/* Date and Description */}
            <div className="mt-2 flex flex-col gap-3">
              <p className="text-sm font-bold text-teal-700 dark:text-primary opacity-80">
                {t(award.date)}
              </p>
              <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-sm">
                {t(award.description)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyAchievements;
