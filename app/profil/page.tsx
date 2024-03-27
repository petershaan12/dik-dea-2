"use client";
import { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import { fetchUsers } from "../(auth)/actions/fetchUsers";
import Image from "next/image";
import Loader from "@/components/Loader";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<string | null | undefined>(
    null
  );
  const [tesScore, setTesScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUsers();
      setCurrentUser(userData);
      setTesScore(userData?.data?.tesResults?.[0]?.tesScore || 0);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="relative min-h-[500px] mx-auto flex flex-col items-center w-[80%]  md:justify-center pb-24 bg-logo-transparent md:bg-[length:300px_300px] bg-[length:100px_100px] bg-no-repeat bg-[bottom_right_1rem]">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" py-10 text-2xl md:flex justify-center items-center mx-auto gap-5">
            <Image
              src={currentUser?.data?.user.profilePic || "/avatar.jpg"}
              className="rounded-full  outline outline-3 outline-primary outline-offset-2 mx-auto"
              width={200}
              height={200}
              priority={true}
              alt="avatar"
            />
            <div className="block">
              <h1 className="text-4xl font-bold tracking-tighter mt-8 text-center">
                {currentUser?.data?.user.username || "Halo"}
              </h1>
              <div className=" text-base md:text-xl text-center md:text-left">
                <p>Id: {currentUser?.data?.user.id}</p>
                <p>Email: {currentUser?.data?.user.email}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[500px]">
            <StatCard title="Total Points" value={tesScore} />
          </div>
        </>
      )}
    </section>
  );
};

export default ProfilePage;
