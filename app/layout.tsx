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
  let isTrue = true;
  function handleClick() {
    console.log(isTrue);
    const navigation = document.getElementById("navigation");
    const id1 = document.getElementById("1");
    const id2 = document.getElementById("2");
    const id3 = document.getElementById("3");
    if (isTrue === true) {
      id1?.classList.add("rotate-45");
      id3?.classList.add("-rotate-45");
      id2?.classList.add("invisible");
      navigation?.classList.remove("hidden");
      window.scrollTo({ top: 0 });
      document.body.classList.add("overflow-y-hidden");
      isTrue = !isTrue;
    } else {
      id1?.classList.remove("rotate-45");
      id3?.classList.remove("-rotate-45");
      id2?.classList.remove("invisible");
      navigation?.classList.add("hidden");
      document.body.classList.remove("overflow-y-hidden");
      isTrue = !isTrue;
    }
  }

  function unHide() {
    const navigation = document.getElementById("navigation");
    const id1 = document.getElementById("1");
    const id2 = document.getElementById("2");
    const id3 = document.getElementById("3");
    id1?.classList.remove("rotate-45");
    id3?.classList.remove("-rotate-45");
    setTimeout(() => {
      id2?.classList.remove("invisible");
      navigation?.classList.add("hidden");
    }, 350);
  }

  return (
    <html lang="en">
      <title>My Portofolio</title>
      <body className="w-5/6 mx-auto bg-white xl:w-2/3">
        <header className="sticky top-0 w-full h-16 backdrop-blur-sm z-50">
          <nav className="flex mx-auto justify-between items-center py-5">
            <div>
              <Link href={"/"} className="text-black text-2xl font-bold">
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
              className="visible block cursor-pointer md:invisible md:hidden"
              onClick={handleClick}
            >
              <span
                className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"
                id="1"
              ></span>
              <span
                className="w-[30px] h-[2px] my-2 block bg-black transition duration-0 ease-in-out origin-bottom-left"
                id="2"
              ></span>
              <span
                className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"
                id="3"
              ></span>
            </div>
          </nav>
        </header>
        <section
          className="hidden text-center absolute z-50 backdrop-blur-sm w-full h-screen right-0 bg-white md:hidden"
          id="navigation"
        >
          <div className="flex flex-col gap-6">
            <Link
              onClick={unHide}
              href={"/"}
              className={
                pathName === "/"
                  ? "active font-bold block text-2xl"
                  : "font-bold block text-2xl"
              }
            >
              About
            </Link>
            <Link
              onClick={unHide}
              href={"/portofolio"}
              className={
                pathName === "/portofolio"
                  ? "active font-bold block text-2xl"
                  : "font-bold block text-2xl"
              }
            >
              Portofolio
            </Link>
            <Link
              onClick={unHide}
              href={"/certification"}
              className={
                pathName === "/certification"
                  ? "active font-bold block text-2xl"
                  : "font-bold block text-2xl"
              }
            >
              Certification
            </Link>
            <Link
              onClick={unHide}
              href={"/contact"}
              className={
                pathName === "/contact"
                  ? "active font-bold block text-2xl"
                  : "font-bold block text-2xl"
              }
            >
              Contact
            </Link>
          </div>
        </section>
        {children}
        {/* <footer>
          <div className="bg-gray-900 h-60"></div>
        </footer> */}
      </body>
    </html>
  );
}
