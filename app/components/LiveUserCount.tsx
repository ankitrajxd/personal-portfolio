"use client";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, X } from "lucide-react";


// use you own api url please.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const socket = io(API_URL, { autoConnect: false });

const FloatingUserCount = () => {
  const [views, setViews] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      socket.connect();
      socket.on("count", (count) => {
        setViews(count);
      });

      // Show after 5sec on mount
      setTimeout(() => {
        setIsVisible(true);
      }, 7000);
      setTimeout(() => setIsVisible(false), 15000);

      // Show every minute
      const interval = setInterval(() => {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 10000);
      }, 120000);

      return () => {
        socket.disconnect();
        clearInterval(interval);
      };
    } catch (error) {
      console.log("Error in FloatingUserCount: ", error);

      setIsVisible(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-3 right-3 z-50"
        >
          <div className="bg-zinc-900 p-3 sm:p-4 b rounded-lg shadow-lg border border-gray-500/20 w-48 sm:w-56">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-1 right-1 p-1 text-gray-200 hover:text-gray-100 transition-colors"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <div className="relative">
                <motion.span
                  key={views}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl font-bold text-gray-300"
                >
                  {views.toLocaleString()}
                </motion.span>
                <span className="absolute -top-1 -right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-200">
                Users <span className="text-green-500">Online</span>
              </p>
              <div className="flex items-center space-x-1 text-gray-300">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="text-2xs sm:text-xs">Chilling 😎</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingUserCount;
