"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  circleColors
}) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {circleColors.map((item, idx) => (
        <div
          className="group relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div

                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md  bg-[#0C0C0C] px-4 py-2 text-xs shadow-xl">
                <div
                  className={`absolute inset-x-10 -bottom-px z-30 h-px w-[50%] bg-gradient-to-r from-transparent ${item.via} to-transparent`} />
                <div
                  className={`absolute -bottom-px left-10 z-30 h-px w-[50%] bg-gradient-to-r from-transparent ${item.via} to-transparent`} />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            data-aos-duration={500 + item.id * 500}
            data-aos="fade-up"
            style={{ backgroundColor: item.color }}
            key={item.id}
            className="h-15 w-15 rounded-full border-2 border-gray-800"
          />
        </div>
      ))}
    </>
  );
};
