"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
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
    <div className="pt-7">
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

        <div className="md:block hidden text-nowrap "></div>
        <div className="flex items-center gap-3 justify-end">
          <Link href={"/about"} className=" hidden md:block">
            Tentang Kami
          </Link>
          <div className="w-9/12 md:hidden text-right text-2xl cursor-pointer">
            <IoMenuSharp onClick={() => setOffcanvas(true)} />
          </div>
          {isSignedIn ? (
            <>
              <NavLogin user={user} />
            </>
          ) : (
            <>
              <Link href={"/sign-in"}>
                <span className=" border border-primary px-5 py-2 rounded-md text-primary">
                  Sign In
                </span>
              </Link>
              <Link href={"/sign-up"}>
                <span className="bg-primary px-5 py-2 rounded-md text-white mr-5">
                  Sign up
                </span>
              </Link>
            </>
          )}
          <div
            className={classNames(
              "fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
              offcanvas ? "right-0" : "-right-full"
            )}
          >
            <Image
              src="/x.svg"
              width={25}
              height={25}
              alt="menu_icon"
              className="absolute top-8 right-8 w-8"
              onClick={() => setOffcanvas(false)}
            />
            <NavLogin user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
