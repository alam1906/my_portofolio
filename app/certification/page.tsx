"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certification() {
  const elements = [
    {
      title: "Full Stack Flutter FlixID: Simulasi Pemesanan Tiket Bioskop",
      src: "/certificate/certificate1.jpg",

      skill: ["Flutter", "Firebase", "Riverpod"],
    },
    {
      title: "Data Wrangling with Python",
      src: "/certificate/certificate2.jpg",
      skill: ["Python"],
    },
    {
      title: "Python for Data Professional Beginner Part 1",
      src: "/certificate/certificate3.jpg",
      skill: ["Python"],
    },
    {
      title: "Python for Data Professional Beginner Part 2",
      src: "/certificate/certificate4.jpg",
      skill: ["Python"],
    },
    {
      title: "Exploratory Data Analysis with Python for Beginner",
      src: "/certificate/certificate5.jpg",
      skill: ["Python"],
    },
    {
      title: "Introduce Data Science with Python",
      src: "/certificate/certificate6.jpg",
      skill: ["Python"],
    },
    {
      title: "Python Fundamental for Data Science",
      src: "/certificate/certificate7.jpg",
      skill: ["Python"],
    },
    {
      title: "Python for Data Professional Beginner Part 3",
      src: "/certificate/certificate8.jpg",
      skill: ["Python"],
    },
    {
      title: "Fundamental SQL Using SELECT Statement",
      src: "/certificate/certificate9.jpg",
      skill: ["MySql"],
    },
    {
      title: "Fundamental SQL Using FUNCTION and GROUP BY",
      src: "/certificate/certificate10.jpg",
      skill: ["MySql"],
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className=" mt-5"
      >
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Certificate and License
        </h1>

        <div className="flex w-full justify-center items-center">
          <div className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {elements.map((e, index) => (
                <Card key={index} className="w-full pb-4 shadow-xl">
                  <CardHeader>
                    <CardTitle className="bg-gray-300 w-full h-60 mb-4 relative">
                      <Image
                        className="w-[250px] h-auto"
                        src={e.src}
                        alt={"tes"}
                        fill
                        sizes="(max-width: 768px) 250px, 400px"
                        priority
                      ></Image>
                    </CardTitle>
                    <CardDescription className="mb-2">
                      <h3>{e.title}</h3>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex gap-2 mt-2 pr-4">
                      <div className="font-bold">Skills: </div>
                      <div className="flex flex-wrap gap-2">
                        {e.skill.map((e, index) => (
                          <div key={index}>{e}</div>
                        ))}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
