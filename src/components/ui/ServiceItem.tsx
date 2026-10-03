import React from "react";
import type { LucideIcon } from "lucide-react";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function ServiceItemCard({
  number,
  title,
  description,
  icon: Icon,
}: ServiceItemProps) {
  return (
    <div className="glass-card glass-card-hover p-6 sm:p-8 flex gap-5">
      <div className="flex-shrink-0">
        <span className="text-velto-mint font-heading text-lg font-semibold opacity-60">
          {number}
        </span>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          {Icon && (
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-velto-sage flex-shrink-0"
            />
          )}
          <h3 className="text-lg font-heading font-semibold text-velto-text">
            {title}
          </h3>
        </div>
        <p className="text-velto-text-secondary text-sm leading-relaxed font-body">
          {description}
        </p>
      </div>
    </div>
  );
}
