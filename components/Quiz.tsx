"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";
import QuizResults from "./QuizResults";

interface Answer {
  option: string;
  value: number;
}

interface Question {
  question: string;
  answers: Answer[];
  image?: string;
}

interface QuizProps {
  questions: Question[];
  userId: string | undefined;
  totalScore: number;
  texts: any;
}

interface WeightRange {
  start: number;
  end: number;
  weight: number;
  maxScore: number;
}

const Quiz = ({ questions, userId, totalScore, texts }: QuizProps) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [checked, setChecked] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentScoreHistory, setCurrentScoreHistory] = useState<number[]>([]);
  const [scoreTotalHistory, setScoreTotalHistory] = useState([totalScore]);
  const [results, setResults] = useState({
    score: totalScore,
  });

  const { question, answers, image } = questions[activeQuestion];

  const weightRanges = [
    { start: 0, end: 6, weight: 25, maxScore: 10 },
    { start: 7, end: 10, weight: 12, maxScore: 9 },
    { start: 11, end: 11, weight: 15, maxScore: 5 },
    { start: 12, end: 18, weight: 28, maxScore: 7 },
  ];

  useEffect(() => {
    setChecked(false);
    setSelectedAnswer(null);
  }, [activeQuestion, image]);

  const onAnswerSelected = (answer: Answer) => {
    setChecked(true);
    setSelectedAnswer(answer);
  };

  const getWeightAndMaxScore = (index: number): WeightRange => {
    for (let range of weightRanges) {
      if (index >= range.start && index <= range.end) {
        return range;
      }
    }
    return { start: 0, end: 0, weight: 1, maxScore: 1 }; //hanya default saja
  };

  const calculateRangeScore = (scoreSum: number, range: any) => {
    return (scoreSum / range.maxScore) * range.weight;
  };

  const nextQuestion = () => {
    const currentRange = getWeightAndMaxScore(activeQuestion);
    const isEndOfRange = currentRange.end === activeQuestion;

    const newRangeScore =
      currentScore + (selectedAnswer ? selectedAnswer.value : 0);

    setCurrentScore(newRangeScore);
    setCurrentScoreHistory((prev) => [
      ...prev,
      selectedAnswer ? selectedAnswer.value : 0,
    ]);

    if (isEndOfRange) {
      const additionalScore = calculateRangeScore(newRangeScore, currentRange);
      const newTotalScore = parseFloat(
        (results.score + additionalScore).toFixed(2)
      );
      setResults((prev) => ({
        ...prev,
        score: newTotalScore,
      }));
      setCurrentScoreHistory((prev) => [...prev, newRangeScore]);
      setScoreTotalHistory((prev) => [...prev, newTotalScore]);
      setCurrentScore(0);
    } else {
      setScoreTotalHistory((prev) => [...prev, results.score]);
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const additionalScore = calculateRangeScore(newRangeScore, currentRange);
      const finalScore = results.score + additionalScore;
      setResults((prev) => ({
        ...prev,
        score: finalScore,
      }));
      setShowResults(true);
      fetch("/api/tesResults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          tesScore: finalScore,
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
          toast.success(texts.berhasilSimpan);
          console.log(data);
        })
        .catch((error) => {
          toast.error(texts.errorSimpan);
          console.log(error);
        });
    }
    setChecked(false);
    setSelectedAnswer(null);
  };

  const prevQuestion = () => {
    if (activeQuestion !== 0) {
      // Hapus Score Total Sebelumnya
      setResults((prev) => ({
        ...prev,
        score: scoreTotalHistory[activeQuestion - 1] || 0,
      }));
      const currentRange = getWeightAndMaxScore(activeQuestion);
      const isEndOfRange = currentRange.start === activeQuestion;
      const isStart = currentRange.start + 1 === activeQuestion;

      if (isEndOfRange) {
        setCurrentScore(
          currentScoreHistory[currentScoreHistory.length - 1] -
            currentScoreHistory[currentScoreHistory.length - 2]
        );
        setCurrentScoreHistory((prev) => prev.slice(0, -1));
        setCurrentScoreHistory((prev) => prev.slice(0, -1));
      } else if (isStart) {
        setCurrentScoreHistory((prev) => prev.slice(0, -1));
        setCurrentScore(0);
      } else {
        setCurrentScoreHistory((prev) => prev.slice(0, -1));
        setCurrentScore(
          (prev) => prev - currentScoreHistory[activeQuestion - 1]
        );
      }

      //Undo Question
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const imageProps = useNextSanityImage(client, image || "");

  return (
    <>
      <div className="flex flex-col ">
        {!showResults ? (
          <>
            <div className="flex justify-center my-10 items-center">
              <div className="bg-primary text-white px-4 rounded-md py-1">
                <h2>
                  {texts.pertanyaan2}: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
              </div>
            </div>

            <div className="flex justify-center flex-col mx-auto">
              {image && (
                <Image
                  {...imageProps}
                  style={{ width: "40%", height: "auto" }}
                  alt={`Image for question ${activeQuestion + 1}`}
                  className="mb-5 mx-auto"
                />
              )}
              <h3 className="mb-5 mx-auto font-bold text-center">{question}</h3>
              <ul>
                {answers.map((answer: Answer, idx: number) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer)}
                    className={`cursor-pointer mb-5 py-3 border w-full border-black rounded-md hover:bg-primary hover:text-white px-3 ${
                      selectedAnswer === answer ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span>{answer.option}</span>
                  </li>
                ))}
              </ul>
              <div className="flex mx-auto gap-x-24 justify-between">
                <button
                  onClick={prevQuestion}
                  disabled={activeQuestion === 0}
                  className={`font-bold py-8 ${
                    activeQuestion === 0 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  ← {texts.mundur}
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={!checked}
                  className={`font-bold py-8 ${
                    !checked ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  {activeQuestion === questions.length - 1
                    ? texts.selesai
                    : `${texts.lanjut} →`}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="text-center w-[500px] mt-20">
              <h3 className="text-2xl uppercase mb-10">{texts.hasil} 📈</h3>
              <QuizResults
                score={results.score}
                title={texts.rata}
                texts={texts}
              />
              <button
                onClick={() => window.location.reload()}
                className="mt-2 mb-6 font-bold uppercase"
              >
                {texts.ulang}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
