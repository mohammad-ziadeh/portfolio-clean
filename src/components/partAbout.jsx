import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AOS from "aos";
import { motion } from "framer-motion";
import { FaReact, FaBootstrap, FaPhp, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiPostman,
  SiXampp,
} from "react-icons/si";

export default function PartAbout() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const iconSize = 32;
  const iconStyle = {
    marginRight: 8,
    verticalAlign: "middle",
  };

  const SectionWrapper = ({
    align = "left",
    children,
    lineLength = "60px",
  }) => (
    <div
      style={{
        display: "flex",
        justifyContent: align === "left" ? "flex-start" : "flex-end",
        padding: "20px",
        position: "relative",
        marginTop: "40px",
        maxWidth: "500px",
        marginLeft: align === "left" ? "20px" : "auto",
        marginRight: align === "right" ? "20px" : "auto",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: `calc(-1 * ${lineLength})`,
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          height: "0px",
          borderRadius: "2px",
          background: "white",
          zIndex: 10,
          display: "block",
        }}
        className="vertical-line"
        initial={{ height: 0 }}
        whileInView={{ height: lineLength }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2 }}
      />
      <section
        style={{
          textAlign: "center",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {children}
      </section>
    </div>
  );

  return (
    <>
      <style>
        {`
        @media (max-width: 840px) {
          .vertical-line {
            display: none !important;
          }
        }
      `}

        {`
    @media (max-width: 840px) {
      .vertical-line {
        display: none !important;
      }
        .start{
        height: 20vh !important;}
      .name-banner {
        display: none !important;
      }
    }
  `}
      </style>
      <div>
        <div className="start" style={{ height: "50vh" }}>
          <h2 style={{ textAlign: "center" }}>Keep Scrolling</h2>
          <h5 style={{ textAlign: "center" }}>
            use big screen for better experience
          </h5>
        </div>

        <ParallaxProvider>
          <div style={{ height: "300vh", position: "relative" }}>
            <Parallax speed={-37}>
              <div
                className="name-banner"
                style={{
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "-20vh",
                }}
              >
                <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", zIndex: 0 }}>
                  Mohammad Emad Ziadeh
                </h3>
              </div>
            </Parallax>

            <div style={{ height: "60vh" }}></div>

            <SectionWrapper align="left" lineLength="120px">
              <>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  Frontend
                </h1>
                <h2 data-aos="fade-right">
                  <FaReact size={iconSize} style={iconStyle} /> React,{" "}
                  <SiVite size={iconSize} style={iconStyle} /> Vite
                </h2>
                <h2 data-aos="fade-right">
                  <SiJavascript
                    size={iconSize}
                    style={{ ...iconStyle, marginLeft: 4 }}
                  />{" "}
                  JavaScript (ES6+)
                </h2>
                <h2 data-aos="fade-right">
                  <FaBootstrap size={iconSize} style={iconStyle} /> Bootstrap
                </h2>
                <h2 data-aos="fade-right">
                  <SiHtml5
                    size={iconSize}
                    style={{ ...iconStyle, marginRight: 4 }}
                  />
                  HTML,
                  <SiCss3
                    size={iconSize}
                    style={{ margin: "0 4px", verticalAlign: "middle" }}
                  />
                  CSS
                </h2>
              </>
            </SectionWrapper>

            <SectionWrapper align="right" lineLength="120px">
              <>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  Backend
                </h1>
                <h2 data-aos="fade-left">
                  <FaPhp size={iconSize} style={iconStyle} /> PHP,{" "}
                  <SiMysql style={iconStyle} /> MySQL
                </h2>
                <h2 data-aos="fade-left">
                  <SiLaravel size={iconSize} style={iconStyle} /> Laravel with
                  Breeze & Sanctum
                </h2>
                <h2 data-aos="fade-left">RESTful API</h2>
                <h2 data-aos="fade-left">
                  <SiXampp size={iconSize} style={iconStyle} /> XAMPP for local
                  development
                </h2>
              </>
            </SectionWrapper>

            <SectionWrapper align="left" lineLength="480px">
              <>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>Mobile</h1>
                <h2 data-aos="fade-right">
                  <SiFlutter size={iconSize} style={iconStyle} /> Flutter
                  (cross-platform)
                </h2>
                <h2 data-aos="fade-right">
                  <SiDart size={iconSize} style={iconStyle} /> Dart programming
                  language
                </h2>
              </>
            </SectionWrapper>

            <SectionWrapper align="right" lineLength="380px">
              <>
                <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  Tools & Workflow
                </h1>
                <h2 data-aos="fade-left">
                  <SiPostman size={iconSize} style={iconStyle} /> Postman for
                  API testing
                </h2>
                <h2 data-aos="fade-left">
                  <FaGithub size={iconSize} style={iconStyle} /> Git & GitHub
                </h2>
                <h2 data-aos="fade-left">
                  <FaFigma size={iconSize} style={iconStyle} /> Figma for UI/UX
                  design
                </h2>
              </>
            </SectionWrapper>
          </div>
        </ParallaxProvider>
      </div>
    </>
  );
}
