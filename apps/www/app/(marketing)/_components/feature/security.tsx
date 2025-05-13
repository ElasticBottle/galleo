"use client";

import { motion } from "framer-motion";

export function Security() {
  return (
    <div className="relative flex h-96 w-full items-center justify-center rounded-xl bg-black shadow-2xl overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Shield container */}
        <motion.div
          className="flex h-36 w-36 items-center justify-center rounded-full bg-slate-800 shadow-lg border border-slate-700"
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
            {/* Custom shield SVG */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
              <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            {/* Lock icon overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
              }}
            >
              {/* Custom lock SVG */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Orbiting elements */}
        <div className="absolute h-64 w-64">
          {/* Data Privacy */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%' }}
            animate={{
              x: [0, 70, 0, -70, 0],
              y: [0, 70, 0, -70, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "linear",
            }}
          >
            <motion.div
              className="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 shadow-lg border border-slate-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              {/* Eye off icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a13.83 13.83 0 0 1-1.67 2.68" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2l20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Encryption */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%' }}
            animate={{
              x: [0, -90, 0, 90, 0],
              y: [0, -40, 0, 40, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              ease: "linear",
            }}
          >
            <motion.div
              className="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 shadow-lg border border-slate-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
                delay: 1
              }}
            >
              {/* Document check icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16L11 18L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
          
          {/* No Data Storage */}
          <motion.div
            className="absolute"
            style={{ top: '50%', left: '50%' }}
            animate={{
              x: [0, 50, 0, -50, 0],
              y: [0, -80, 0, 80, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 18,
              ease: "linear",
            }}
          >
            <motion.div
              className="flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800 shadow-lg border border-slate-700"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.5,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              {/* Data protection icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent">
                <path d="M21 8V21H3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 3H1V8H23V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
