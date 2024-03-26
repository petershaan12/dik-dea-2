import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import LayoutProvider from "@/providers/LayoutProvider";
import { Toaster } from "react-hot-toast";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIK DEA",
  description: "cek diabetes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/favicon.png" sizes="any" />
        <body className={epilogue.className}>
          <LayoutProvider>{children}</LayoutProvider>
          <Toaster position="top-center" />
        </body>
      </html>
    </ClerkProvider>
  );
}
