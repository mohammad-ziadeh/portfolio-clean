
"use client";
import React from "react";
// import { SparklesCore } from "./ui/sparkles";
import "aos/dist/aos.css";
import { Vortex } from "./ui/vortex";

export default function Title() {
  return (
    <Vortex
      className="flex h-[60rem] items-center flex-col justify-center px-2 md:px-10 py-4 w-full "
    >
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20" data-aos="zoom-in">
        MOHAMMAD ZIADEH
      </h1>
    </Vortex>
  );
}

