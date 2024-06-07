"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import classNames from "classnames";

const NavLogin = ({ user, dir, texts }: any) => {
  const dirs: any = {
    horizontal: "justify-center space-x-10 py-20 ",
    vertical: "flex-col space-y-6",
  };
  const pickedDir = dirs[dir];
  return (
    <div className={classNames("flex items-center gap-3 ", pickedDir)}>
      <Link href={"/diabetesCheck"} className="hidden md:block">
        <span className=" border border-primary px-5 py-2 rounded-md text-primary hover:bg-red-100   duration-200 transition ease-in-out">
          {texts.cek}
        </span>
      </Link>
      <Link href={"/profil"} className="hidden md:block">
        <span className="hover:underline cursor-pointer">
          {user?.firstName}
        </span>
      </Link>
      <div className="hidden md:block">
        <UserButton afterSignOutUrl="/#" />
      </div>
    </div>
  );
};

export default NavLogin;
