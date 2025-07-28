import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const [enableParallax, setEnableParallax] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!parallaxRef.current) return;
      const elementTop = parallaxRef.current.getBoundingClientRect().top;
      setEnableParallax(elementTop < window.innerHeight);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const paragraphs = [
    "I’m a full-stack developer passionate about building engaging digital experiences that bridge functionality with real-world impact. From sports tech to education platforms, I love designing apps that people actually use.",
    "My work blends clean architecture, modern UI/UX, and scalable backend solutions. I specialize in Flutter, Laravel, and React the technologies that bring interactivity to life, from motion design and real-time updates to responsive layouts.",
    "I thrive in projects where creativity meets practicality, whether I’m building an entire ecosystem for 3x3 basketball tournaments or crafting learning tools that motivate users through gamification and automation.",
    "I’m always exploring better ways to code, design, and ship products that make a difference.",
  ];

  const downloadBtnStyle = {
    color: "rgba(255, 255, 255, 0.692)",
    padding: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textShadow: "0 0 20px rgba(255, 255, 255, 0.397)",
    background: "rgba(255, 255, 255, 0.068)",
    overflow: "hidden",
    fontSize: "0.9rem",
    fontWeight: 600,
    gap: "8px",
    borderRadius: "5px",
    margin: "16px 5px 0 5px",
    transition: "0.2s",
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
  };

  const downloadBtnHoverStyle = {
    borderColor: "rgba(255, 255, 255, 0.623)",
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.144), rgba(255, 255, 255, 0.247), rgba(255, 255, 255, 0.39))",
    boxShadow: "0 6px rgba(255, 255, 255, 0.623)",
    transform: "translateY(-6px)",
  };

  const downloadBtnActiveStyle = {
    transform: "translateY(2px)",
    boxShadow: "none",
  };

  let wordIndex = 0;

  return (
    <div>
      <ParallaxProvider>
        <div style={{ height: "150vh", position: "relative" }}>
          <div
            ref={parallaxRef}
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
            }}
          >
            {enableParallax ? (
              <Parallax speed={-10}>
                <h3
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                    color: "white",
                  }}
                >
                  Mohammad Emad Ziadeh
                </h3>
              </Parallax>
            ) : (
              <h3
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  color: "white",
                }}
              >
                Mohammad Emad Ziadeh
              </h3>
            )}
          </div>

          <div style={{ height: "30vh" }}></div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <section
              style={{
                maxWidth: "1000px",
                width: "100%",
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
                color: "white",
                fontSize: "1.15rem",
                lineHeight: "2",
              }}
            >
              {paragraphs.map((para, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    marginBottom: "20px",
                    wordWrap: "break-word",
                    textAlign: "justify",
                  }}
                >
                  {para.split(" ").map((word, wIndex) => {
                    const delay = (wordIndex + wIndex) * 20;
                    return (
                      <span
                        key={`${pIndex}-${wIndex}`}
                        data-aos="fade-up"
                        data-aos-delay={delay}
                        style={{
                          marginRight: "6px",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                  {(() => {
                    wordIndex += para.split(" ").length;
                    return null;
                  })()}
                </p>
              ))}
            </section>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <section
              data-aos="fade-up"
              style={{
                width: "180px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <a
                href="/CV-Mohammad-ziadeh.pdf"
                download
                style={downloadBtnStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, downloadBtnHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, downloadBtnStyle);
                }}
                onMouseDown={(e) => {
                  Object.assign(e.currentTarget.style, downloadBtnActiveStyle);
                }}
                onMouseUp={(e) => {
                  Object.assign(e.currentTarget.style, downloadBtnHoverStyle);
                }}
              >
                <span>Download CV</span>
                <svg
                  viewBox="0 0 256 256"
                  height="20"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12" />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
