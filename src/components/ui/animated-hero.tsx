'use client';

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroTextProps {
  titles?: string[];
  prefix?: string;
  className?: string;
}

export function AnimatedHeroText({ 
  titles = ["inovação", "performance", "design", "precisão", "resultados"],
  prefix = "Criamos",
  className = ""
}: AnimatedHeroTextProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className={`flex gap-2 flex-col items-center ${className}`}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-center font-bold text-white flex flex-col items-center justify-center">
          <span className="text-white/80">{prefix}</span>
          <span className="relative flex w-full min-w-[280px] md:min-w-[400px] justify-center overflow-hidden text-center h-[1.4em] py-1 px-4">
            &nbsp;
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-black bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent whitespace-nowrap"
                initial={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 50 }}
              animate={
                titleNumber === index
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: titleNumber > index ? -150 : 150,
                      opacity: 0,
                    }
              }
            >
              {title}
            </motion.span>
          ))}
        </span>
      </h2>
    </div>
  );
}
