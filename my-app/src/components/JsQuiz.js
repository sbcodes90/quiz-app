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
          <img src={bebe} alt="bebe" />
        </div>
        <div className="bg-white lg:w-[500px] lg:h-[400px] rounded-2xl p-10 shadow-2xl">
          Uh-oh!! Bebe is hungry , feed her a treat//code to do so this is the
          code to feed her on click //if correct feed her animation on
          click//lets explain the drag and drop feature{" "}
       
        </div>
        <img src={treat} alt="dog-treat" />
        <button className="mt-10 py-5 rounded-3xl mb-20 bg-yellow-400 font-extrabold">
          Lets Play
        </button>
      </div>
    </div>
  );
}
