"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portofolio() {
  const elements = [
    {
      title: "Full Stack Flutter FlixID: Simulasi Pemesanan Tiket Bioskop",
      src: "/portofolio/portofolio1.jpg",
      tool: ["Flutter", "Firebase", "Riverpod"],
    },
    {
      title: "Web Portofolio with NextJS and Vercel Hosting",
      src: "/portofolio/portofolio2.png",
      tool: ["Javascript", "Tailwind CSS"],
    },
    {
      title: "Web Portofolio with Flutter and Firebase Hosting",
      src: "/portofolio/portofolio3.png",
      tool: ["Flutter", "Firebase"],
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
          Portofolio
        </h1>

        <div className="flex w-full justify-center items-center ">
          <div className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {elements.map((e, index) => (
                <Card key={index} className="w-full pb-4 shadow-xl">
                  <CardHeader>
                    <CardTitle className="bg-gray-300 w-full h-60 mb-4 relative">
                      <Image src={e.src} alt={""} fill></Image>
                    </CardTitle>
                    <CardDescription className="mb-2">
                      <h3>{e.title}</h3>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mb-2">
                    <p>
                      Dibuat menggunakan framework flutter dengan menerapkan
                      clean architecture sehingga code lebih mudah dibaca dan di
                      maintain.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="px-5 py-2 bg-gray-300 rounded-xl">
                      Flutter
                    </div>
                    <div className="px-5 py-2 bg-gray-300 rounded-xl">
                      Firebase
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
