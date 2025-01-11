import { motion } from "motion/react";
import React from "react";

function Marquee({ url, index }) {
  return (
    <div className="flex w-full   py-4 ">
      <motion.div
        initial={index == 1 ? { x: "-100%" } : { x: "0%" }}
        animate={index == 1 ? { x: "0%" } : { x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-20 px-5  flex-shrink-0 "
      >
        {url.map((item, index) => (
          <img className="w-24  flex-shrink-0 " src={item} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={index == 1 ? { x: "-100%" } : { x: "0%" }}
        animate={index == 1 ? { x: "0%" } : { x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex gap-20 px-5  flex-shrink-0 "
      >
        {url.map((item, index) => (
          <img className="w-24  flex-shrink-0 " src={item} alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
