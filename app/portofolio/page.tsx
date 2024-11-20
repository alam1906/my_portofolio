"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portofolio() {
  const elements = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <>
      <div className=" mt-5">
        <h1 className="text-4xl font-extrabold text-center mb-10">
          Portofolio
        </h1>

        <div className="flex w-full justify-center items-center">
          <div className="">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {elements.map((e, index) => (
                <Card key={index} className="w-full pb-4 shadow-xl">
                  <CardHeader>
                    <CardTitle className="bg-gray-300 w-full h-60 mb-4"></CardTitle>
                    <CardDescription className="mb-2">
                      <h3>Aplikasi Komunitas Catur Tasikmalaya</h3>
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
      </div>
    </>
  );
}
