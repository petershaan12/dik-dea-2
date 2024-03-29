"use client";

import { usePathname } from "next/navigation";
import { fetchUsers } from "@/app/(auth)/actions/fetchUsers";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Welcome from "@/components/Welcome";

function LayoutProvider({ children }: { children: React.ReactNode }) {
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
    } finally {
      return;
    }
  };

  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />
      {/* <p className="text-5xl">halo</p> */}
      {getContent()}
      <Footer />
    </main>
  );
}

export default LayoutProvider;
