"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMenuSharp, IoArrowBack } from "react-icons/io5";
import NavLogin from "./NavLogin";
import classNames from "classnames";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [offcanvas, setOffcanvas] = useState(false);

  // In case the user signs out while on the page.
  if (!isLoaded) {
    return "";
  }

  return (
    <div className="pt-7 static z-50">
      <div className="max-w-[1500px] mx-auto w-[80%] flex justify-between items-center pb-5">
        <Link href={"/"} className="flex gap-1 items-center">
          <Image
            src="/Logo.png"
            width={138}
            height={76}
            priority={true}
            alt="DIK DEA logo"
          />
        </Link>

        <div className="flex items-center gap-3 justify-end">
          <Link href={"/about"} className=" hidden md:block">
            Tentang Kami
          </Link>

          {isSignedIn ? (
            <>
              <NavLogin user={user} />
            </>
          ) : (
            <>
              <Link href={"/sign-in"}>
                <span className=" border border-primary px-5 py-2 rounded-md text-primary hidden md:block">
                  Sign In
                </span>
              </Link>
              <Link href={"/sign-up"}>
                <span className="bg-primary px-5 py-2 rounded-md text-white mr-5 hidden md:block">
                  Sign up
                </span>
              </Link>
            </>
          )}
          <div className="w-9/12 md:hidden text-right text-2xl cursor-pointer">
            <IoMenuSharp onClick={() => setOffcanvas(true)} />
          </div>
          <div
            className={classNames(
              "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
              offcanvas ? "right-0" : "-right-full"
            )}
          >
            <div>
              <div
                className="absolute top-11 right-8 w-12 text-2xl"
                onClick={() => setOffcanvas(false)}
              >
                <IoArrowBack />
              </div>
            </div>
            <div className="flex items-center flex-col gap-20 justify-center mt-24 text-xl">
              <Link
                href={"/about"}
                onClick={() => setOffcanvas(false)}
                className="hover:underline"
              >
                Tentang Kami
              </Link>
              {isSignedIn ? (
                <>
                  <Link href={"/tes"} onClick={() => setOffcanvas(false)}>
                    <span className=" border border-primary px-5 py-2 rounded-md text-primary">
                      CEK DIABETES
                    </span>
                  </Link>
                  <Link href={"/profile"} onClick={() => setOffcanvas(false)}>
                    {" "}
                    {user?.firstName}
                  </Link>
                </>
              ) : (
                <>
                  <Link href={"/sign-in"}>
                    <span className=" border border-primary px-5 py-2 rounded-md text-primary">
                      Sign In
                    </span>
                  </Link>
                  <Link href={"/sign-up"}>
                    <span className="bg-primary px-5 py-2 rounded-md text-white">
                      Sign up
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;