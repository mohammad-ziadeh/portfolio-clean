"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  value,
  onChange,
  name = "email"
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [placeholders]);

  return (
    <input
      name={name}
      type="email"
      required
      placeholder={placeholders[currentPlaceholder]}
      value={value}
      onChange={onChange}
      className="bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none placeholder-gray-500 focus:border-gray-400 transition-all w-full"
    />
  );
}
