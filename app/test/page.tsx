import Image from "next/image";

export default function Test() {
  return (
    <div>
      <Image
        className="w-[250px] h-auto"
        src={"/certificate1.jpg"}
        alt={"tes"}
        fill
        sizes="(max-width: 768px) 250px, 400px"
        priority
      ></Image>
    </div>
  );
}
