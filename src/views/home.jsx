import Title from "../components/Title";
import StudyTimeline from "../components/StudyTimeline";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import SparkAbout from "../components/sparkSection/sparkAbout";
import PartProjects from "../components/partProjects";
import Contact from "../components/partContact";
import "aos/dist/aos.css";


export default function Home() {
  return (
    <div>
      <Title />
      <Hero />
      <TechStack />
      <br /><br /><br /><br /><br />
      <SparkAbout />
      <StudyTimeline />
      <PartProjects />

      <div
        style={{
          width: "400px",
          height: "820px",
          border: "16px solid black",
          borderRadius: "30px",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <iframe
          src="/flutter/high_fit/index.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            transform: "scale(1)",
            transformOrigin: "top left",
          }}
          title="Flutter App"
        />
      </div>

      <Contact />
    </div>
  );
}
