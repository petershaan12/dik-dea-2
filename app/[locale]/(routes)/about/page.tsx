import Loader from "@/components/Loader";
import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { AiFillInstagram, AiFillMail, AiFillYoutube } from "react-icons/ai";

const page = () => {
  const t = useTranslations("About");
  const t2 = useTranslations("else");
  const texts = {
    loading: t2("wait"),
  };
  return (
    <section className="w-[80%] container relative flex place-items-center mx-auto bg-logo py-12">
      <Suspense fallback={<Loader />}>
        <div className=" w-full md:w-[80%] ">
          <h1 className=" text-2xl md:text-5xl font-bold text-dark">
            {t("judul")}
          </h1>
          <p className=" md:text-xl mt-5">{t("desc")}</p>
          <p className="md:text-xl mt-5">{t("desc2")}</p>
          <div className="text-xl md:text-3xl md:flex gap-10 mt-12 ">
            <p> {t("kontak")}</p>
            <div className="flex text-4xl gap-10 mt-5">
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
          </div>
        </div>
      </Suspense>
    </section>
  );
};
export default page;
