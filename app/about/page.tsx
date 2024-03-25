import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="relative w-full min-h-[500px] flex  text-left px-32 py-32 ">
      <div className="px-4 md:px-6 max-w-[1500px]  w-[80%]">
        <h1 className="text-5xl font-bold">
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
      </div>
    </section>
  );
};
export default page;
