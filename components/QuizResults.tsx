import React from "react";
import StatCard from "./StatCard"; // Import the StatCard component

interface QuizResultsProps {
  score: number;
  title: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({ title, score }) => {
  // Determine risk level based on score
  let riskLevel;
  if (score < 50) {
    riskLevel = "Risiko rendah";
  } else {
    riskLevel = "Risiko tinggi ⚠️";
  }

  // Determine follow-up actions based on risk level
  let followUpActions;
  if (score < 50) {
    followUpActions = (
      <>
        <ul>
          <li>Edukasi pengaturan gizi seimbang</li>
          <li>aktivitas dan istirahat seimbang</li>
          <li>manajemen stress yang baik</li>
          <li>lakukan skrining ulang 6 bulan lagi</li>
        </ul>
      </>
    );
  } else {
    followUpActions = (
      <>
        <ol>
          <li>Periksa HbA1C</li>
          <li>2 jam PP</li>
          <li>OGTT</li>
          <li>Gula darah puasa</li>
          <li>Urinalisis</li>
        </ol>
      </>
    );
  }

  return (
    <div className="text-left">
      <StatCard title={title} value={score} /> {/* Display the total score */}
      <div className="text-center py-12 text-xl">
        <p>Tingkat Resiko:</p>
        <div className="font-bold">{riskLevel}</div>
        <p className="mt-5">Apa Yang harus Saya Lakukan ? </p>
        <div className="font-bold">{followUpActions}</div>
      </div>
    </div>
  );
};

export default QuizResults;
