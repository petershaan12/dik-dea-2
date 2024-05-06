import Loader from "@/components/Loader";
import { SignUp } from "@clerk/nextjs";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export default function Page() {
  return (
    <section className="container relative mx-auto flex justify-center bg-logo  py-12">
      <Suspense fallback={<Loader />}>
        <SignUp
          routing="hash"
          appearance={{
            variables: {
              colorPrimary: "#FD8087",
              colorText: "black",
            },
          }}
        />
      </Suspense>
    </section>
  );
}
