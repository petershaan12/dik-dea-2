import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Halaman Tidak Ditemukan",
};

export default function notFound() {
  const t = useTranslations("NotFoundPage");
  return (
    <section className=" mx-auto w-[80%]  flex items-center text-left bg-logo-transparent lg:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_1rem]">
      <div className="py-48 w-full text-center ">
        <p className="text-lg">{t("not-found")}</p>
        <p>
          {t("go-back")}
          <Link href="/" className="font-bold text-2xl  shadow-sm">
            {t("dashboard")}
          </Link>
        </p>
      </div>
    </section>
  );
}
