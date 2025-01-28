import React from 'react';
import Image from 'next/image';
import first from "@/app/public/box-first.png";
import second from "@/app/public/box-second.png";
import third from "@/app/public/box-third.png";
import leaderboardData from '@/app/leaderboard/leaderboardData';

// Medal Component for both Mobile and Desktop
const MedalCard = ({ image, department, points, additionalClasses }) => (
    <div className={`relative flex flex-col items-center ${additionalClasses}`}>
        <Image className='w-48 md:w-72 h-auto object-contain' src={image} alt={`${department} place`} />
        <div className='absolute inset-0 mt-20 flex flex-col items-center justify-center text-center'>
            <h2 className='text-2xl md:text-3xl font-semibold text-white'>{department}</h2>
            <p className='text-lg md:text-2xl font-medium text-[#F79A07]'>{points} Points</p>
        </div>
    </div>
);

// Desktop View Component
const ScoreboardDesktop = ({ topThree }) => (
    <div className='flex gap-10 font-makalo text-[#F79A07] pt-10'>
        <MedalCard
            image={second}
            department={topThree[1].department}
            points={topThree[1].points}
        />
        <MedalCard
            image={first}
            department={topThree[0].department}
            points={topThree[0].points}
            additionalClasses="mt-[-20px]" // Adjust this value as needed
        />
        <MedalCard
            image={third}
            department={topThree[2].department}
            points={topThree[2].points}
        />
    </div>
);

// Mobile View Component
const ScoreboardMobile = ({ topThree }) => (
    <div className='flex flex-col gap-5 items-center text-[#F79A07] pt-10'>
        <MedalCard image={first} department={topThree[0].department} points={topThree[0].points} />
        <MedalCard image={second} department={topThree[1].department} points={topThree[1].points} />
        <MedalCard image={third} department={topThree[2].department} points={topThree[2].points} />
    </div>
);

// Main Component
export const Scoreboard = () => {
    // Sort leaderboard data by points in descending order
    const sortedData = [...leaderboardData].sort((a, b) => b.points - a.points);
    const topThree = sortedData.slice(0, 3); // Get top 3 departments

    return (
        <div className='flex flex-col w-full items-center pb-10 bg-[url("blackbg.png")]'>
            <h1 className='font-makalo text-5xl md:text-7xl text-[#fefefe]'>
                Leaderboard
            </h1>
            <div className='hidden md:flex'>
                <ScoreboardDesktop topThree={topThree} />
            </div>
            <div className='flex md:hidden'>
                <ScoreboardMobile topThree={topThree} />
            </div>
        </div>
    );
};

export default Scoreboard;
