"use client";
import Link from "next/link";
import Image from "next/image";
import { AiFillYoutube, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { useUser } from "@clerk/nextjs";

const Hero = () => {
  const { isLoaded, user, isSignedIn } = useUser();
  if (!isLoaded) {
    return "";
  }
  return (
    <section className="w-full text-center ">
      <div className="px-4 md:px-6 mx-auto w-[90%] ">
        <div className="space-y-2 pt-12 md:pt-20">
          {isSignedIn ? (
            <h1 className="text-2xl  sm:text-5xl md:text-6xl lg:text-6xl/none font-bold tracking-tighter text-dark">
              Welcome <span className="text-primary">{user.firstName}</span> 👋
            </h1>
          ) : (
            <></>
          )}
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-7xl/none text-dark">
            Siap Uji Diabetesmu{" "}
            <TypeAnimation
              sequence={[
                "Hari Ini ?",
                2500,
                "Besok ?",
                2500,
                "Sekarang ?",
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-600">
            Instrumen deteksi dini untuk Diabetes Mellitus pada remaja
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={"/diabetesCheck"}
            className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-red-700 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/80"
          >
            Cek Sekarang
          </Link>
        </div>
        <div className="mx-auto flex items-center justify-center py-12">
          <Image
            src="/homepage-1.png"
            width={857}
            height={220}
            className="text-center"
            alt="Hompage Image"
          />
        </div>
        <div className="text-2xl flex justify-center gap-10 text-gray-800 ">
          <a
            href="https://www.youtube.com/results?search_query=Diabetes+melitius"
            target={"_blank"}
          >
            <AiFillYoutube className="mouse-clicked" />
          </a>
          <a href="mailto:dikdea@example.com" target={"_blank"}>
            <AiFillMail className="mouse-clicked" />
          </a>
          <a href="https://www.instagram.com/dikdea " target={"_blank"}>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
