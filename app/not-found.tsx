import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen bg-logo-transparent md:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_3rem] justify-center items-center   ">
      <section className=" container mx-auto px-12">
        <p className="text-lg">
          😭 We could not find the page you were looking for{" "}
        </p>
        <p>
          Go back to the{" "}
          <Link href="/" className="font-bold text-2xl  shadow-sm">
            Dashboard
          </Link>
        </p>
      </section>
    </main>
  );
}
