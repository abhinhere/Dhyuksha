import React from 'react'

import GradualSpacing from "@/components/ui/gradual-spacing";

export const Hero = () => {
    return (
        <div className='h-screen'>
            <div className='hidden lg:flex lg:gap-32 lg:flex-col font-makalo h-full w-full justify-center items-center'>
                <div>
                    <GradualSpacing
                        className="text-[100px] bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]"
                        text="DHYUKSHA"
                    />
                    <GradualSpacing
                        className="text-9xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]"
                        text="JAN 27 TO FEB 6"
                    />
                </div>
                <div className="relative flex w-full font-cakra text-[#F79A07] bg-[#1F0201] overflow-x-hidden">
                    <div className="py-4 animate-marquee whitespace-nowrap">
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                    </div>
                    <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                        <span className="text-xl mx-4">The Flame of arts</span>
                    </div>
                </div>
            </div>
            <Mobile />
        </div>
    )
}

const Mobile = () => {
    return (
        <div className='lg:hidden w-[100%] gap-32 font-makalo flex-col h-[100%] flex justify-center items-center bg-[url("blackbg.png")] bg-opacity-60 bg-black'>
            <div>
                <GradualSpacing
                    className="text-8xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]"
                    text="JWAALA '24"
                />
                <GradualSpacing
                    className="text-7xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]"
                    text="OCT 28 | 29"
                />
            </div>
            <div className="relative flex w-full font-cakra text-[#F79A07] bg-[#1F0201] overflow-x-hidden">
                <div className="py-4 animate-marquee whitespace-nowrap">
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                </div>
                <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                    <span className="text-xl mx-4">The Flame of arts</span>
                </div>
            </div>
        </div>
    )
}