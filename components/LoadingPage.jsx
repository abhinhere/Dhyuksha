'use client';

import React, { useState, useEffect } from "react";

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here (e.g., 30ms for smooth progress)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <p className="mt-4 text-8xl font-makalo">
        {progress}%
      </p>
    </div>
  );
};

export default LoadingPage;

