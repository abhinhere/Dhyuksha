"use client"

import { offstage, onstage } from "./items";

export default function CardHoverEffectDemo() {
    return (
        <div className='w-[100%] h-[100%] flex bg-[url("aboutbg.png")] bg-opacity-60 bg-black'>

            <div className='font-makalo flex-col flex mx-auto px-8 w-full h-full bg-[] items-center'>
                <div className="flex justify-center flex-col w-full h-full items-center py-20 gap-10">
                    <div className="flex items-center flex-col">
                        <h1 className="lg:text-9xl text-6xl text-[#fefefe]">
                            EVENTS
                        </h1>
                        <h3 className="lg:text-6xl text-4xl text-[#fefefe]">
                            Games
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {onstage.map((event, index) => (
                            <div className="text-700 px-5 pt-5 w-[300px] h-[300px] bg-[#152c37] rounded-lg hover:-translate-x-5 hover:-translate-y-5 text-[#fefefe] hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r">
                                <h6 className="text-4xl">
                                    {event.title}
                                </h6>
                                <h7>
                                    {event.description}
                                </h7>
                            </div>
                        ))}
                    </div>

                    <h3 className="lg:text-6xl text-4xl text-[#fefefe]">
                        Athletics
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {offstage.map((event, index) => (
                            <div className="text-[#BD620D] px-5 pt-5 w-[300px] h-[300px] bg-[#152c37] rounded-lg hover:-translate-x-5 hover:-translate-y-5 text-[#fefefe] hover:to-[#152c37] hover:from-[#000102] bg-gradient-to-r">
                                <h6 className="text-4xl">
                                    {event.title}
                                </h6>
                                <h7 className>
                                    {event.description}
                                </h7>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
