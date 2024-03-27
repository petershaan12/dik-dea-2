import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
    </>
  );
};
export default Home;
