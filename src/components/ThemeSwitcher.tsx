"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`justify-self-end rounded-md `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        // <MoonIcon className="h-6 w-6  text-rose-600" />
        <p className="font-sm">LIGHT</p>
      ) : (
        // <SunIcon className="h-6 w-6 text-rose-400" />
        <p className="font-sm">DARK</p>
      )}
    </button>
  );
};
