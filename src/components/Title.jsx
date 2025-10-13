"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export default function Title() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mt-50 mb-40">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        MOHAMMAD ZIADEH
      </h1>
      <div className="w-[80rem] h-80 relative">
        {/* Gradients */}
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-3/4" />
        <div className="absolute inset-x-120 top-0 bg-gradient-to-r from-transparent via-neutral-200 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-120 top-0 bg-gradient-to-r from-transparent via-neutral-200 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
