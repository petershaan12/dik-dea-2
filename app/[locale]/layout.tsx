import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";
import { Toaster } from "react-hot-toast";
import classNames from "classnames";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { GoogleTagManager } from "@next/third-parties/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIK DEA",
  description: "cek diabetes",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("NavbarFooter");
  const texts = {
    tentang: t("tentang"),
    masuk: t("masuk"),
    daftar: t("daftar"),
    keluar: t("keluar"),
    profil: t("profil"),
    cek: t("cek"),
    copyright: t("copyright"),
  };
  return (
    <NextIntlClientProvider locale={locale}>
      <ClerkProvider>
        <html lang={locale}>
          <GoogleTagManager gtmId="G-HXCW41B2Z9" />
          <body
            className={classNames("bg-secondary", epilogue.className)}
            suppressHydrationWarning={true}
          >
            <LayoutProvider texts={texts}>{children}</LayoutProvider>
            <Toaster position="top-center" />
          </body>
        </html>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
