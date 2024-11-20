"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Certification() {
  const elements = ["1", "2", "3", "4", "5", "6", "7"];
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
                    <CardTitle className="bg-gray-300 w-full h-60 mb-4"></CardTitle>
                    <CardDescription className="mb-2">
                      <h3>
                        Full Stack Movie App Flutter and Firebase with Clean
                        Arhictecture Patterns and then i hae
                      </h3>
                    </CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <div className="flex gap-2 mt-2">
                      <div className="font-bold">Skills : </div>
                      <div>Flutter.</div>
                      <div>Firebase.</div>
                      <div>Clean Architecture.</div>
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
