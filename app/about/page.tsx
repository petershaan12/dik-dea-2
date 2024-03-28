import Loader from "@/components/Loader";
import { Suspense } from "react";
import { AiFillInstagram, AiFillMail, AiFillYoutube } from "react-icons/ai";

const page = () => {
  return (
    <section className="w-[80%] container min-h-[500px] mx-auto flex items-center bg-logo-transparent md:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_1rem] py-12">
      <Suspense fallback={<Loader />}>
        <div className=" w-full md:w-[80%] ">
          <h1 className=" text-2xl md:text-5xl font-bold text-dark">
            DIKDEA: Instrumen Deteksi Dini Diabetes Mellitus pada Remaja
          </h1>
          <p className=" md:text-xl mt-5">
            Selamat datang di DIKDEA, sebuah instrumen deteksi dini untuk
            Diabetes Mellitus pada remaja. Instrumen ini dirancang untuk
            membantu Anda menilai risiko Anda terkena diabetes mellitus
            berdasarkan sejumlah variabel yang relevan. Mohon isi dengan jujur
            dan teliti.
          </p>
          <p className="md:text-xl mt-5">
            Terima kasih atas partisipasi Anda dalam mengisi DIKDEA. Setelah
            mengisi semua bagian, silakan hitung skor Anda untuk menilai risiko
            Anda terkena Diabetes Mellitus pada remaja. Jika Anda memiliki
            pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.
          </p>
          <div className="text-xl md:text-3xl md:flex gap-10 mt-12 ">
            <p>Kontak kami: </p>
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
