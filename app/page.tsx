"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-[calc(100vh-4rem)] flex justify-center items-center"
      >
        <div className="text-center md:text-start md:flex flex-row-reverse justify-between items-center">
          {/* Image */}
          <div>
            <div className="w-52 h-52 mb-6 bg-gray-300 rounded-full m-auto md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-96 xl:h-96"></div>
          </div>

          {/* Another */}
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="font-light text-gray-500 text-xl mb-2 tracking-widest md:mb-6 md:text-2xl xl:text-3xl">
              Taufan Taulany
            </h2>
            <h1 className="font-extrabold text-4xl mb-6 md:mb-10 md:text-5xl md:font-extrabold lg:text-6xl xl:text-7xl">
              <span className="md:block">Full Stack </span>
              <span>Developer</span>
            </h1>
            <p className="mb-5 tracking-widest text-xs text-gray-400 md:text-sm md:mb-6 md:pr-8 lg:text-base xl:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              eaque odio rerum eveniet! Doloribus, sunt et facilis qui voluptas
              fugit quae magni hic accusantium optio suscipit incidunt error
              reiciendis possimus.
            </p>
            <div className="flex justify-center gap-6 md:justify-start">
              <button className="px-6 py-2 bg-gray-900 rounded-xl mt-4 text-white text-sm xl:px-10 xl:py-3 hover:bg-gray-700">
                Download CV
              </button>
              <button className="px-6 py-2 bg-white rounded-xl mt-4 border border-gray-900 text-sm xl:px-10 xl:py-3 hover:bg-gray-200">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
