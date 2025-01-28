'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import { About } from "@/components/About";
import { Scoreboard } from "@/components/Scoreboard";
import LoadingPage from "@/components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the loading duration as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="w-full h-[100svh]">
        {isLoading ? (
          <LoadingPage /> // Show loader during loading
        ) : (
          <>
            <Navbar />
            <Hero/>
            <About/>
            <Scoreboard/>
            <Footer />
          </>
        )}
    </div>
  );
}
