import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const Home = () => {
  return (
    <main className=" ">
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
    </main>
  );
};
export default Home;
