import React from "react";
import axios from "axios";

const LeetcodeStats = async () => {
  interface statsResponse {
    status: string;
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
  }

  const res = await axios.get<statsResponse>(
    "https://leetcode-stats-api.herokuapp.com/ankitraz"
  );

  return (
    <div className="my-3">
      <p>Leetcode Stats: </p>
      <ul className="flex gap-1 ">
        <li className="">{res.data.totalSolved}</li>
        <li className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5  rounded dark:bg-green-900 dark:text-green-300">
          <span>{res.data.easySolved}</span>
        </li>
        <li className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          <span>{res.data.mediumSolved}</span>
        </li>
      </ul>
    </div>
  );
};

export default LeetcodeStats;
