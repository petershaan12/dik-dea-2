"use client";
import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import NavLogin from "./NavLogin";

const NavUserAuth = ({ texts, offcanvasClose }: any) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {isSignedIn ? (
        <>
          <NavLogin user={user} texts={texts} />
          {offcanvasClose && (
            <>
              <Link
                href={"/diabetesCheck"}
                onClick={offcanvasClose}
                className="-mt-12"
              >
                <span className="border border-primary px-5 py-2 rounded-md text-primary hover:bg-red-100 duration-200 transition ease-in-out">
                  {texts.cek}
                </span>
              </Link>
              <Link
                href={"/profil"}
                onClick={offcanvasClose}
                className="hover:underline"
              >
                {texts.profil}
              </Link>
              <Link href={"/#"} onClick={offcanvasClose}>
                <SignOutButton>Signout</SignOutButton>
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <Link href={"/sign-in"}>
            <span
              className="border border-primary px-5 py-2 rounded-md text-primary hidden md:block hover:bg-red-100 duration-200 transition ease-in-out"
              onClick={offcanvasClose}
            >
              {texts.masuk}
            </span>
          </Link>
          <Link href={"/sign-up"}>
            <span
              className="bg-primary px-5 py-2 rounded-md text-white mr-5 hidden md:block border border-primary"
              onClick={offcanvasClose}
            >
              {texts.daftar}
            </span>
          </Link>
          {offcanvasClose && (
            <>
              <Link href={"/sign-in"} className="-mt-24">
                <span
                  className="border border-primary px-5 py-2 rounded-md text-primary "
                  onClick={offcanvasClose}
                >
                  {texts.masuk}
                </span>
              </Link>
              <Link href={"/sign-up"}>
                <span
                  className="bg-primary px-5 py-2 rounded-md text-white"
                  onClick={offcanvasClose}
                >
                  {texts.daftar}
                </span>
              </Link>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NavUserAuth;
