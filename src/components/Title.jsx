
"use client";
import React from "react";
// import { SparklesCore } from "./ui/sparkles";
import "aos/dist/aos.css";
import { Vortex } from "./ui/vortex";
import TextPressure from './ui/TextPressure';



export default function Title() {
  return (
    <div className="title-container relative flex justify-center items-center h-screen w-full overflow-hidden">
      <div style={{ maxWidth: '600px', width: '100%', padding: '0 20px' }}>
        <TextPressure
          text="MOHAMMAD ZIADEH"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={50}
        />
      </div>

    </div>
  );
}

