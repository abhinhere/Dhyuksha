"use client"

import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import img from "@/app/public/logo.png";

export const Navbar = () => {
    const [scrollAmount, setScrollAmount] = useState(700); // Adjust as needed

const handleScrollDown = () => {
  window.scrollTo({
    top: window.scrollY + scrollAmount,
    behavior: 'smooth',
  });
};

    return (
        <div>
            <nav className='hidden font-makalo w-screen text-[#fefefe] absolute right-0 lg:flex px-16 pt-5'>
                <ul className='flex w-full gap-5 h-full items-center justify-between text-lg'>
                    <li>
                        <Image src={img} width={40} />
                    </li>
                    <div className='flex gap-5'>
                        <li className='hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl'>
                            <a href="/">Events</a>
                        </li>
                        <li className='hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl cursor-pointer'onClick={handleScrollDown}>
                            Results
                        </li>
                        <li className='hover:to-[#152c37] flex items-center hover:from-[#000102] bg-gradient-to-r px-5 rounded-xl cursor-pointer'onClick={handleScrollDown}>
                            Leaderboard
                        </li>
                        
                    </div>
                </ul>
            </nav>
            <Mobile />
        </div>
    )
}

const Mobile = () => {
    const [scrollAmount, setScrollAmount] = useState(700); // Adjust as needed

    const handleScrollDown = () => {
      window.scrollTo({
        top: window.scrollY + scrollAmount,
        behavior: 'smooth',
      });
    };
    return (
        <nav className='lg:hidden font-makalo w-screen text-[#fefefe] absolute right-0 flex pt-5 pl-5'>
            <ul className='flex w-full justify-between items-center text-sm pr-5'>
                <li>
                    <Image src={img} width={40} />
                </li>
                <div className='flex justify-between'>
                    <li className='hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl'>
                        <a href="/">Events</a>
                    </li>
                    <li className='hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl cursor-pointer'onClick={handleScrollDown}>
                        Results
                    </li>
                    <li className='hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r p-2 rounded-xl cursor-pointer'onClick={handleScrollDown}>
                        Leaderboard
                    </li>
                </div>
            </ul>
        </nav>
    )
}
