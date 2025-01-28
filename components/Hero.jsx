import React from 'react'

import GradualSpacing from "@/components/ui/gradual-spacing";

export const Hero = () => {
    return (
        <div className='h-screen bg-[url("herobg.png")] bg-opacity-60 bg-black'>
            <div className='hidden lg:flex lg:gap-32 lg:flex-col font-makalo h-full w-full justify-center items-center'>
                <div>
                    <GradualSpacing
                        className="text-[150px] text-[#fefefe]"
                        text="DHYUKSHA"
                    />
                    <GradualSpacing
                        className="text-4xl text-[#fefefe]"
                        text="JAN 27 - FEB 13"
                    />
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
                    className="text-5xl text-[#fefefe]"
                    text="DHYUKSHA"
                />
                <GradualSpacing
                    className="text-2xl text-[#fefefe]"
                    text="JAN 27 - FEB 13"
                />
            </div>
        </div>
    )
}