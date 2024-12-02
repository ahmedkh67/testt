import React from 'react'
import { HeroProps } from '@/Types';

function Hero(props: HeroProps) {

  return (
    <div className='w-full flex justify-evenly h-full flex-col items-center'>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl md:text-[230px] my-8">
            {props.title}
        </h1>
        <p className="text-xl w-4/5 text-center">

        {props.des}

        </p>

      </div>

        <button className='Button1 border-white border-[6px]'>
          <p className="text-3xl">
            {props.btn}
          </p>
            

        </button> 
    </div>

 )
}

export default Hero ;