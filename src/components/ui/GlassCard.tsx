import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  id,
}: GlassCardProps) {
  return (
    <div
      id={id}
      className={`glass-card p-6 sm:p-8 ${hover ? "glass-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
