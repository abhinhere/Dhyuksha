import React from 'react'


export const About = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen md:h-screen bg-cover bg-center relative px-4 py-8 md:py-0'>
            {/* Overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-b'></div>

            <div className='relative z-10 flex flex-col items-center text-center'>
                <h1 className='font-makalo text-5xl md:text-7xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]'>
                    About JWAALA
                </h1>

                <p className='text-base md:text-lg font-cakra text-[#F79A07] mt-4 md:mt-6 w-full md:w-[75%] leading-relaxed max-w-3xl'>
                    Jwaala: The Flame of Arts is the College of Engineering Vadakara’s vibrant inter-departmental arts and literary festival. It unites students across disciplines to showcase their talents in music, dance, theater, and visual arts, fostering a campus-wide celebration of creativity and expression. From captivating solo performances and traditional group dances to intricate offstage events like painting and poetry, Jwaala highlights the diverse artistic spirit of CEV. More than a competition, Jwaala is a celebration of community, inspiring collaboration and honoring the passion that fuels the flame of arts in every student.
                </p>

            </div>
        </div>
    )
}
