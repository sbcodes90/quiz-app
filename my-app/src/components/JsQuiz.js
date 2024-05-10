import React, { useState } from "react";
import dog from "../images/dog.png";
import { questions } from "../utils/data.js";
import { Link } from "react-router-dom";

export default function JsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowSuccess(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const tryAgain = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <>
      <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
        <header className="text-2xl text-black font-black text-center p-5 bg-purple-500">
          JS Quiz
        </header>
        <div className="grid lg:grid-cols-2">
          <div>
            <img src={dog} alt="dog" />
          </div>

          {!showScore ? (
            <div className="grid-cols-2 mx-20 mb-10 lg:mr-20 lg:mt-[150px]">
              <div className="bg-white rounded-3xl p-5 font-black">
                {questions[currentQuestion]?.questionText}
              </div>
              {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  key={answerOption.answerText}
                  className="bg-yellow-500 text-center rounded-2xl mt-2 p-5 font-bold w-full hover:bg-teal-400"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-white font-black text-2xl text-center lg:mt-[120px] lg:mr-10 lg:mb-40 rounded-3xl pt-[100px]">
              {score === 4 && (
                <>
                  <div className="mb-10">Congrats Friend! You did it! You scored 100%!</div>
                  <Link
                    to="/options"
                    className="px-10 py-5 bg-teal-400 rounded-3xl text-sm text-black hover:bg-yellow-500"
                  >
                    Learn a different language
                  </Link>
                </>
              )}
              <br></br>
              {score <= 3 && (
                <>
                  <div>Whoops! Friend, I think you need more practice...</div>{" "}
                  <button
                    className="px-10 py-5 bg-orange-400 rounded-3xl mt-10 text-sm text-black"
                    onClick={tryAgain}
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
