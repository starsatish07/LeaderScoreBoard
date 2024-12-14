import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firbase";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "leaderboard"), orderBy("score", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leaderboard = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(leaderboard);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Global Leaderboard</h2>

      <ul className="divide-y divide-gray-200">
        {players.map((player, index) => (
          <li
            key={player.id}
            className="py-3 flex justify-between items-center"
          >
            <span className="font-medium text-gray-700">
              {index + 1}. {player.name}
            </span>

            <span className="font-bold text-gray-800">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
