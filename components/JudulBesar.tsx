"use client";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";
import { useUser } from "@clerk/nextjs";

const JudulBesar = ({ texts }: any) => {
  const { isLoaded, user, isSignedIn } = useUser();
  if (!isLoaded) {
    return "";
  }
  return (
    <>
      <div className="space-y-2 pt-12 md:pt-20">
        {isSignedIn ? (
          <h1 className="text-2xl  sm:text-5xl md:text-6xl lg:text-6xl/none font-bold tracking-tighter text-dark">
            {texts.welcome}
            <span className="text-primary">{user.firstName}</span> 👋
          </h1>
        ) : (
          <></>
        )}
        <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-6xl/none text-dark">
          {texts.siap}{" "}
          <TypeAnimation
            sequence={[
              texts.hari,
              2500,
              texts.besok,
              2500,
              texts.sekarang,
              2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-600">{texts.instrument}</p>
      </div>
      <div className="mt-6">
        <Link
          href={"/diabetesCheck"}
          className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-red-700 px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/80"
        >
          {texts.cek}
        </Link>
        {isSignedIn ? (
          <Link
            href={"/profil"}
            className=" ml-2 inline-flex items-center justify-center rounded-md  border border-primary hover:bg-red-100  px-8 py-3 text-sm font-medium text-primary  shadow transition-colors duration-500 hover:bg-primary/80"
          >
            {texts.lihat}
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default JudulBesar;
