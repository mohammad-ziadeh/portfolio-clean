"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { createPortal } from "react-dom";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef(null);

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event, item) => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = event.target.getBoundingClientRect();
      const halfWidth = event.target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
      setPosition({
        x: rect.left + rect.width -50 ,
        y: rect.top - 60,
      });
    }); 
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className="group relative inline-block"
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          onMouseMove={(e) => handleMouseMove(e, item)}
        >
          {item.icon ? (
            item.icon
          ) : (
            <img
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="relative h-14 w-14 rounded-full border-2 border-white object-cover transition duration-500 group-hover:z-30 group-hover:scale-105"
            />
          )}
        </div>
      ))}

      {createPortal(
        <AnimatePresence>
          {hoveredItem && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 12 },
              }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -100%)",
                zIndex: 999999,
              }}
              className="pointer-events-none flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl border-1 border-amber-50"
            >
              <div className="text-base font-bold text-white">
                {hoveredItem.name}
              </div>
              <div className="text-xs text-gray-300">
                {hoveredItem.designation}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
