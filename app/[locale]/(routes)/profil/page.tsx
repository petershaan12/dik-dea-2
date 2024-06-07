"use client";
import { useState, useEffect } from "react";
import { fetchUsers } from "../../(auth)/(routes)/actions/fetchUsers";
import Image from "next/image";
import Loader from "@/components/Loader";
import QuizResults from "@/components/QuizResults";
import toast from "react-hot-toast";

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

const ProfilePage = ({ texts }: any) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [averageTesScore, setAverageTesScore] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const userData = await fetchUsers();
      if (userData !== undefined) {
        setCurrentUser(userData);
        const tesResults = userData?.data?.tesResults || [];
        const totalScores = tesResults.reduce(
          (acc: number, result: { tesScore: number }) => acc + (result.tesScore || 0),
          0
        );
        const averageScore = totalScores / tesResults.length || 0;
        const roundedAverageScore = parseFloat(averageScore.toFixed(2));
        setAverageTesScore(roundedAverageScore);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteResult = async (resultId: any) => {
    try {
      const confirmation = window.confirm(
        "Apakah kamu yakin ingin menghapus data ini?"
      );
      if (confirmation) {
        const response = await fetch("/api/tesResults", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ resultId }),
        });
        if (response.ok) {
          toast.success("Data berhasil dihapus.");
          fetchData();
        } else {
          toast.error("Data Gagal dihapus");
        }
      }
    } catch (error) {
      console.error("Error deleting test result:", error);
    }
  };

  return (
    <section className="w-[80%] min-h-[500px] container relative md:flex block md:place-items-center justify-center mx-auto bg-logo">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="md:flex flex-col px-0">
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
            <div className="w-[70%] md:w-[500px] mx-auto">
              <QuizResults
                title={texts.rata}
                texts={texts}
                score={averageTesScore}
              />
            </div>
          </div>

          <div className="mt-7 container md:px-12 ">
            <h1 className="text-3xl font-bold text-center">{texts.data}</h1>
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
                        {texts.dibuat}
                        {new Date(result.createdAt).toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleDeleteResult(result.id)}
                        className="text-red-500"
                      >
                        {texts.hapus}
                      </button>
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
