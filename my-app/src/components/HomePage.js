import React from "react";
import logo from "../images/newlogo.png";
import { Navigate, useNavigate } from "react-router-dom";
import bebelogo from "../images/bebesworld.png";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className=" bg-gradient-to-r from-purple-950 to-purple-800 min-h-screen">
      <div className="grid grid-cols-1 place-items-center">
        <div>
          <img src={bebelogo} alt="logo" className="w-[500px]" />
        </div>
        <div>
          <button
            onClick={() => navigate("options")}
            className="text-md text-black font-bold bg-yellow-400 px-10 py-2 rounded-3xl animate-bounce animate-infinite mb-20"
          >
            Enter
          </button>
        </div>
      </div>

      {/*   <div className=' flex items-center justify-center'>
      <img src={bebelogo} alt='logo' className='w-[700px] h-auto pt-10' />

      </div>
      <div className='flex-row text-center relative'>
      <button onClick={() => navigate('options')} className='text-md text-black font-bold bg-yellow-400 px-10 py-2 rounded-3xl animate-bounce animate-infinite mb-20'>Enter</button>
      </div> */}
    </div>
  );
}
