import React from 'react'


export const About = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen md:h-screen bg-cover bg-center relative px-4 py-8 md:py-0 '>
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-b'></div>

            <div className='relative z-10 flex flex-col items-center text-center'>
                <h1 className='font-makalo text-5xl md:text-7xl text-[#fefefe]'>
                    About
                </h1>

                <p className='text-base md:text-lg font-makalo text-[#fefefe] mt-4 md:mt-6 w-full md:w-[95%] leading-relaxed max-w-3xl'>
                Dhyuksha: The Spirit of Sports is the College of Engineering Vadakara’s dynamic inter-departmental sports festival. It brings students together from all disciplines to showcase their athletic skills and team spirit in a wide range of sports and games. From thrilling football matches and high-energy relay races to precision-driven games like badminton and chess, Dhyuksha celebrates the vibrant sporting culture of CEV. More than a competition, Dhyuksha is a celebration of teamwork, perseverance, and the unyielding drive to excel, fostering a campus-wide spirit of camaraderie and honoring the passion that fuels the spirit of sports in every student.
                </p>

            </div>
        </div>
    )
}
