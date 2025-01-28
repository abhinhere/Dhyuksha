import React from 'react'
import leaderboardData from '@/components/leaderboard/leaderboardData'

const Leaderboard = () => {
    // Sort data by points in descending order
    const sortedData = [...leaderboardData].sort((a, b) => b.points - a.points);

    return (
        <div className='flex w-full gap-4 pt-5 font-makalo text-[#fefefe] flex-col items-center'>
            <h1 className='font-makalo text-5xl md:text-7xl text-[#fefefe]'>
                Leaderboard
            </h1>
                    <div className='w-[70%] flex justify-between items-center px-5 h-10 bg-[#152C37] rounded-xl hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r' >
                        <h1>Rank</h1>
                        <h1>Department</h1>
                        <h1>Points</h1>
                    </div>

                    {sortedData.map((entry, index) => (
                        <div
                            key={index}
                            className='w-[70%] flex justify-between items-center px-5 h-10 bg-[#152C37] rounded-xl hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r'
                        >
                            <h1>{index + 1}.</h1>
                            <h1>{entry.department}</h1>
                            <h1>{entry.points}</h1>
                        </div>
                    ))}
                </div>
    )
}

export default Leaderboard
