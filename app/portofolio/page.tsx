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
      title: "Aplikasi Komunitas Catur Kabupaten Tasikmalaya",
      src: "/portofolio/portofolio1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aut ipsum nam fugiat quisquam, enim provident iusto eosullam dolorum officiis ea rem natus. Iusto incidunt non omnis veniam facilis numquam?",
      preview: "https://github.com/alam1906/percasi_tasikmalaya",
      github: "https://github.com/alam1906/percasi_tasikmalaya",
    },
    {
      title: "Web Portofolio with NextJS and Vercel Hosting",
      src: "/portofolio/portofolio2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aut ipsum nam fugiat quisquam, enim provident iusto eosullam dolorum officiis ea rem natus. Iusto incidunt non omnis veniam facilis numquam?",
      preview: "https://my-portofolio-smoky-rho.vercel.app",
      github: "https://github.com/alam1906/my_portofolio",
    },
    {
      title: "Web Portofolio with Flutter and Firebase Hosting",
      src: "/portofolio/portofolio3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aut ipsum nam fugiat quisquam, enim provident iusto eosullam dolorum officiis ea rem natus. Iusto incidunt non omnis veniam facilis numquam?",
      preview: "https://myportofolio-36d44.web.app",
      github: "https://github.com/alam1906/my_portofolio_flutter",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mt-5 mx-5 md:mx-0"
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
                  <CardContent className="mb-5">
                    <p className="text-gray-600">{e.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex justify-center items-center mx-auto gap-4 w-full pr-5">
                      <a
                        href={e.preview}
                        target="blank"
                        className="px-5 py-2 bg-blue-700 w-full rounded-lg text-center font-bold text-white cursor-pointer"
                      >
                        Preview
                      </a>
                      <a
                        href={e.github}
                        target={index.toString()}
                        className="px-5 py-2 bg-white w-full rounded-lg text-center font-bold text-blue-700 cursor-pointer"
                      >
                        Github
                      </a>
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
