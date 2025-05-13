"use client";

import { motion } from "framer-motion";

export function Security() {
  return (
    <div className="relative flex h-96 w-full items-center justify-center rounded-xl bg-black shadow-2xl overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Shield container */}
        <motion.div
          className="flex h-48 w-48 items-center justify-center rounded-full bg-slate-800 shadow-lg border border-slate-700"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 rgba(59, 130, 246, 0)",
              "0 0 30px rgba(59, 130, 246, 0.3)",
              "0 0 0 rgba(59, 130, 246, 0)"
            ]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          {/* Shield icon */}
          <motion.div
            className="relative flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            {/* Custom shield SVG with checkmark */}
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(59, 130, 246, 0.1)"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
