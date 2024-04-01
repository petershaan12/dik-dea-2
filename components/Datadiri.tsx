"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface DataDiriProps {
  handleFormSubmit: (score: number) => void;
}

const Datadiri: React.FC<DataDiriProps> = ({ handleFormSubmit }) => {
  const [gender, setGender] = useState<string>("");
  const [ethnicity, setEthnicity] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [waistCircumference, setWaistCircumference] = useState<string>("");

  const handleChange =
    (key: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      if (key === "gender") setGender(event.target.value);
      else if (key === "ethnicity") setEthnicity(event.target.value);
      else if (key === "weight") setWeight(event.target.value);
      else if (key === "height") setHeight(event.target.value);
      else if (key === "waistCircumference")
        setWaistCircumference(event.target.value);
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let genderScore = 0;
    let ethnicityScore = 0;
    let weightScore = 0;

    if (gender === "perempuan") {
      genderScore = 4;
    } else if (gender === "lakilaki") {
      genderScore = 3;
    }

    switch (ethnicity) {
      case "White":
        ethnicityScore = 0;
        break;
      case "Aboriginal":
        ethnicityScore = 1;
        break;
      case "Other non-white":
        ethnicityScore = 1;
        break;
      case "Black":
        ethnicityScore = 2;
        break;
      case "East asian":
        ethnicityScore = 3;
        break;
      case "South asean":
        ethnicityScore = 4;
        break;
      default:
        ethnicityScore = 0;
    }

    const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    if (bmi < 18.5) {
      weightScore = 1;
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      weightScore = 2;
    } else if (bmi >= 23 && bmi <= 24.9) {
      weightScore = 3;
    } else if (bmi >= 25 && bmi <= 29.7) {
      weightScore = 4;
    } else if (bmi >= 30) {
      weightScore = 5;
    }

    const totalScore = genderScore + ethnicityScore + weightScore;

    handleFormSubmit(totalScore);

    console.log(totalScore);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-center my-10 items-center">
        <div className="bg-primary text-white px-4 rounded-md py-1">
          <h2>Isi Data dirimu dulu</h2>
        </div>
      </div>
      <div className="flex justify-center flex-col mx-auto text-center">
        <form onSubmit={handleSubmit}>
          <label className="mt-5">
            Jenis Kelamin:
            <div>
              <label>
                <input
                  type="radio"
                  value="perempuan"
                  checked={gender === "perempuan"}
                  onChange={handleChange("gender")}
                  className="ml-5 mr-2 mt-4"
                  required
                />
                Perempuan
              </label>
              <label>
                <input
                  type="radio"
                  value="lakilaki"
                  checked={gender === "lakilaki"}
                  onChange={handleChange("gender")}
                  className="ml-5 mr-2"
                  required
                />
                Laki-laki
              </label>
            </div>
          </label>
          <br />
          <label className="mt-5">
            Etnis:
            <select
              value={ethnicity}
              onChange={handleChange("ethnicity")}
              className="p-2 ml-2 mb-5"
              required
            >
              <option value="">Pilih etnis</option>
              <option value="White">White</option>
              <option value="Aboriginal">Aboriginal</option>
              <option value="Other non-white">Other non-white</option>
              <option value="Black">Black</option>
              <option value="East asian">East asian (Indonesia)</option>
              <option value="South asean">South asean</option>
            </select>
          </label>
          <br />
          <label>
            Berat Badan:
            <input
              type="number"
              value={weight}
              onChange={handleChange("weight")}
              placeholder="Berat Badan (kg)"
              className="p-2 ml-2 mb-5"
              required
            />
          </label>
          <br />
          <label>
            Tinggi Badan:
            <input
              type="number"
              value={height}
              onChange={handleChange("height")}
              placeholder="Tinggi Badan (cm)"
              className="p-2 ml-2 mb-5"
              required
            />
          </label>
          <br />
          {gender === "lakilaki" && (
            <label>
              Lingkar Perut:
              <select
                value={waistCircumference}
                onChange={handleChange("waistCircumference")}
                className="p-2 ml-2 mb-5"
                required
              >
                <option value="" className="text-gray-400">
                  Pilih lingkar perut
                </option>
                <option value="<60 cm">&lt;60 cm</option>
                <option value="≥60 cm">≥60 cm</option>
              </select>
            </label>
          )}
          {gender === "perempuan" && (
            <label>
              Lingkar Perut:
              <select
                value={waistCircumference}
                onChange={handleChange("waistCircumference")}
                className="p-2 ml-2 mb-5"
                required
              >
                <option value="">Pilih lingkar perut</option>
                <option value="<57 cm">&lt;57 cm</option>
                <option value="≥57 cm">≥57 cm</option>
              </select>
            </label>
          )}
          <br />
          <button className="font-bold py-8">Next →</button>
        </form>
      </div>
    </div>
  );
};

export default Datadiri;
