import React from 'react'
import leaderboardData from '@/components/leaderboard/leaderboardData'

const Leaderboard = () => {
    // Sort data by points in descending order
    const sortedData = [...leaderboardData].sort((a, b) => b.points - a.points);

    return (
        <div className='h-screen flex w-full gap-4 pt-20 pb-12 font-makalo text-[#fefefe] flex-col items-center bg-[url("leaderbg.png")] bg-black/60 bg-cover px-4'>
            <h1 className='font-makalo text-4xl md:text-5xl text-[#fefefe] text-center'>
                Leaderboard
            </h1>

            {/* Header Row */}
            <div className='w-full md:w-[70%] flex justify-center items-center px-2 h-12 bg-[#1B3A4B] rounded-xl font-bold text-center'>
                <h1 className="w-1/3 text-center">Rank</h1>
                <h1 className="w-1/3 text-center">Department</h1>
                <h1 className="w-1/3 text-center">Points</h1>
            </div>

            {/* Leaderboard Entries */}
            {sortedData.map((entry, index) => (
                <div
                    key={entry.department} // Use department as key if unique
                    className='w-full md:w-[70%] flex justify-center items-center px-2 h-10 bg-[#152C37] rounded-xl hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r text-center'
                >
                    <h1 className="w-1/3 text-center">{index + 1}.</h1> {/* Correct rank */}
                    <h1 className="w-1/3 text-center">{entry.department}</h1>
                    <h1 className="w-1/3 text-center">{entry.points}</h1>
                </div>
            ))}
        </div>
    )
}

export default Leaderboard
