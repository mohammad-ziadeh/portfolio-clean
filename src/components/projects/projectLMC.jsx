import { Safari } from "@/components/ui/safari";
import { FlipWords } from "@/components/ui/flip-words";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimatedTooltip } from "@/components/ui/color-circles";
import React, { useEffect } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconTableColumn,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandTailwind,
  IconBrandVite,
  IconBrandMysql,
} from "@tabler/icons-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectLMC() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  const words = ["LMC"];

  const colors = [
    {
      id: 1, name: "#3b1e54", color: "#3b1e54", via: "via-[#3b1e54]"
    },
    {
      id: 2, name: "#9b7ebd", color: "#9b7ebd", via: "via-[#9b7ebd]"
    },
    {
      id: 3, name: "#d4bee4", color: "#d4bee4", via: "via-[#d4bee4]"
    },
    {
      id: 4, name: "#eeeeee", color: "#eeeeee", via: "via-[#eeeeee]"
    },
  ];

  return (
    <div className="relative min-h-screen mt-170">
      <h4 className="font-bold text-4xl text-white text-center mb-10">
        Project <FlipWords words={words} />
      </h4>

      <DotLottieReact
        src="/lottie/Scroll_Down_Arrows.json"
        loop
        autoplay
        style={{
          width: "210px",
          height: "120px",
          margin: "0 auto",
        }}
      />

      <div className="max-w-[1203px] m-auto mt-50 relative">
        <Safari
          url="basketball3x3.com"
          videoSrc="https://player.vimeo.com/video/1132515322?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1"
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -20,
            height: "500px",
            width: "100%",
            backdropFilter: "blur(0.5px)",
            WebkitBackdropFilter: "blur(0.5px)",
            background: "linear-gradient(to top, rgba(0,0,0,6), transparent)",
            zIndex: 9,
          }}
        ></div>
      </div>

      <h1
        data-aos="fade-up"
        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mt-130 mb-50"
      >
        About the Project

      </h1>

      <div data-aos="fade-up">
        <BentoGrid className="max-w-[1300px] mx-auto" >
          <BentoGridItem
            title="Project Color Palette"
            description="A clean, modern blend of deep purples and soft neutrals forming the base identity of the LMC design system."
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
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>


      <div style={{ height: "50vh", background: "black" }}>

      </div>
    </div>
  );
}

const items = [
  {
    title: "Welcome to LMC",
    description:
      "LMC is a modern Learning management system for trainers and coding students",
    header: (
      <img
        src="/images/lmc/LMC1.webp"
        alt="LMC Dashboard Preview"
        className="flex flex-1 w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technology Stack",
    description:
      " Built with Laravel 10 (Sanctum),React, TailwindCSS,  and MySQL — optimized via Vite for speed and scalability.",
    header: (
      <div className="flex justify-center items-center gap-6 h-full">
        <IconBrandJavascript className="text-yellow-400" size={45} />
        <IconBrandLaravel className="text-red-400" size={45} />
        <IconBrandTailwind className="text-cyan-400" size={45} />
        <IconBrandMysql className="text-blue-800" size={45} />
        <IconBrandVite className="text-purple-400" size={45} />
      </div>
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tutorials for Trainers and Admins",
    description:
      "The admin dashboard includes built-in tutorials that guide trainers through the platform step by step, ensuring they fully understand how to use all features effectively from the start (it does change from Admin to Trainer to Student)",
    header: (
      <img
        src="/images/lmc/LMC2.webp"
        alt="LMC Performance Preview"
        className="flex flex-1 w-full h-full object-cover rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "About the Project",
    description: "Empowering teams, coaches, and players through innovation.",
    header: (
      <div className="flex flex-col justify-center items-center text-center mt-15 p-6">
        <h3 className="text-2xl font-bold text-white mb-3">
          LMC (Learning Management Center)
        </h3>
        <p className="text-neutral-300 text-[17px] max-w-[85%] leading-relaxed ">
          is a smart platform built to connect trainers, students, and admins through a streamlined, interactive experience.,
          It offers role-based dashboards, built-in tutorials, and a task-driven approach that turns learning into hands-on progress.,
          With smart automation and a gamified points system, LMC rewards engagement and accountability while boosting performance.,
          Powered by <strong>Laravel Breeze</strong> for secure, scalable backend functionality.,
        </p>
      </div>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
];
