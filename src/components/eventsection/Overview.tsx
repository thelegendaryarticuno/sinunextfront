// Overview.js
import React from 'react';
import { useTheme } from 'next-themes';

const Overview = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-3xl mx-auto p-6 rounded-lg ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-4">
        Welcome to Adobe GenSolve: where the fusion of generative AI and Adobe Creative Cloud empowers you to transform innovative ideas into groundbreaking solutions for a brighter future.
      </p>
      <p className="mb-4">
        This hackathon invites the brightest minds to leverage generative AI and Adobe Creative Cloud technology, driving innovation that transforms our world. Showcase your talent, solve real-world problems, and contribute to a future where technology and creativity pave the way for meaningful change. Exciting rewards await the winners, along with a chance to work at Adobe.
      </p>
      <p className="font-bold mb-4">
        Note: This challenge is open to students pursuing full-time B.Tech/B.E. or dual degree programs from Engineering colleges in India & will graduate in 2025, 2026, or 2027.
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Rounds:</h3>
        <ul className="list-disc list-inside">
          <li>Round 1: Online MCQ and Coding Contest - Elimination</li>
          <li>Round 2: Project Submission - Elimination</li>
          <li>Round 3: Mentorship for the Shortlisted Teams</li>
          <li>Round 4: Grand Finale at the Adobe Noida Office</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
