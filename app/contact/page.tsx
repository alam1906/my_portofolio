"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-[calc(100dvh-4rem)] flex justify-center items-start w-full md:items-center mt-5 md:mt-0"
      >
        <div className="w-full mx-5 md:mx-0">
          <h1 className="text-4xl font-extrabold text-center mb-10 md:mb-20">
            Contact
          </h1>
          <div className="md:flex flex-row-reverse justify-between">
            <form action="" className="md:w-1/2">
              <div className="mb-2">
                <label htmlFor="nama" className="font-bold block mb-1">
                  Username
                </label>
                <input
                  id="nama"
                  type="text"
                  className="px-3 py-2 bg-white border-white rounded w-full focus:border-blue-500 focus:outline-blue-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="font-bold block mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="px-3 py-2 bg-white border-white rounded w-full focus:border-blue-500 focus:outline-blue-500"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="font-bold block mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  id="message"
                  className="px-3 resize-none py-2 bg-white border-white rounded w-full focus:border-blue-500 focus:outline-blue-500"
                />
              </div>
              <button
                className="shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full w-full mt-2"
                type="button"
              >
                Submit
              </button>
            </form>

            <div className="flex items-center mt-4 md:hidden">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="md:w-1/2">
              <div className="text-center text-2xl font-bold mt-4 md:text-start md:mt-0">
                My Social Media Account
              </div>
              <div className="text-gray-600 mt-2 text-center md:pr-20 md:text-start">
                For any service and work you can contact with me by send an
                email or by our social media account.
              </div>
              <div className="flex justify-center items-center gap-8 mt-3 md:justify-start md:mt-6">
                <a href="https://github.com/alam1906" target="blank1">
                  <FaGithub fontSize={35} color="blue" />
                </a>
                <a href="https://github.com/alam1906" target="blank2">
                  <FaFacebook fontSize={35} color="blue" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nur-alam-26460a240/"
                  target="blank3"
                >
                  <FaLinkedin fontSize={35} color="blue" />
                </a>
                <a href="https://www.instagram.com/nur.alam_x" target="blank4">
                  <FaInstagram fontSize={35} color="blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
