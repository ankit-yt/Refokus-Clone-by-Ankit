import { motion } from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ width, start, hover = false }) {
  return (
    <motion.div whileHover={{ backgroundColor: hover ? "#7443ff" : "none", padding: "25px"}} className={` p-5 rounded-xl  min-h-[30rem] flex flex-col justify-between  bg-zinc-800 ${width}`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center text-xs">
          <h1>Heading</h1>
          <FaArrowRightLong />
        </div>
        <h1 className="text-2xl mt-5 font-medium">Who we are</h1>
      </div>

      <div className="down w-full  ">
        {start && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="px-4 mt-5 text-sm py-2 rounded-full border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {!start &&  <p className="text-sm text-zinc-500 font-medium ">
            Explore what drives our team.
          </p>}
      </div>
    </motion.div>
  );
}

export default Card;
