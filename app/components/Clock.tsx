/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
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
    <Button variant={"secondary"} className=" opacity-85">
      <span className="font-bold dark:text-orange-500 text-orange-600">
        {convertToTwoDigit(time.hours)}:
      </span>
      <span className="font-bold dark:text-orange-500 text-orange-600">
        {convertToTwoDigit(time.minutes)}
      </span>
      <span>{time.hours >= 12 ? " 🌙" : " 🌞 "}</span>
    </Button>
  );
};

export default Clock;
