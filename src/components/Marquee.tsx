import { motion } from 'motion/react';

const skills = [
  "URBAN PLANNING",
  "ARCHITECTURE",
  "CONSULTANCY",
  "REAL ESTATE",
  "SUSTAINABILITY",
  "PROJECT MANAGEMENT",
  "MASTER PLANNING",
  "GIS",
  "3D RENDERING",
];

export function Marquee() {
  return (
    <div className="relative w-full py-3 md:py-4 overflow-hidden bg-primary text-background flex flex-col justify-center -rotate-2 scale-[1.02] my-12 z-20 shadow-2xl skew-y-1">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap gap-4 md:gap-8 px-2 md:px-4 items-center inline-flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {/* Duplicate multiple times for a safe infinite loop */}
          {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <span className="text-xl md:text-2xl font-display font-black tracking-tighter uppercase drop-shadow-sm">
                {skill}
              </span>
              <span className="text-lg opacity-60">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
