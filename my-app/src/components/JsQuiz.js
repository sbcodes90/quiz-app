import React from "react";
import bg from "../images/quiz-background.png";
import dog from "../images/dog.png";
import treat from "../images/dogtreat.png";
import bebe from "../images/bebe.png";
export default function JsQuiz() {
  return (
    <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
      <div className="text-white text-3xl font-black text-center pt-10">
        Javascript
      </div>
      {/* <div className='flex flex-col-1 lg:col-2 items-center justify-around gap-5 pt-20'> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center px-10 py-10">
        <div className="lg:w-[500px]">
        <img src={treat} alt="dog-treat" />
        </div>
        <div className="bg-white lg:w-[500px] lg:h-[400px] rounded-2xl p-10 shadow-2xl">
        <div className="font-bold text-black text-center">Uh oh! Bebe is hungry!</div>
        <div className="text-center text-purple-800 font-bold mt-2">Which code will feed her a snack?</div>
        </div>
     {/*    <button className="mt-10 py-5 rounded-3xl mb-20 bg-yellow-400 font-extrabold">
          Lets Play
        </button> */}
      </div>
    </div>
  );
}
