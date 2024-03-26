"use client";
import { useState } from "react";
import StatCard from "./StatCard";
import { toast } from "react-hot-toast";

interface Answer {
  option: string;
  value: number;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface QuizProps {
  questions: Question[];
  userId: string | undefined;
}

const Quiz = ({ questions, userId }: QuizProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    score: 0,
  });

  const { question, answers } = questions[activeQuestion];

  const onAnswerSelected = (answer: Answer) => {
    setChecked(true);
    setSelectedAnswer(answer);
  };

  const nextQuestion = () => {
    setResults((prev) => ({
      score: prev.score + (selectedAnswer ? selectedAnswer.value : 0),
    }));

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      fetch("/api/tesResults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          tesScore: results.score,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Internet Error");
            throw new Error("Network response was not working fam");
          }
          return response.json();
        })
        .then((data) => {
          toast.success("Tes Selesai Disimpan");
          console.log(data);
        })
        .catch((error) => {
          toast.error("Tes Gagal disimpan");
          console.log(error);
        });
    }
    setChecked(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="w-[80%] mx-auto -mt-24">
      <div className="flex justify-center flex-col ">
        {!showResults ? (
          <>
            <div className="flex justify-center mb-10 items-center">
              <div className="bg-primary text-white px-4 rounded-md py-1">
                <h2>
                  Question: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
              </div>
            </div>

            <div className="flex justify-center flex-col mx-auto">
              <h3 className="mb-5 text-2xl font-bold text-center">
                {question}
              </h3>
              <ul>
                {answers.map((answer: Answer, idx: number) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer)}
                    className={`cursor-pointer mb-5 py-3 border w-full border-black rounded-md hover:bg-primary hover:text-white px-3 ${
                      selectedAnswer === answer && "bg-primary text-white"
                    }`}
                  >
                    <span>{answer.option}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={nextQuestion}
                disabled={!checked}
                className="font-bold"
              >
                {activeQuestion === questions.length - 1
                  ? "Finish"
                  : "Next Question →"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl uppercase mb-10">Results 📈</h3>
            <div className="text-center">
              <StatCard title="Total Score" value={results.score} />
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-10 font-bold uppercase"
            >
              Ulang Cek Diabetes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
