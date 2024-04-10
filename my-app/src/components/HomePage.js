import React from 'react';
import logo from '../images/newlogo.png';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <>
    <div className=" bg-gradient-to-r from-purple-950 to-purple-800 h-screen">
      <div className=' flex items-center justify-center'>
      <img src={logo} alt='logo' className='w-[450px] h-auto pt-20' />

      </div>
      <div className='flex-row text-center relative'>
      <button className='text-2xl text-white font-black bg-teal-400 px-10 py-2 rounded-3xl animate-bounce animate-infinite'><Link to="options">Enter</Link></button>
      </div>
      </div>
 
</>
  )
}
