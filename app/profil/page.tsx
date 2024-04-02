"use client";
import { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import { fetchUsers } from "../(auth)/actions/fetchUsers";
import Image from "next/image";
import Loader from "@/components/Loader";

// Definisikan tipe untuk data pengguna
interface UserData {
  data: {
    user: {
      id: string;
      username: string;
      email: string;
      profilePic: string;
    };
    tesResults: {
      id: string;
      userId: string;
      tesScore: number;
      createdAt: Date;
    }[];
  };
}

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [averageTesScore, setAverageTesScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userData = await fetchUsers();
        if (userData !== undefined) {
          setCurrentUser(userData);
          const tesResults = userData?.data?.tesResults || [];
          const totalScores = tesResults.reduce(
            (acc, result) => acc + (result.tesScore || 0),
            0
          );
          const averageScore = totalScores / tesResults.length || 0;
          setAverageTesScore(averageScore);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-[80%]  min-h-[500px] container relative md:flex block md:place-items-center justify-center mx-auto bg-logo ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:flex flex-col md:px-24 px-0  pb-0 md:pb-32">
            <div className="py-10 text-2xl mx-auto gap-5">
              <Image
                src={currentUser?.data?.user.profilePic || "/avatar.jpg"}
                className="rounded-full outline outline-3 outline-primary outline-offset-2 mx-auto"
                width={200}
                height={200}
                priority={true}
                alt="avatar"
              />
              <div className="block">
                <h1 className="text-4xl font-bold tracking-tighter mt-8 text-center">
                  {currentUser?.data?.user.username || "Halo"}
                </h1>
                <div className="text-base md:text-xl text-center md:text-left">
                  <p>Email: {currentUser?.data?.user.email}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[500px]">
              <StatCard title="Rata-rata Tes Kamu" value={averageTesScore} />
            </div>
          </div>

          <div className="md:mt-5 w-full container md:px-24 px-0 mt-12">
            <h1 className="text-3xl font-bold text-center">Data Kamu 📝</h1>
            <ul>
              {currentUser?.data?.tesResults?.map((result, index) => (
                <li
                  key={index}
                  className={`py-4 px-5 my-5 bg-white rounded-lg `}
                >
                  <div className="flex items-center gap-5 w-full">
                    <div className="flex sm:flex-row flex-col gap-1 justify-between w-full items-center">
                      <div className="flex gap-3 items-center">
                        <p>Tes ke-{index + 1}</p>
                        <p className="font-bold">Score: {result.tesScore}</p>
                      </div>
                      <span>
                        Created At:{" "}
                        {new Date(result.createdAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default ProfilePage;