import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <main className="flex min-h-full  bg-logo-transparent bg-no-repeat bg-[bottom_right_3rem] items-center justify-center p-32  ">
      <div className="w-6/12">
        <h1 className="text-5xl font-semibold">
          DRAFT INSTRUMEN DETEKSI DINI DIABETES MELLITUS PADA REMAJA
        </h1>
        <button className="bg-[#FD8087] px-5 py-2 rounded-full mt-12">
          <Link href={"/diabetes"}> Yuk Cobain Selagi Gratis</Link>
        </button>
      </div>
      <div className="w-1/12"></div>
      <div className="w-auto ">
        <Image
          src="/homepage-1.png"
          width={657}
          height={800}
          alt="Hompage Image"
        />
      </div>
    </main>
  );
};

export default Welcome;
