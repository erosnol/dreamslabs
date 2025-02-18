'use client';

import { motion } from 'framer-motion';

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/10" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent" />
      </motion.div>

      {/* Moving gradients */}
      <motion.div
        className="absolute -inset-[100%]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-800/15 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-600/15 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Additional accent gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-400/5 via-transparent to-transparent" />
      </div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.2] mix-blend-soft-light" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
    </div>
  );
}
