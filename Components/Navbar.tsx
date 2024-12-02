import { TapsProps } from '@/Types';
import Link from 'next/link';
import React from 'react'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full h-32 absolute top-0 left-0 px-2">
        <div className="flex w-full h-full justify-between items-center">
        
            <h1 className='text-7xl'>
                Dina
            </h1>
            <div className="hidden md:flex w-full h-full justify-evenly items-center ">
                <Tap text="Home" link={''} />
                <Tap text="About" link={'./about'} />
                <Tap text="Menu" link={'./menu'} />
                <Tap text="Contacs" link={'./contacts'} />

            </div>
        <CiMenuFries className='flex md:hidden w-16 h-16' />
        <div className='hidden md:flex flex-col w-1/4'>
            <h1 className="text-xl text-end">medinah-City</h1>
            <h1 className="text-xl text-end">+966 55 952 6948</h1>
        </div>
        </div>
        
    </div>
  )
}

function Tap(props: TapsProps) {
    return (
        <Link href={props.link}>
            <h1 className='hidden md:flex text-3xl hover:scale-[112%]  transition-[3s] drop-shadow-md shadow-black text-center'>
            {props.text}
            </h1>
        </Link>
    )
}

export default Navbar;