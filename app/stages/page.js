import React from 'react'
import stageData from '@/app/stages/stagesData'

const stages = () => {
    return (
        <div className='h-screen w-screen'>
            <div className='justify-center flex-col h-full items-center flex'>
                <h1 className="font-makalo flex flex-col lg:text-7xl lg:mb-0 pb-10 text-5xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]">
                    Stages
                </h1>

                <div className='flex w-full gap-10 pt-5 font-cakra text-[#F79A07] flex-col items-center'>
                    <div className='w-[70%] flex justify-between items-center px-5 h-10 bg-[#2C0800] rounded-xl'>
                        <h1>No.</h1>
                        <h1>Stage</h1>
                        <h1>Location</h1>
                    </div>

                    {stageData.map((entry) => (
                        <div
                            key={entry.no}
                            className='w-[70%] flex justify-between items-center px-5 h-10 bg-[#2C0800] rounded-xl'
                        >
                            <h1>{entry.no}.</h1>
                            <h1>{entry.stage}</h1>
                            <h1>{entry.location}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default stages