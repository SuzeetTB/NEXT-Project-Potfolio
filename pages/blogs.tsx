import { motion } from "framer-motion";
import React from "react";
import { pageSwitchAnimation } from "../utils/Animation";
import Head from "next/head";
type Props = {};

const Blogs = (props: Props) => {
  return (
    <motion.div
      className="px-2 py-4"
      variants={pageSwitchAnimation}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <Head>
        <title>Suzeet Twanabasu | Blogs</title>
        <meta
          name="description"
          content="Full Stack Web Developer looking for job "
        />
      </Head>
      <div className="w-full h-full col-md-12">
        <div className="emdeb-responsive">
          <iframe
            className="w-full overflow-scroll"
            style={{
              height: "65vh",
            }}
            src={"https://zeitsupoems.blogspot.com/"}
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;

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
