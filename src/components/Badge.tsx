"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Badge = ({
  text,
  href,
  ...props
}: {
  text: string;
  href: string;
  props?: React.ComponentProps<typeof Link>;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{ display: "inline-block" }}
    >
      <Link
        href={href}
        className="group relative flex items-center justify-center space-x-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md"
        {...props}
      >
        <span>{text}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-neutral-300 transition-colors duration-200 group-hover:text-white"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </svg>
      </Link>
    </motion.div>
  );
};