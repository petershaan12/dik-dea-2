import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full bg-secondary bg-logo-transparent bg-no-repeat bg-[bottom_right_3rem]">
      <SignIn />
    </div>
  );
}
