import React from "react";
import AddScore from "./components/AddScore";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-200 flex flex-col items-center py-10 px-4">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-14 text-center drop-shadow-lg">
        Firebase Global Leaderboard
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col justify-center items-center transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add Your Score</h2>
          <AddScore />
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Leaderboard</h2>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default App;
