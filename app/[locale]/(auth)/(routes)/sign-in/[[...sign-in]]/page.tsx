import Loader from "@/components/Loader";
import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <section className="container relative mx-auto flex justify-center bg-logo  py-12">
      <Suspense fallback={<Loader />}>
        <SignIn
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
