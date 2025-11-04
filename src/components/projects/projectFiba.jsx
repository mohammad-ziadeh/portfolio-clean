import { Safari } from "@/components/ui/safari";
import { FlipWords } from "@/components/ui/flip-words";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatedTooltip } from "@/components/ui/color-circles";
import { Android } from "@/components/ui/android"
import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconBrandFlutter,
  IconTableColumn,
  IconBrandLaravel,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandMysql,
} from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectLMC() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const words = ["Basketball 3X3"];
  const colors = [

    {
      id: 1,
      name: "#040404",
      color: "#040404",
    },
    {
      id: 2,
      name: "#2B2C34",
      color: "#2B2C34",
    },
    {
      id: 3,
      name: "#eeeeee",
      color: "#eeeeee",
    },

  ];

  return (
    <div className="relative min-h-screen mt-170 ">
      <h4 className="font-bold text-4xl text-neutral-100 text-center mb-10">Project  <FlipWords words={words} /> </h4>

      <DotLottieReact
        src="/lottie/Scroll_Down_Arrows.json"
        loop
        autoplay
        style={{
          width: '210px',
          height: '120px',
          margin: '0 auto',
        }}
      />
      <div className="max-w-[1250px] m-auto lg:ml-[70px] lg:mr-[70px] 2xl:m-auto mt-50 relative flex justify-center">
        <Safari
          url="basketball3x3.com"
          videoSrc="https://player.vimeo.com/video/1132515061?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1"
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -20,
            height: "500px",
            width: "150%",
            backdropFilter: "blur(0.5px)",
            WebkitBackdropFilter: "blur(0.5px)",
            background: "linear-gradient(to top, rgba(0,0,0,6), transparent)",
            zIndex: 15,
          }}
        ></div>
        <div className="absolute  lg:bottom-0 z-11 lg:-right-70 mt-150 lg:m-auto items-center ">
          <Android
            className="lg:size-[45%] xl:size-[65%]  md:size-full "
            videoSrc="https://player.vimeo.com/video/1133485359?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1"
          />
        </div>
      </div>

      <h1
        data-aos="fade-up"
        className="lg:text-7xl text-3xl md:text-6xl font-bold text-center text-white relative z-20 mt-300 lg:mt-130 mb-50"
      >
        About the Project
      </h1>

      <div data-aos="fade-up">
        <BentoGrid className="max-w-[1300px] mx-auto">
          <BentoGridItem
            title="Project Color Palette"
            description="A clean, modern blend of deep neutral shades forming the visual identity of the 3x3 Basketball App."
            header={
              <div className="flex justify-center items-center h-full">
                <AnimatedTooltip circleColors={colors} />
              </div>
            }
            icon={<IconTableColumn className="h-4 w-4 text-neutral-500" />}
          />

          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "lg:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>

      <div style={{ height: "50vh", background: "black" }}></div>
    </div>
  );
}






const items = [
  {
    title: "Welcome to 3X3",
    description:
      "A fully cross-platform 3x3 basketball app for managing tournaments, teams, and live events in Aqaba, soon across Jordan.",
    header: (
      <div
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
        style={{
          background:
            "linear-gradient(-45deg, #040404, #eeeeee)",
        }}
      ></div>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technology Stack",
    description:
      "Built with Flutter for cross-platform performance and Laravel Breeze + Sanctum for secure backend, using MySQL for data storage.",
    header: (
      <div className="flex justify-center items-center gap-6 h-full">
        <IconBrandFlutter size={45} className="text-cyan-400" />
        <IconBrandLaravel size={45} className="text-red-400" />
        <IconBrandMysql size={45} className="text-blue-800" />
        <IconBrandAndroid size={45} className="text-green-400" />
        <IconBrandApple size={45} className="text-white" />

      </div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project Vision",
    description:
      "Digitally transform basketball event management in Aqaba and beyond. Real-time stats, team dynamics, and game-day energy — all in one app.",
    header: (
      <div className="flex flex-col justify-center items-center text-center mt-15 p-6">
        <p className="text-neutral-300 text-[17px] max-w-[85%] leading-relaxed">
          The 3x3 Basketball App aims to streamline tournaments, track player achievements, provide bilingual support, light/dark mode, and full player & team profiles — creating a modern, gamified sports experience.
        </p>
      </div>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "",
    description:
      "",
    header: (
      <img
        src="/images/fiba/FIBA1.webp"
        alt="FIBA Features Preview"
        className="flex flex-1 w-full h-full object-cover rounded-xl"
      />
    ),
    icon: "",
  },
];



