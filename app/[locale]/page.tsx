import JudulBesar from "@/components/JudulBesar";
import Loader from "@/components/Loader";
import { Suspense } from "react";
import Image from "next/image";
import { AiFillYoutube, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations();
  const texts = {
    welcome: t("Home.welcome"),
    siap: t("Home.siap"),
    hari: t("Home.hari"),
    besok: t("Home.besok"),
    sekarang: t("Home.sekarang"),
    instrument: t("Home.instrument"),
    cek: t("Home.cek"),
    lihat: t("Home.lihat"),
    loading: t("else.wait"),
  };
  return (
    <>
      <section className="w-full text-center ">
        <Suspense fallback={<Loader />}>
          <header className="px-4 md:px-6 mx-auto w-[90%] ">
            <JudulBesar texts={texts} />
          </header>
          <main className="mx-auto flex items-center justify-center py-12">
            <Image
              src="/homepage-1.png"
              width={857}
              height={220}
              className="text-center"
              alt="Hompage Image"
            />
          </main>
          <div className="text-2xl flex justify-center gap-10 text-gray-800 ">
            <a
              href="https://www.youtube.com/results?search_query=Diabetes+melitius"
              target={"_blank"}
            >
              <AiFillYoutube className="mouse-clicked" />
            </a>
            <a href="mailto:dikdea@example.com" target={"_blank"}>
              <AiFillMail className="mouse-clicked" />
            </a>
            <a href="https://www.instagram.com/dikdea " target={"_blank"}>
              <AiFillInstagram />
            </a>
          </div>
        </Suspense>
      </section>
    </>
  );
};
export default Home;
