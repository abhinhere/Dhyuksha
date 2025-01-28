import React from 'react'
import leaderboardData from '@/app/leaderboard/leaderboardData'

const Leaderboard = () => {
    // Sort data by points in descending order
    const sortedData = [...leaderboardData].sort((a, b) => b.points - a.points);

    return (
        <div className='h-screen w-screen'>
            <div className='justify-center flex-col h-full items-center flex'>
                <h1 className="font-makalo justify-center items-center flex flex-col lg:text-7xl lg:mb-0 pb-10 text-5xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]">
                The final result will be announced on the main stage.</h1>
            </div>
        </div>
    )
}

export default Leaderboard
