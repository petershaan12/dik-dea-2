import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className=" mx-auto w-[80%]  flex items-center text-left bg-logo-transparent lg:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_1rem]">
      <div className="py-48 w-full text-center ">
        <p className="text-lg">
          😭 We could not find the page you were looking for{" "}
        </p>
        <p>
          Go back to the{" "}
          <Link href="/" className="font-bold text-2xl  shadow-sm">
            Dashboard
          </Link>
        </p>
      </div>
    </section>
  );
}
