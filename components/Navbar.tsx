"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

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
          <Link href={"/about"}>Tentang Kami</Link>
          {isSignedIn ? (
            <div className=" flex items-center gap-3 ">
              {/* <UserMenu /> */}
              <Link href={"/tes"}>
                <span className=" border border-primary px-5 py-2 rounded-md text-primary">
                  CEK DIABETES
                </span>
              </Link>
              <Link href={"/profil"}>
                <span className="hover:underline cursor-pointer">
                  {user.firstName} 👋
                </span>
              </Link>
              <UserButton />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
