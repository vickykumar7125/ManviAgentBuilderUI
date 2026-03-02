"use client";

import Link from "next/link";
import { Bot } from "lucide-react";

const APP_NAME = "AI Bot App";

export function AppLogo({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 sm:gap-2 font-medium text-foreground text-sm sm:text-base whitespace-nowrap ${className ?? ""}`}
    >
      <span className="bg-primary text-primary-foreground flex size-5 sm:size-6 shrink-0 items-center justify-center rounded-md">
        <Bot className="size-3.5 sm:size-4" />
      </span>
      {APP_NAME}
    </Link>
  );
}
