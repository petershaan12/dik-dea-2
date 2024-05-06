"use client";
import { useState, useEffect } from "react";
import Quiz from "@/components/Quiz";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import Ready from "@/components/Ready";
import { client } from "@/sanity/lib/client";
import { fetchUsers } from "../../(auth)/(routes)/actions/fetchUsers";
import toast from "react-hot-toast";
import Datadiri from "@/components/Datadiri";

export const dynamic = "force-dynamic";

async function getData() {
  const url = window.location.href;
  let query;
  if (url.includes("/en/diabetesCheck")) {
    query = `*[_type == "questions2"] | order(order asc)
    {
      question,
      answers,
      image
    }`;
  } else {
    query = `*[_type == "questions"] | order(order asc)
  {
    question,
    answers,
    image
  }`;
  }
  const data = await client.fetch(query);
  return data;
}

const DiabetesCheck = ({ texts }: any) => {
  const [status, setStatus] = useState("loading");
  const [questions, setQuestions] = useState<any[]>([]);
  const [score, setScore] = useState(0);
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
        toast.error(texts.error);
        setStatus("error");
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setStatus("form");
  };

  const handleFormSubmit = (totalScore: number) => {
    setScore(totalScore);
    setStatus("active");
  };

  return (
    <section className="w-[80%] min-h-[500px] container relative flex items-center justify-center flex-col mx-auto bg-logo">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <Ready
          texts={texts}
          numQuestions={questions.length}
          handleClick={handleClick}
        />
      )}
      {status === "form" && (
        <Datadiri texts={texts} handleFormSubmit={handleFormSubmit} />
      )}
      {status === "active" && (
        <Quiz
          questions={questions}
          userId={userId ?? "admin"}
          totalScore={score}
          texts={texts}
        />
      )}
    </section>
  );
};

export default DiabetesCheck;
