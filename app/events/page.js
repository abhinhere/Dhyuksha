"use client"

import { offstage, onstage } from "./items";

export default function CardHoverEffectDemo() {
    return (
        <div className='w-[100%] h-[100%] flex'>

            <div className='font-makalo flex-col flex mx-auto px-8 w-full h-full bg-[] items-center'>
                <div className="flex justify-center flex-col w-full h-full items-center py-20 gap-10">
                    <div className="flex items-center flex-col">
                        <h1 className="lg:text-9xl text-7xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]">
                            EVENTS
                        </h1>
                        <h3 className="lg:text-6xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]">
                            Onstage
                        </h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {onstage.map((event, index) => (
                            <div className="text-yellow-700 px-5 pt-5 w-[200px] h-[200px] bg-[#2C0800] rounded-lg hover:-translate-x-5 hover:-translate-y-5">
                                <h6 className="text-4xl">
                                    {event.title}
                                </h6>
                                <h7>
                                    {event.description}
                                </h7>
                            </div>
                        ))}
                    </div>

                    <h3 className="lg:text-6xl text-4xl bg-gradient-to-b bg-clip-text text-transparent from-[#F79A07] via-[#B95811] to-[#7B161C]">
                        Offstage
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {offstage.map((event, index) => (
                            <div className="text-[#BD620D] px-5 pt-5 w-[200px] h-[200px] bg-[#2C0800] rounded-lg hover:-translate-x-5 hover:-translate-y-5">
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
