"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const AudioToggle = ({ className }: { className?: string }) => {
  const [toggle, setToggle] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio.mp3");
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0; // Start with volume at 0
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

  const fadeAudio = (fadeIn: boolean) => {
    if (audioRef.current) {
      const interval = setInterval(() => {
        if (audioRef.current) {
          if (fadeIn) {
            if (audioRef.current.volume < 1) {
              audioRef.current.volume = Math.min(
                audioRef.current.volume + 0.1,
                1
              );
            } else {
              clearInterval(interval);
            }
          } else {
            if (audioRef.current.volume > 0) {
              audioRef.current.volume = Math.max(
                audioRef.current.volume - 0.1,
                0
              );
            } else {
              audioRef.current.pause();
              clearInterval(interval);
            }
          }
        }
      }, 100); // Adjust fade duration (100ms per step)
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (toggle) {
        audioRef.current.play();
        fadeAudio(true); // Fade in
      } else {
        fadeAudio(false); // Fade out
      }
    }
  }, [toggle]);

  return (
    <button
      onClick={() => setToggle((prev) => !prev)}
      className={`cursor-pointer hover:opacity-100 w-5 rounded-full outline p-1 outline-1 outline-zinc-800  ${className}`}
    >
      {toggle ? (
        <Image
          src={"/audio.png"}
          alt="music-on"
          className="invert opacity-100 hover:opacity-100"
          width={100}
          height={110}
        />
      ) : (
        <Image
          src={"/mute.png"}
          alt="music-off"
          className="invert opacity-30 hover:opacity-100"
          width={100}
          height={110}
        />
      )}
    </button>
  );
};

export default AudioToggle;
