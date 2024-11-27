"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGripLines, FaTimes } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  console.log(open);

  return (
    <html lang="en">
      <title>My Portofolio</title>
      <body className="w-full bg-gray-100 md:container">
        <header className="sticky top-0 w-full h-16 bg-gray-100 z-50">
          <nav className="flex mx-auto justify-between items-center py-5">
            <div>
              <Link
                href={"/"}
                className="text-black text-2xl font-bold ml-5 md:ml-0"
              >
                NA
              </Link>
            </div>
            <div className="invisible  md:flex md:justify-between md:items-center md:gap-12 md:visible">
              <Link
                href={"/"}
                className={pathName === "/" ? "active font-bold" : "font-bold"}
              >
                About
              </Link>
              <Link
                href={"/portofolio"}
                className={
                  pathName === "/portofolio" ? "active font-bold" : "font-bold"
                }
              >
                Portofolio
              </Link>
              <Link
                href={"/certification"}
                className={
                  pathName === "/certification"
                    ? "active font-bold"
                    : "font-bold"
                }
              >
                Certification
              </Link>
              <Link
                href={"/contact"}
                className={
                  pathName === "/contact" ? "active font-bold" : "font-bold"
                }
              >
                Contact
              </Link>
            </div>
            <div
              id="menu"
              className="visible mr-5 block cursor-pointer md:invisible md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open === false && (
                <div className="text-3xl transition duration-1000">
                  <FaGripLines></FaGripLines>
                </div>
              )}
              {open === true && (
                <div className="text-3xl transition duration-1000">
                  <FaTimes></FaTimes>
                </div>
              )}
            </div>
          </nav>
        </header>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className=" fixed top-16 left-0 w-full z-20 md:hidden"
            >
              <div className=" font-bold text-xl uppercase bg-gray-100 text-black pb-5">
                <ul className="flex flex-col justify-center items-center gap-10">
                  <Link
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(!open);
                      }, 100)
                    }
                    href={"/"}
                    className={
                      pathName === "/" ? "active font-bold" : "font-bold"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(!open);
                      }, 100)
                    }
                    href={"/portofolio"}
                    className={
                      pathName === "/portofolio"
                        ? "active font-bold"
                        : "font-bold"
                    }
                  >
                    Portofolio
                  </Link>
                  <Link
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(!open);
                      }, 100)
                    }
                    href={"/certification"}
                    className={
                      pathName === "/certification"
                        ? "active font-bold"
                        : "font-bold"
                    }
                  >
                    Certification
                  </Link>
                  <Link
                    onClick={() =>
                      setTimeout(() => {
                        setOpen(!open);
                      }, 100)
                    }
                    href={"/contact"}
                    className={
                      pathName === "/contact" ? "active font-bold" : "font-bold"
                    }
                  >
                    Contact
                  </Link>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {children}
        {/* <footer>
          <div className="bg-gray-900 h-60"></div>
        </footer> */}
      </body>
    </html>
  );
}
