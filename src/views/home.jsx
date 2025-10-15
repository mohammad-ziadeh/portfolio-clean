import React, { useEffect, useState, useRef } from "react";
import Title from "../components/Title";
import StudyTimeline from "../components/StudyTimeline";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import SparkAbout from "../components/sparkSection/sparkAbout";
// import PartProjects from "../components/partProjects";
import Contact from "../components/partContact";
import "aos/dist/aos.css";
import gsap from "gsap";
import SplitType from "split-type";
import "./Preloader.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentageRef = useRef(null);
  const loadingInitialRef = useRef(null);
  const loadingCompleteRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const loadingText = new SplitType(loadingInitialRef.current, { types: "chars" });
    const completeText = new SplitType(loadingCompleteRef.current, { types: "chars" });

    gsap.set(loadingCompleteRef.current, { y: "100%" });
    gsap.set(loadingText.chars, { opacity: 0, y: 100 });
    gsap.set(completeText.chars, { opacity: 0, y: 100 });

    const colorStages = [
      { bg: "#222222", text: "#ffffff" },
      { bg: "#111111", text: "#ffffff" },
      { bg: "#000000", text: "#ffffff" },
      { bg: "#000000", text: "#ffffff" }
    ];

    const updateColors = (progress) => {
      const stage = Math.floor(progress / 25);
      if (stage < colorStages.length) {
        preloaderRef.current.style.backgroundColor = colorStages[stage].bg;
        progressBarRef.current.style.backgroundColor = colorStages[stage].text;
        [...loadingText.chars, ...completeText.chars, percentageRef.current].forEach(
          (el) => (el.style.color = colorStages[stage].text)
        );
      }
    };

    const tl = gsap.timeline({

      onComplete: () => {
        setIsLoading(false)
        document.body.style.overflow = 'auto';
      }
    });

    tl.to(loadingText.chars, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" })
      .to(progressBarRef.current, {
        width: "100%",
        duration: 5,
        ease: "power1.inOut",
        onUpdate: function () {
          const progress = Math.round(this.progress() * 100);
          percentageRef.current.textContent = 100 - progress;
          updateColors(progress);
        }
      })
      .to(loadingInitialRef.current, { y: "-100%", duration: 0.5, ease: "power2.inOut" })
      .to(loadingCompleteRef.current, { y: "0%", duration: 0.5, ease: "power2.inOut" }, "<")
      .to(completeText.chars, { opacity: 1, y: 0, duration: 0.3, stagger: 0.03, ease: "power2.out" }, "<0.2")
      .to(preloaderRef.current, { y: "-100vh", duration: 1, ease: "power2.inOut", delay: 0.8 })
      .set(preloaderRef.current, { display: "none" });
  }, []);

  return <div>
    <div className="content" ref={contentRef} style={{ visibility: "visible" }}>
      <Title />
      <Hero />
      <h1
        data-aos="fade-up"
        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
        style={{ marginTop: "-200px" }}
      >
        Skills & Tech
      </h1>
      <br /><br /><br />
      <TechStack />
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br />
      <SparkAbout />
      <StudyTimeline />
      {/* <PartProjects /> */}
      <br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br />
      <Contact />
    </div>

    <div className="preloader" ref={preloaderRef}>
      <div className="progress-container">
        <div className="progress-bar" ref={progressBarRef}></div>
      </div>
      <div className="text-container">
        <div className="loading-text initial" ref={loadingInitialRef}>
          Loading
        </div>
        <div className="loading-text complete" ref={loadingCompleteRef}>
          WELCOME
        </div>
      </div>
      <div className="percentage" ref={percentageRef}>100</div>
    </div>
  </div>
};

export default Home;
