import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center text-center py-32 -mt-8">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-dark">
            Siap Uji Diabetesmu Hari ini?
          </h1>
          <p className="text-gray-600">Yuk Cobain Selagi Gratis</p>
        </div>
        <div className="mt-6">
          <Link
            href={"/tes"}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/80"
          >
            Aku Siap
          </Link>
        </div>
        <div className="mx-auto flex items-center justify-center py-12">
          <Image
            src="/homepage-1.png"
            width={857}
            height={220}
            className="text-center"
            alt="Hompage Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
