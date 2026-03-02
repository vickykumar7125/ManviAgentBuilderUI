"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Use fixed value until mounted to avoid server/client hydration mismatch
  const current = !mounted ? "light" : (resolvedTheme ?? theme ?? "light");

  return (
    <ToggleGroup
      type="single"
      value={current === "dark" ? "dark" : "light"}
      onValueChange={(v) => v && setTheme(v)}
      variant="outline"
      size="sm"
      className={cn("rounded-lg border bg-background/80 shadow-xs", className)}
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light mode"
        className="gap-1.5 px-2.5 sm:px-3 data-[state=on]:bg-accent"
      >
        <Sun className="size-3.5 sm:size-4" />
        <span className="text-xs sm:text-sm font-medium">Light</span>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark mode"
        className="gap-1.5 px-2.5 sm:px-3 data-[state=on]:bg-accent"
      >
        <Moon className="size-3.5 sm:size-4" />
        <span className="text-xs sm:text-sm font-medium">Dark</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
