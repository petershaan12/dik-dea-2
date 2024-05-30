"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface DataDiriProps {
  handleFormSubmit: (score: number) => void;
  texts: any;
}

const Datadiri: React.FC<DataDiriProps> = ({ handleFormSubmit, texts }) => {
  const [gender, setGender] = useState<string>("");
  const [ethnicity, setEthnicity] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBMI] = useState<number>(0);
  const [waistCircumference, setWaistCircumference] = useState<string>("");
  const [isDataComplete, setIsDataComplete] = useState<boolean>(false);

  const handleChange =
    (key: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let newGender = gender;
      let newEthnicity = ethnicity;
      let newWeight = weight;
      let newHeight = height;
      let newWaistCircumference = waistCircumference;

      if (key === "gender") newGender = event.target.value;
      else if (key === "ethnicity") newEthnicity = event.target.value;
      else if (key === "weight") newWeight = event.target.value;
      else if (key === "height") newHeight = event.target.value;
      else if (key === "waistCircumference")
        newWaistCircumference = event.target.value;

      if (
        newGender &&
        newEthnicity &&
        newWeight &&
        newHeight &&
        newWaistCircumference
      ) {
        setIsDataComplete(true);
      } else {
        setIsDataComplete(false);
      }

      setGender(newGender);
      setEthnicity(newEthnicity);
      setWeight(newWeight);
      setHeight(newHeight);
      setWaistCircumference(newWaistCircumference);

      // Check BMI nya
      const weightValue = parseFloat(newWeight);
      const heightValue = parseFloat(newHeight);
      const heightInMeters = heightValue / 100;
      if (weightValue && heightInMeters && heightInMeters !== 0) {
        const bmi = weightValue / (heightInMeters * heightInMeters);
        setBMI(bmi);
      } else {
        setBMI(0);
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let weightScore = 0;

    if (bmi < 25) {
      weightScore = 0;
    } else if (bmi >= 25 && bmi <= 30) {
      weightScore = 1;
    } else if (bmi >= 30) {
      weightScore = 3;
    }

    //Melakukan Perhitungan 29-5-2024
    const totalScore1 = ((parseInt(gender) + parseInt(ethnicity)) / 8) * 5;
    const anthropometry =
      ((weightScore + parseInt(waistCircumference)) / 7) * 15;

    const finalScore = totalScore1 + anthropometry;
    const roundedFinalScore = finalScore.toFixed(2);
    handleFormSubmit(parseFloat(roundedFinalScore));
  };

  


  return (
    <div className="flex flex-col ">
      <div className="flex justify-center my-10 items-center">
        <div className="bg-primary text-white px-4 rounded-md py-1">
          <h2>{texts.isi}</h2>
        </div>
      </div>
      <div className="flex justify-center flex-col mx-auto text-center">
        <form onSubmit={handleSubmit}>
          <label className="mt-5">
            {texts.kelamin}
            <div>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={gender === "4"}
                  onChange={handleChange("gender")}
                  className="ml-5 mr-2 mt-4"
                  required
                />
                {texts.perempuan}
              </label>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={gender === "3"}
                  onChange={handleChange("gender")}
                  className="ml-5 mr-2"
                  required
                />
                {texts.laki}
              </label>
            </div>
          </label>
          <br />
          <label className="mt-5">
            {texts.etnis}
            <select
              value={ethnicity}
              onChange={handleChange("ethnicity")}
              className="p-2 ml-2 mb-5"
              required
            >
              <option value=""> {texts.pilih_etnis}</option>
              <option value="0">{texts.white}</option>
              <option value="1">{texts.aboriginal}</option>
              <option value="1">{texts.other}</option>
              <option value="2">{texts.black}</option>
              <option value="3">{texts.east}</option>
              <option value="4">{texts.south}</option>
            </select>
          </label>
          <br />
          <label>
            {texts.berat}
            <input
              type="number"
              value={weight}
              onChange={handleChange("weight")}
              placeholder={texts.berat2}
              className="p-2 ml-2 mb-5"
              required
            />
          </label>
          <br />
          <label>
            {texts.tinggi}
            <input
              type="number"
              value={height}
              onChange={handleChange("height")}
              placeholder={texts.tinggi2}
              className="p-2 ml-2 mb-5"
              required
            />
          </label>
          {bmi > 0 && (
            <p className="text-center  font-bold">
              {texts.bmi}
              <span className="text-primary">
                {bmi.toFixed(1)},{bmi < 18.5 && <span> {texts.kurus}</span>}
                {bmi >= 18.5 && bmi <= 22.9 && <span> {texts.normal}</span>}
                {bmi >= 23 && bmi <= 24.9 && <span> {texts.kelebihan}</span>}
                {bmi >= 25 && bmi <= 29.7 && <span> {texts.obesitas}</span>}
                {bmi >= 30 && <span> {texts.obesitas2}</span>}
              </span>
            </p>
          )}
          <br />
          {gender === "4" && (
            <label>
              {texts.lingkar}
              <select
                value={waistCircumference}
                onChange={handleChange("waistCircumference")}
                className="p-2 ml-2 mb-5"
                required
              >
                <option value="" className="text-gray-400">
                  {texts.pilih_lingkar}
                </option>
                <option value="0">&lt;80 cm</option>
                <option value="3">80-88 cm</option>
                <option value="4">&#62;88 cm</option>
              </select>
            </label>
          )}
          {gender === "3" && (
            <label>
              {texts.lingkar}
              <select
                value={waistCircumference}
                onChange={handleChange("waistCircumference")}
                className="p-2 ml-2 mb-5"
                required
              >
                <option value="" className="text-gray-400">
                  {" "}
                  {texts.pilih_lingkar}
                </option>
                <option value="0">&lt;90 cm</option>
                <option value="3">90-98 cm</option>
                <option value="4">&#62;98 cm</option>
              </select>
            </label>
          )}
          <br />
          <button
            className={`font-bold py-8 ${
              isDataComplete ? "" : "opacity-50 pointer-events-none"
            }`}
            disabled={!isDataComplete}
          >
            {texts.lanjut} →
          </button>
        </form>
      </div>
    </div>
  );
};

export default Datadiri;
