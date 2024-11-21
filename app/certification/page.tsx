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
      src: "/certificate1.jpg",
      skill: ["Flutter", "Firebase", "Riverpod", "State Management"],
    },
    { src: "/certificate2.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate3.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate4.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate5.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate6.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate7.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate8.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate9.jpg", skill: ["Python", "MySql"] },
    { src: "/certificate10.jpg", skill: ["Python", "MySql"] },
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
                      <h3>
                        Full Stack Movie App Flutter and Firebase with Clean
                        Arhictecture Patterns and then i hae
                      </h3>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="flex gap-2 mt-2 pr-4">
                      <div className="font-bold">Skills: </div>
                      <div className="flex flex-wrap gap-2">
                        {e.skill.map((e, index) => (
                          <div>{e}</div>
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
