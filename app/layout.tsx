import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-5/6 mx-auto bg-gray-100 xl:w-2/3">
        <header className="sticky top-0 w-full h-16 backdrop-blur-sm">
          <nav className="flex mx-auto justify-between items-center py-5">
            <Link href={"/"} className="text-black text-lg font-bold">
              ALAM
            </Link>
            <div>
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
