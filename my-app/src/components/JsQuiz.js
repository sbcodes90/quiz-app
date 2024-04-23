import React from "react";
import dog from "../images/dog.png";
export default function JsQuiz() {
  return (
    <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
      <header className="text-2xl text-white font-black text-center pt-10">
        Javascript
      </header>
{/* 
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 ...">
          <img src={dog} alt="dog" className="w-[500px]"/>
        </div>
        <div class="col-span-2 pt-10 bg-white mr-20 mt-10 p-5 rounded-3xl">Question</div>
        <div class="row-span-2 col-span-2 bg-yellow-500 h-fit mr-20 rounded-3xl p-5">Answer Option One</div>
        
      </div> */}
      <div className="grid grid-cols-2">
        <div><img src={dog} alt="dog" /></div>
        <div className="grid-cols-2 mr-20 mt-[150px]">
         <div className="bg-white rounded-3xl p-5"> Question </div>
         <div className="bg-yellow-500 text-center rounded-3xl mt-2 p-5"> Answer </div>
         <div className="bg-yellow-500 text-center rounded-3xl mt-2 p-5"> Answer </div>
          </div>

      </div>
    </div>
  );
}
