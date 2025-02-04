"use client";
import React from "react";
// Import different images for each placement
import ece from "./ecetug.jpg";
import mca from "./mcatug.jpg";
import tug from "./tugofwar.jpg";
import cricket from "./cricket.png"; 

export default function ResultsPage() {
  const events = [
    {
      title: "Tug of War (Men)",
      winners: [
        { team: "ECE", image: ece },
        { team: "MCA", image: mca },
        { team: "", image: tug },
      ],
    },
    {
      title: "Tug of War (Women)",
      winners: [
        { team: "CE", image: tug },
        { team: "STAFF", image: tug },
        { team: "", image: tug },
      ],
    },
    {
      title: "Cricket (Men)",
      winners: [
        { team: "MCA", image: mca },
        { team: "STAFF", image: cricket },
        { team: "ECE", image: ece },
      ],
    },
    {
      title: "Cricket (Women)",
      winners: [
        { team: "IT", image: cricket },
        { team: "ECE", image: cricket },
        { team: "CSE", image: cricket },
      ],
    },
    {
      title: "Table Tennis (Men)",
      winners: [
        { team: "EEE", image: cricket },
        { team: "CSE", image: cricket },
        { team: "CIVIL", image: cricket },
      ],
    },
    {
      title: "Table Tennis (Women)",
      winners: [
        { team: "IT", image: cricket },
        { team: "CSE", image: cricket },
        { team: "CIVIL", image: cricket },
      ],
    },
  ];

  return (
    <div className=' max-w-5xl mx-auto p-10 pt-20 text-center text-white font-makalo '>
      <h1 className="text-5xl font-extrabold mb-8 text-white">Dhyuksha Results</h1>
      <p className="mb-10 text-xl text-gray-300">Check out the winners of each event!</p>

      {events.map((event, eventIndex) => (
        <div key={eventIndex} className="mb-12">
          {/* Event Title (Smaller Size) */}
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-white">{event.title}</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {event.winners.map((winner, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                {/* Use Original Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${winner.image.src})`, // Reference the imported image path
                  }}
                ></div>

                {/* Winner Info Box - Gold, Silver, Bronze Titles */}
                <div
                  className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 p-3 rounded-md text-center shadow-md
                  ${index === 0 ? "bg-yellow-500 text-black" : 
                    index === 1 ? "bg-gray-400 text-black" : 
                    "bg-orange-500 text-black"}`}
                >
                  <h2 className="text-base md:text-lg font-bold">{index + 1}st Place</h2>
                  <p className="mt-1 font-semibold">{winner.team}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
