import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center  bg-logo-transparent lg:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_3rem]">
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
