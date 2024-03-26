import StatCard from "@/components/StatCard";
import { fetchUsers } from "../(auth)/actions/fetchUsers";
import Image from "next/image";

const page = async () => {
  const currentUser = await fetchUsers();
  const tesScore = currentUser?.data?.tesResults?.[0]?.tesScore || 0;

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-32 -mt-8">
      <div className="px-4 md:px-6 w-6/12">
        <div className=" mb-10 text-2xl flex justify-center items-center gap-5">
          <Image
            src={currentUser?.data?.user.profilePic || "/avatar.jpg"}
            className="rounded-full  outline outline-3 outline-primary outline-offset-2"
            width={200}
            height={200}
            priority={true}
            alt="avatar"
          />
          <div className="block">
            <h1 className="text-4xl font-bold tracking-tighter">
              {currentUser?.data?.user.username || "Jono"}
            </h1>
            <div className="text-xl">
              <p>Id: {currentUser?.data?.user.id}</p>
              <p>Email: {currentUser?.data?.user.email}</p>
            </div>
          </div>
        </div>
        <div className=" mx-auto justify-center">
          <StatCard title="Total Points" value={tesScore} />
        </div>
      </div>
    </section>
  );
};

export default page;
