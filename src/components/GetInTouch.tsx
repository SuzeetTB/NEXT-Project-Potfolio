"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const GetInTouch = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for /api/contact would go here
    console.log("Form Submitted:", formData);
    alert("Message sent! (Mockup)");
  };

  return (
    <section className="py-6 max-w-7xl mx-auto w-full px-4">
      <div className="flex items-center gap-2 mb-4 text-2xl font-bold text-foreground">
        <FiMail />
        <h2>Get In Touch</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 glass-card p-8 rounded-xl shadow-lg md:w-4/6"
        >
          <h3 className="text-xl text-foreground font-semibold mb-2">
            Send Me a Message
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Have a project in mind? Fill out the form below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="gap-y-1">
                <label className="text-base font-bold text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Hari Bahadur"
                  className="w-full p-2 rounded custom-tag-bg focus:ring-2 focus:ring-foreground outline-none"
                  required
                />
              </div>
              <div className="gap-y-1">
                <label className="text-base font-bold text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hari@example.com"
                  className="w-full p-2 rounded custom-tag-bg focus:ring-2 focus:ring-foreground outline-none"
                  required
                />
              </div>
            </div>

            <div className="gap-y-1">
              <label className="text-base font-bold text-foreground uppercase">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full p-2 rounded custom-tag-bg focus:ring-2 focus:ring-foreground outline-none resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 glass-card p-2 my-4 rounded-lg font-medium text-foreground hover:scale-105 duration-200 transform"
            >
              <FaMessage /> Send Message
            </button>
          </form>
        </motion.div>

        {/* Right: Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-background/50 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between md:w-2/5"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t("contact")}</h3>
            <div className="flex items-start gap-4 py-3">
              <AiFillMail className="mt-1" />
              <div>
                <p className="text-xs opacity-80 uppercase">{t("email")}</p>
                <p className="font-medium">{t("profile.email")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-3">
              <AiFillPhone className="mt-1" />
              <div>
                <p className="text-xs opacity-80 uppercase">{t("phone")}</p>
                <p className="font-medium">{t("profile.phone")}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 py-3">
              <FaLocationDot className="mt-1" />
              <div>
                <p className="text-xs opacity-80 uppercase">{t("location")}</p>
                <p className="font-medium">
                  {t("profile.street_address")}-{t("profile.ward")},
                  {t("profile.city")},{t("profile.country")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-teal-500 text-white">
            <p className="text-sm font-bold mb-4">{t("connect")}</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-teal-200 transition-colors">
                <AiFillGithub />
              </a>
              <a href="#" className="hover:text-teal-200 transition-colors">
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.youtube.com/@zeit_su?sub_confirmation=1"
                className="hover:text-teal-200 transition-colors"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.youtube.com/@zeit_su?sub_confirmation=1"
                className="hover:text-teal-200 transition-colors"
              >
                <AiFillMail />
              </a>
              <a
                href="https://www.youtube.com/@zeit_su?sub_confirmation=1"
                className="hover:text-teal-200 transition-colors"
              >
                <AiFillPhone />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
