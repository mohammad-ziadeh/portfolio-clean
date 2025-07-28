import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";

export default function ProjectFiba() {
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
        <div style={{ height: "280vh", position: "relative" }}>
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
                  Basketball App
                </h3>
              </Parallax>
            ) : (
              <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>
                Basketball App
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
              data-aos="fade-up"
              style={{
                textAlign: "center",
                width: "350px",
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
                src="fiba.mp4"
                controls
                autoPlay={false}
                muted={false}
                style={{
                  width: "100%",
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
              `<strong><em>3x3 Basketball App</em></strong> is a <strong>fully cross-platform experience</strong> designed to revolutionize how 3x3 basketball tournaments are run in <strong>Aqaba</strong> — and soon, across all of <strong>Jordan</strong>. Players can register, build teams, join live events, and follow matches in real time — all from their phones.`,
              `Crafted using <strong>Flutter</strong> for a smooth mobile experience and powered by <strong>Laravel Breeze + Sanctum</strong> for secure, API-first backend control — the app is built for both scalability and performance.`,
              `Currently in its <strong>final development phase</strong>, the app is preparing for launch <strong>very soon</strong>. It's not just another sports app — it's the digital future of 3x3 basketball. Get ready to explore real-time stats, team dynamics, and game-day energy like never before.`,
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
              href="/Fiba"
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
          </div> */}
        </div>
      </ParallaxProvider>
    </div>
  );
}

// [
//   `<strong><em>3x3 Basketball App</em></strong> is a <strong>cross-platform solution</strong> built for organizing and managing 3x3 basketball tournaments in <strong>Aqaba</strong>, with seamless scalability across <strong>Jordan</strong>. Players can register, form teams, join events, and track scores live, all from their phones.`,
//   `The <strong>admin dashboard</strong>, built with <strong>Laravel</strong>, enables event creation, team approvals, category management, and referee control with real-time match handling and scoreboard projection.`,
//   `Highlights include <strong>live leaderboards</strong>, <strong>player achievements</strong>, <strong>dark/light mode</strong>, <strong>bilingual support</strong>, and full <strong>profile stats</strong> for players and teams.`,
//   `This app replaces outdated manual processes and aims to <strong>digitally transform basketball registration</strong> in Aqaba and beyond, combining modern UX with automation.`,
//   `<em>Available on Android, iOS, and Web built as a complete 3x3 basketball ecosystem.</em>`,
// ];

// [
//   `<strong><em>3x3 Basketball App</em></strong> is a <strong>cross-platform solution</strong> built for organizing and managing 3x3 basketball tournaments in <strong>Aqaba</strong>, with seamless scalability across <strong>Jordan</strong>. Players can register, form teams, join events, and track scores live — all from their phones.`,
//   `Now in its <strong>final development stages</strong>, the app is set to launch <strong>very soon</strong>, aiming to bring a new digital standard to basketball events in the region.`,
//   `The <strong>admin dashboard</strong>, built with <em>Laravel</em>, enables event creation, team approvals, category management, and referee tools including real-time match control and scoreboard display.`,
//   `Key features include <strong>live leaderboards</strong>, <strong>player achievements</strong>, <strong>bilingual support</strong>, <strong>light/dark mode</strong>, and detailed <strong>player and team profiles</strong>.`,
//   `The app was built with <strong>Flutter</strong>, <strong>Laravel-breeze/sanctum</strong>.`,
//   `<em>Launching soon on Android, iOS, and Web. A complete ecosystem for modern 3x3 basketball.</em>`,
// ];
