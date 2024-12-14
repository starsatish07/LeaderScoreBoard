import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firbase";

const AddScore = () => {
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!playerName || !score) {
      alert("Please enter both name and score!");
      return;
    }

    try {
      await addDoc(collection(db, "leaderboard"), {
        name: playerName,
        score: parseInt(score, 10),
      });

      alert("Score added successfully!");
      setPlayerName("");
      setScore("");
    } catch (error) {
      console.error("Error adding score:", error);
      alert("Failed to add score.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center mb-8 gap-4"
    >
      <input
        type="text"
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Score
      </button>
    </form>
  );
};

export default AddScore;
