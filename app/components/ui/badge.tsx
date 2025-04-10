"use client";
import React from "react";
import { cn } from "../../../lib/utils";

export const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={cn(
        "rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ",
        className,
      )}
    >
      {children}
    </span>
  );
};
