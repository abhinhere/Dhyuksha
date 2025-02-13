"use client";
import React from "react";
// Import different images for each placement
import ece from "./results_images/ectug.jpg";
import mca from "./results_images/mcatug.jpg";
import diptug from "./results_images/diplomatug.jpg";
import cricket from "./results_images/cricket.png"; 
import cetug from "./results_images/civiltug.jpg";
import stafftug from "./results_images/stafftugwn.jpg";
import civiltennies from "./results_images/civiltennieswn.jpg"; 
import eeeten from "./results_images/eeetenn.jpg";
import wwmcatug from "./results_images/wmcatug.jpg";
import mmcack from "./results_images/mcack.jpg";
import wcsett from "./results_images/csett.jpg";
import fbcivil from "./results_images/fbcivil.jpg";
import fbcse from "./results_images/fbcse.jpg";
import fbit from "./results_images/fbit.jpg";
import staffck from "./results_images/staffck.jpg";
import stafftt from "./results_images/stafftt.jpg";
import ectt from "./results_images/ectt.jpg";
import fbcivilm from "./results_images/fbcivilm.jpg";
import fbecm from "./results_images/fbecm.jpg";
import ittt from "./results_images/ittt.jpg";
import ckit from "./results_images/ckit.jpg";
import eeefbb from "./results_images/eeefbb.jpg";
import csck from "./results_images/csck.jpg";
import volleyball from "./results_images/volleyball.jpg";
import bateee from "./results_images/bateee.jpg";
import badminiton from "./results_images/badminiton.jpg";
import batcivilmix from "./results_images/batcivilmix.jpg";
import batcivil from "./results_images/batcivil.jpg";
import batstaff from "./results_images/batstaff.jpg";
import batstaffwm from "./results_images/batstaffwm.jpg";


export default function ResultsPage() {
  const events = [
    {
      title: "Tug of War (Men)",
      winners: [
        { team: "ECE", image: ece },
        { team: "MCA", image: mca },
        { team: "DIPLOMA", image: diptug },
      ],
    },
    {
      title: "Tug of War (Women)",
      winners: [
        { team: "CE", image: cetug },
        { team: "STAFF", image: stafftug },
        { team: "MCA", image: wwmcatug },
      ],
    },
    {
      title: "Cricket (Men)",
      winners: [
        { team: "MCA", image: mmcack },
        { team: "STAFF", image: staffck },
        { team: "ECE", image: ece },
      ],
    },
    {
      title: "Cricket (Women)",
      winners: [
        { team: "IT", image: ckit },
        { team: "ECE", image: cricket },
        { team: "CSE", image: csck },
      ],
    },
    {
      title: "Table Tennis (Men)",
      winners: [
        { team: "EEE", image: eeeten },
        { team: "ECE", image: ectt },
        { team: "STAFF", image: stafftt },
      ],
    },
    {
      title: "Table Tennis (Women)",
      winners: [
        { team: "IT", image: ittt },
        { team: "CSE", image: wcsett },
        { team: "CIVIL", image: civiltennies },
      ],
    },
    {
      title: "Football (Men)",
      winners: [
        { team: "CIVIL", image: fbcivilm },
        { team: "EEE", image: eeefbb },
        { team: "EC", image: fbecm },
      ],
    },
    {
      title: "Football (Women)",
      winners: [
        { team: "CIVIL", image: fbcivil },
        { team: "CSE", image: fbcse },
        { team: "IT", image: fbit },
      ],
    },
    {
      title: "Badminiton (Women)",
      winners: [
        { team: "IT", image: badminiton },
        { team: "STAFF", image: batstaffwm },
        { team: "CSE", image: badminiton },
      ],
    },
    {
      title: "Badminiton (Men)",
      winners: [
        { team: "STAFF", image: batstaff },
        { team: "EEE", image: bateee },
        { team: "CIVIL", image: batcivil },
      ],
    },
    {
      title: "Badminiton (MIXED)",
      winners: [
        { team: "CSE", image: badminiton },
        { team: "IT", image: badminiton },
        { team: "CIVIL", image: batcivilmix },
      ],
    },
    {
      title: "Volleyball  (Women)",
      winners: [
        { team: "IT", image: volleyball },
        { team: "CSE", image: volleyball },
        { team: "CIVIL", image: volleyball },
      ],
    },
    {
      title: "Volleyball  (Men)",
      winners: [
        { team: "MCA", image: volleyball },
        { team: "EC", image: volleyball },
        { team: "CSE", image: volleyball },
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
                  <h2 className="text-base md:text-lg font-bold">{index === 0 ? "1st" : index === 1 ? "2nd" : "3rd"} Place</h2>
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
