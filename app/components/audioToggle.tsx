"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const AudioToggle = () => {
  const [toggle, setToggle] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize Audio only on client-side
    audioRef.current = new Audio("/audio.mp3");

    // set on loop
    if (audioRef.current) {
      audioRef.current.loop = true;
    }

    const storedTime = localStorage.getItem("audioTime");
    if (storedTime && audioRef.current) {
      audioRef.current.currentTime = parseFloat(storedTime);
    }

    const handleTimeUpdate = () => {
      if (audioRef.current) {
        localStorage.setItem(
          "audioTime",
          audioRef.current.currentTime.toString()
        );
      }
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    window.addEventListener("beforeunload", handleTimeUpdate);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
      window.removeEventListener("beforeunload", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (toggle) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [toggle]);

  return (
    <button
      onClick={() => setToggle((prev) => !prev)}
      className="cursor-pointer hover:opacity-100 w-5 rounded-full outline p-1 outline-1 outline-zinc-600"
    >
      {toggle ? (
        <Image
          src={"/audio.png"}
          alt="music-on"
          className="invert opacity-100"
          width={100}
          height={110}
        />
      ) : (
        <Image
          src={"/mute.png"}
          alt="music-off"
          className="invert opacity-50"
          width={100}
          height={110}
        />
      )}
    </button>
  );
};

export default AudioToggle;
