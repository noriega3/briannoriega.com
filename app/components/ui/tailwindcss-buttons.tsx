"use client";
import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { cn } from "../../../lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-60 w-full rounded-xl border bg-black border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center",
        className,
      )}
    >
      <div className="absolute inset-0 bg-dot-white/[0.1]" />
      <FaClipboardList className="absolute top-2 right-2 text-neutral-300 group-hover/btn:block hidden h-4 w-4 transition duration-200" />
      <div className="relative z-40">{children}</div>
    </div>
  );
};
