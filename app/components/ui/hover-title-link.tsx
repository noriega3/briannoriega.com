"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

export const HoverTitleLink = ({
  label,
  children,
}: {
  label: string;
  children: (
    handleMouseMove: React.MouseEventHandler<HTMLAnchorElement> | undefined
  ) => React.ReactNode;
}) => {
  const [showTooltip, setShowTooltip] = useState<boolean | null>(null);
  const x = useMotionValue(0);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(null)}
      >
        <AnimatePresence mode="popLayout">
          {showTooltip && (
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
                whiteSpace: "nowrap",
              }}
              className="absolute -top-12 -left-3/4 text-xs rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="font-bold text-white relative z-30 text-base">
                {label}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {children(handleMouseMove)}
      </div>
    </>
  );
};
