"use client";

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/[locale]/(auth)/(routes)/actions/fetchUsers";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";

function LayoutProvider({
  texts,
  children,
}: {
  children: React.ReactNode;
  texts: any;
}) {
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[0]);

  const getContent = () => {
    if (isPublicRoute) return <Welcome />;
    return <>{children}</>;
  };

  const getCurrentUser = async () => {
    try {
      const response: any = await fetchUsers();
      if (response && response.error) throw new Error(response.error.message);
    } catch (error) {
      console.log(error);
      console.log("belumlogin");
    } finally {
      return;
    }
  };

  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar texts={texts} />
      {getContent()}
      <Footer texts={texts} />
    </main>
  );
}

export default LayoutProvider;
