import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";

export default function ProjectLMC() {
  useEffect(() => {
    AOS.init({ duration: 500 });
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

  return (
    <div>
      <ParallaxProvider>
        <div style={{ height: "240vh", position: "relative" }}>
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
                  style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
                >
                  LMC
                </h3>
              </Parallax>
            ) : (
              <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>LMC</h3>
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
              data-aos="fade-up"
              style={{
                textAlign: "center",
                maxWidth: "1200px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "16px",
              }}
            >
              <video
                src="LMCVideo.mp4"
                controls
                autoPlay={false}
                muted={false}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              >
                Your browser does not support the video tag.
              </video>
            </section>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={{ margin: "0 auto", maxWidth: "700px" }}>
            <h2
              data-aos="fade-up"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              Project Overview
            </h2>

            {[
              `<strong><em>LMC (Learning Management Center)</em></strong> is a smart platform built to connect trainers, students, and admins through a streamlined, interactive experience.`,
              `It offers role-based dashboards, built-in tutorials, and a task-driven approach that turns learning into hands-on progress.`,
              `With smart automation and a gamified points system, LMC rewards engagement and accountability while boosting performance.`,
              `Powered by <strong>Laravel Breeze</strong> for secure, scalable backend functionality.`,
            ].map((text, index) => (
              <div
                key={index}
                data-aos="fade-up"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  padding: "20px",
                  marginBottom: "20px",
                  lineHeight: "1.8",
                  fontSize: "1.05rem",
                  textAlign: "left",
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
          <br />
          <br />
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <a
              href="/LMC"
              style={{
                textDecoration: "none",
                width: "150px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                padding: "10px",
                lineHeight: "1.8",
                fontSize: "1.05rem",
                textAlign: "center",
                color: "white",
                cursor: "pointer",
              }}
            >
              Learn more
            </a>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <small>you can see admin panel here for trainer and admin</small>
          </div> */}
        </div>
      </ParallaxProvider>
    </div>
  );
}

// [
//   `<strong><em>LMC (Learning Management Center)</em></strong> is a comprehensive learning management system designed to streamline communication and workflow between trainers, students, and administrators.`,
//   `It integrates all essential tools into a single platform, eliminating the need for third-party applications.`,
//   `LMC features built-in user tutorials, role-based dashboards, and a task-based learning approach that emphasizes practical engagement.`,
//   `Its automation tools enhance efficiency, while a gamified points system motivates students by rewarding punctuality, attendance, and timely submissions, and penalizing lateness or missed tasks to promote consistent performance.`,
//   `The website was built with <strong>Laravel-breeze</strong>.`,
//   `The platform also includes a minimalist mobile app for trainers and admins, ensuring easy access on the go and a seamless user experience across devices.`,
// ];
