"use client";
import { useState } from "react";
import StatCard from "./StatCard";

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
      fetch("/api/quizResults", {
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
            throw new Error("Network response was not working fam");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Tes results saved successfully:", data);
        })
        .catch((error) => {
          console.error("Error saving quiz results:", error);
        });
    }
    setChecked(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-[500px]">
      <div className="max-w-[1500px] mx-auto w-[90%] flex justify-center py-10 flex-col">
        {!showResults ? (
          <>
            <div className="flex justify-between mb-10 items-center">
              <div className="bg-primary text-white px-4 rounded-md py-1">
                <h2>
                  Question: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-bold">{question}</h3>
              <ul>
                {answers.map((answer: Answer, idx: number) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer)}
                    className={`cursor-pointer mb-5 py-3 rounded-md hover:bg-primary hover:text-white px-3 ${
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
              <StatCard title="Total Score" value={results.score} />
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-10 font-bold uppercase"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
