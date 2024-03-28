import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-[500px] justify-center  items-start ">
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
