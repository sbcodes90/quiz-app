import React, { useState } from "react";
import dog from "../images/dog.png";
import { questions } from "../utils/data.js";
export default function JsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
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
  }

  return (
    <>
      <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
        <header className="text-2xl text-white font-black text-center pt-10">
          Javascript
        </header>
        <div className="grid lg:grid-cols-2">
          <div>
            <img src={dog} alt="dog" />
          </div>
          {!showScore ? (
            <div className="grid-cols-2 mx-20 mb-10 lg:mr-20 lg:mt-[150px]">
              <div className="bg-white rounded-3xl p-5 font-bold">
                {questions[currentQuestion]?.questionText}
              </div>
              {questions[currentQuestion]?.answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  key={answerOption.answerText}
                  className="bg-yellow-500 text-center rounded-2xl mt-2 p-5 font-bold w-full hover:bg-teal-600"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-white font-black text-2xl text-center bg-orange-400 lg:mt-[120px] lg:mr-10 lg:mb-40 rounded-3xl pt-[150px]">
              { score === 4 && <div>Hooray! You did it! You scored 100%!</div>}
              <br></br>
             { score <=3 && <><div>Whoops! You failed it's okay..</div> <button className="pt-10" onClick={tryAgain}>
                Try Again
              </button></> }
            </div>
          )}
        </div>
      </div>
    </>
  );
}
