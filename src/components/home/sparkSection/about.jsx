"use client";
import "aos/dist/aos.css";
import { TextGenerateEffect } from "../../ui/text-generate-effect";


export default function About() {


  const words = `A full-stack developer passionate about turning ideas into real, interactive experiences. 
Specializing in Laravel for backend development, React (Vite) and Flutter for building frontend.
Deeply interested in backend architecture and data handling with Laravel, while currently learning Node.js.
I Enjoys crafting smooth web animations, with the goal of creating an award-winning website.`;



  const downloadBtnStyle = {
    color: "rgba(255, 255, 255, 0.692)",
    padding: "2px 3px",
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
    margin: "2px 2px 0 5px",
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


  return (
    <div style={{ maxWidth: '1500px' }}>
      <div style={{ height: "100vh", position: "relative", textAlign: 'center' }}>

        <TextGenerateEffect words={words} />
        <br /><br /><br /><br /><br /><br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <section
            data-aos="fade-up"
            style={{
              width: "180px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "10px",
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
    </div>
  );
}







