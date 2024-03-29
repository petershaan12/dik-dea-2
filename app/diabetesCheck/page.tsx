"use client";
import { useState, useEffect } from "react";
import Quiz from "@/components/Quiz";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import Ready from "@/components/Ready";
import { client } from "@/sanity/lib/client";
import { fetchUsers } from "../(auth)/actions/fetchUsers";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";

async function getData() {
  const query = `*[_type == "questions"] | order(_createdAt asc)
  {
    question,
    answers,
    image
  }`;
  const data = await client.fetch(query);
  return data;
}

const Page = () => {
  const [status, setStatus] = useState("loading");
  const [questions, setQuestions] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null | undefined>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsData = await getData();
        setQuestions(questionsData);
        const userData = await fetchUsers();
        if (userData?.data?.user?.id != null) {
          setUserId(userData.data.user.id);
        }
        setStatus("ready");
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Tes Gagal Dimuat");
        setStatus("error");
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setStatus("active");
  };

  return (
    <section className="w-[80%] min-h-[500px] container relative flex items-center justify-center flex-col mx-auto bg-logo">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Ready numQuestions={questions.length} handleClick={handleClick} />
      )}
      {status === "active" && (
        <Quiz questions={questions} userId={userId ?? "admin"} />
      )}
    </section>
  );
};

export default Page;
