'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import LoadingPage from "@/components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Leaderboard from "@/components/leaderboard/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
<<<<<<< HEAD
    }, 800); // Adjust the loading duration as needed
=======
    }, 1000); // Adjust the loading duration as needed
>>>>>>> 4233eb085615575d6b4cf1d09b74183cd2465b18

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="w-full h-[100svh]">
      {isLoading ? (
        <LoadingPage /> // Show loader during loading
      ) : (
        <>
          <Navbar /> {/* This will only be shown after loading is complete */}
          <Hero />
          <Leaderboard />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}
