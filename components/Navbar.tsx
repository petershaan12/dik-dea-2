import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import classNames from "classnames";
import LocalSwitcher from "./local-switcher";
import UserAuth from "./NavUserAuth";

const Navbar = ({ texts }: any) => {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <div className="pt-7 static z-50">
      <div className="max-w-[1500px] mx-auto w-[80%] flex justify-between items-center pb-5">
        <Link href={"/"} className="flex gap-1 items-center">
          <Image
            src="/Logo.png"
            width={150}
            height={40}
            priority={true}
            alt="DIK DEA logo"
          />
        </Link>

        <div className="flex items-center gap-3 justify-end">
          <Link href={"/about"} className=" hidden md:block hover:underline ">
            {texts.tentang}
          </Link>

          <UserAuth texts={texts} />

          <LocalSwitcher />

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
                className="absolute top-11 right-8 w-16 text-3xl"
                onClick={() => setOffcanvas(false)}
              >
                <IoClose />
              </div>
            </div>
            <div className="flex flex-col mt-2 text-xl gap-12">
              <Link
                href={"/about"}
                onClick={() => setOffcanvas(false)}
                className="hover:underline"
              >
                {texts.tentang}
              </Link>
              <UserAuth
                texts={texts}
                offcanvasClose={() => setOffcanvas(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
