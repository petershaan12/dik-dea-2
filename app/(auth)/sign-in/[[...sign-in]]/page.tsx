import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" container relative mx-auto flex justify-center bg-logo py-12 ">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#FD8087",
            colorText: "black",
          },
        }}
      />
    </div>
  );
}
