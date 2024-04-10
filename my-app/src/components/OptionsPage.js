import React from 'react'

export default function OptionsPage() {
  return (
    <div className='bg-gradient-to-r from-purple-950 to-purple-800 h-screen'>
      <div class="flex items-center justify-center h-16">
        <div class=" mt-[600px] p-[500]">
        <div className='text-2xl font-bold mb-10 text-yellow-400'>Choose a coding language</div>
         <div className='flex flex-col col-3 gap-5'>
         <button className='bg-teal-400 rounded-xl py-5 px-20 font-bold hover:bg-yellow-400'>Javascript</button>
         <button className='bg-teal-400 rounded-xl py-5 px-20 font-bold hover:bg-yellow-400'>HTML</button>
         <button className='bg-teal-400 rounded-xl py-5 px-20 font-bold hover:bg-yellow-400'>CSS</button>
         </div>
        </div>
      </div>
    </div>
  )
}
