"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Image from "next/image";

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
            <div className="w-52 h-52 mb-6 relative bg-gray-200 rounded-full m-auto md:w-60 md:h-60 md:mb-0 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
              <Image
                src={"/profile/profile.jpg"}
                alt={""}
                fill
                className="rounded-full"
              ></Image>
            </div>
          </div>

          {/* Another */}
          <div className="md:w-2/3 lg:w-1/2">
            <h2 className="font-light text-gray-500 text-xl mb-2 tracking-widest md:mb-6 md:text-2xl xl:text-3xl">
              Nur Alam
            </h2>
            <h1 className="font-extrabold text-center text-4xl mb-6 md:mb-10 md:text-5xl md:font-extrabold md:text-start lg:text-6xl xl:text-7xl">
              <Typewriter
                options={{
                  strings: [
                    "Android Developer",
                    "IOS Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-5 tracking-widest text-xs text-gray-400 md:text-sm md:mb-6 md:pr-8 lg:text-base xl:text-lg">
              I am a Front End Developer with a good understanding of Flutter
              and React JS framework, I have experience in UI design, API
              integration, clean code writing and knowledge of solid principles
              and clean architecture.
            </p>
            <div className="flex justify-center gap-6 md:justify-start">
              <a
                href="https://drive.google.com/file/d/1dgtMpXD7hfdHWOgjbWlCbhzZJrNsYTow/view?usp=drive_link"
                target="blank"
                className="px-6 py-2 bg-gray-900 rounded-xl mt-4 text-white text-sm xl:px-10 xl:py-3 hover:bg-gray-700"
              >
                Download CV
              </a>

              <Link href={"/contact"}>
                <button className="px-6 py-2 bg-white rounded-xl mt-4 border border-gray-900 text-sm xl:px-10 xl:py-3 hover:bg-gray-200">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
