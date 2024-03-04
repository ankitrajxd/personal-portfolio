/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <div className=" opacity-85 w-full lg:w-fit text-sm border p-4 rounded-md">
      <span className="mx-1">It&apos;s </span>
      <span className="font-bold dark:text-orange-500 text-orange-600">
        {convertToTwoDigit(time.hours)}:
      </span>
      <span className="font-bold dark:text-orange-500 text-orange-600">
        {convertToTwoDigit(time.minutes)}
      </span>
      <span>{time.hours >= 12 ? " 🌙" : " 🌞"}</span>
      <span className="mx-2">here in India</span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png"
        alt="india flag"
        className="w-[20px] inline-block rounded-[2px]"
      />{" "}
    </div>
  );
};

export default Clock;
