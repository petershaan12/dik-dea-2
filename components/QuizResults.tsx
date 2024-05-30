import React from "react";
import StatCard from "./StatCard"; // Import the StatCard component
import { useTranslations } from "next-intl";

interface QuizResultsProps {
  score: number;
  title: string;
  texts: any;
}

const QuizResults: React.FC<QuizResultsProps> = ({ title, score, texts }) => {
  // Determine risk level based on score
  let riskLevel;
  if (score < 50) {
    riskLevel = texts.lowrisk;
  } else {
    riskLevel = texts.highrisk;
  }

  // Determine follow-up actions based on risk level
  let followUpActions;
  if (score < 50) {
    followUpActions = (
      <>
        <ul>
          <li>{texts.edukasi}</li>
          <li>{texts.aktivitas}</li>
          <li>{texts.stres}</li>
          <li>{texts.skrining}</li>
        </ul>
      </>
    );
  } else {
    followUpActions = (
      <>
        <ol>
          <li>{texts.periksa}</li>
          <li>{texts.jam}</li>
          <li>{texts.gula_darah}</li>
          <li>{texts.urnalisis}</li>
        </ol>
      </>
    );
  }

  return (
    <div className="text-left">
      <StatCard title={title} value={score} /> {/* Display the total score */}
      <div className="text-center py-12 text-xl">
        <p>{texts.tingkat}</p>
        <div className="font-bold">{riskLevel}</div>
        <p className="mt-5">{texts.apa_yang_harus} </p>
        <div className="font-bold">{followUpActions}</div>
      </div>
    </div>
  );
};

export default QuizResults;
