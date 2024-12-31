import React from 'react'
import data from '../../assets/data/data.json'

const Hero = () => {
  return (
    <div>
        {/* Overlay */}
        <div className='h-screen w-full absolute top-0 left-0 bg-black/70 z-[-1]'></div>
            {/* Hero */}
              <div class="h-screen bg-cover z-[-2] absolute inset-0 top-0 left-0 bg-center bg-[url('/img/netflix_bg.jpg')]"></div>
            {/* Hero Content */}
            <div className='w-full h-[75vh] flex flex-col items-center justify-center text-white p-4'>
            {/* Hero Text */}
            <div className='flex flex-col gap-1'>
               <h1 className='max-w-[1000px] min-w-[300px] w-full text-center text-3xl md:text-5xl font-bold py-4'>{data.Hero.title}</h1>
               <h4 className='text-center text-[15px] md:text-2xl px-4'>{data.Hero.subtitle1}</h4>
               <h4 className='text-center text-[15px] md:text-2xl px-4'>{data.Hero.subtitle2}</h4>
            </div>
            {/* Get Started */}
            <div className='flex md:flex-row flex-col items-center justify-center gap-4 py-8 w-full'>
                <input type="text" placeholder='Email Address'
                className='max-w-[300px] min-w-[100px] w-full h-[50px] bg-black/50 text-[14px] p-4 border border-gray-400 rounded-sm' />
                <button className='max-w-[200px] min-w-[50px] w-full h-[50px] bg-red-700 hover:bg-red-800 rounded-sm font-semibold'>Get Started</button>
            </div>
             </div>  
    </div>
  )
}

export default Hero
