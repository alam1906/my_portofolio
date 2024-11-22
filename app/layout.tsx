"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className="w-5/6 mx-auto bg-gray-100 xl:w-2/3">
        <header className="sticky top-0 w-full h-16 backdrop-blur-sm z-50">
          <nav className="flex mx-auto justify-between items-center py-5">
            <div>
              <Link href={"/"} className="text-black text-2xl font-bold">
                NA
              </Link>
            </div>
            <div className="invisible md:flex justify-between items-center gap-12 md:visible">
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
            <div className="visible block md:invisible md:hidden">
              <span className="w-[25px] h-[2px] my-1 block bg-black"></span>
              <span className="w-[25px] h-[2px] my-1 block bg-black"></span>
              <span className="w-[25px] h-[2px] my-1 block bg-black"></span>
            </div>
          </nav>
        </header>
        {children}
        {/* <footer>
          <div className="bg-gray-900 h-60"></div>
        </footer> */}
      </body>
    </html>
  );
}
