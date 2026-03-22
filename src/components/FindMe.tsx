"use client";
import { FaLocationDot } from "react-icons/fa6";

const FindMe = () => {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto custom-card-bg rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-2 mb-4 text-2xl font-bold">
        <FaLocationDot className="text-foreground" />
        <h2>Find Me Here</h2>
      </div>
      <div className="mt-2 rounded-xl overflow-hidden shadow-md h-64 lg:h-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1580763020006!2d85.43405507653831!3d27.681508776197493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bd56cf72671%3A0xb75539bc792b119f!2sZeitsu!5e0!3m2!1sen!2snp!4v1773939379526!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>
    </section>
  );
};

export default FindMe;
