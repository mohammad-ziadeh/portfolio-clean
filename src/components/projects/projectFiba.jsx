import { Safari } from "@/components/ui/safari"
import { FlipWords } from "@/components/ui/flip-words";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function ProjectFiba() {
  const words = ["Basketball 3X3"];

  return (
    <div className="relative min-h-screen mt-170">
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
      <div className="max-w-[1203px] m-auto mt-50 relative">
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
            width: "100%",
            backdropFilter: "blur(0.5px)",
            WebkitBackdropFilter: "blur(0.5px)",
            background: "linear-gradient(to top, rgba(0,0,0,6), transparent)",
            zIndex: 9,
          }}
        />
      </div>

    </div>

  )
}





