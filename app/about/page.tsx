import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiFillMail, AiFillYoutube } from "react-icons/ai";

const page = () => {
  return (
    <section className="relative min-h-full  mx-auto w-[80%] flex  text-left bg-logo-transparent bg-no-repeat bg-[bottom_right_3rem]">
      <div className="px-4 md:px-6 max-w-[1500px]  w-[80%]">
        <h1 className="text-5xl font-bold text-dark">
          DIKDEA: Instrumen Deteksi Dini Diabetes Mellitus pada Remaja
        </h1>
        <p className="text-xl mt-5">
          Selamat datang di DIKDEA, sebuah instrumen deteksi dini untuk Diabetes
          Mellitus pada remaja. Instrumen ini dirancang untuk membantu Anda
          menilai risiko Anda terkena diabetes mellitus berdasarkan sejumlah
          variabel yang relevan. Mohon isi dengan jujur dan teliti.
        </p>
        <p className="text-xl mt-5">
          Terima kasih atas partisipasi Anda dalam mengisi DIKDEA. Setelah
          mengisi semua bagian, silakan hitung skor Anda untuk menilai risiko
          Anda terkena Diabetes Mellitus pada remaja. Jika Anda memiliki
          pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.
        </p>
        <div className="text-3xl flex gap-10 mt-12 ">
          <p>Kontak kami: </p>
          <a href="https://www.youtube.com/@petershaan_" target={"_blank"}>
            <AiFillMail className="mouse-clicked" />
          </a>
          <a href="https://www.instagram.com/petershaan_" target={"_blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.youtube.com/@petershaan_" target={"_blank"}>
            <AiFillYoutube className="mouse-clicked" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default page;
