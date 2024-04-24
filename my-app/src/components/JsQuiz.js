import React from "react";
import dog from "../images/dog.png";
import { questions } from "../utils/data";

export default function JsQuiz() {

  return (
    <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
      <header className="text-2xl text-white font-black text-center pt-10">
        Javascript
      </header>
      <div className="grid grid-cols-2">
        <div>
          <img src={dog} alt="dog" />
        </div>
        <div className="grid-cols-2 mr-20 mt-[150px]">
          <div className="bg-white rounded-3xl p-5 font-bold"> {questions[0].questionText} </div>
         {questions[0].answerOptions.map((answerOption) => (
            <button className="bg-yellow-500 text-center rounded-2xl mt-2 p-5 font-bold w-full hover:bg-teal-600"> 
           {answerOption.answerText}
          </button> 
         ))
         }
        </div>
      </div>
    </div>
  );
}
