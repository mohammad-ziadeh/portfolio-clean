import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaUser,
  FaCode,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import { Particles } from "@/components/ui/particles";


export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const iconStyle = {
    marginRight: 10,
    verticalAlign: "middle",
    color: "#f0f0f0",
  };

  const linkStyle = {
    color: "inherit",
    textDecoration: "underline",
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        background: "transparent",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="relative h-[500px] w-full overflow-hidden">
        <Particles />
      </div>
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          marginBottom: "24px",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        Contact Me
      </h2>

      <section
        data-aos="fade-up"
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "32px 40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "32px",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.1rem",
          lineHeight: 1.8,
        }}
      >
        <p style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FaEnvelope style={iconStyle} />
          <a
            href="mailto:mohammadeziadeh@gmail.com"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1DA1F2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            mohammadeziadeh@gmail.com
          </a>
        </p>
        <p style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FaUser style={iconStyle} />
          Mohammad Emad Ziadeh
        </p>
        <p style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FaLinkedin style={iconStyle} />
          <a
            href="https://www.linkedin.com/in/mohammad-ziadeh-a8400335b/"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            linkedin.com/in/mohammad-ziadeh
          </a>
        </p>
        <p style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FaGithub style={iconStyle} />
          <a
            href="https://github.com/mohammad-ziadeh"
            target="_blank"
            rel="noreferrer"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6cc644")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            github.com/mohammad-ziadeh
          </a>
        </p>
        <p style={{ display: "flex", alignItems: "center", margin: "0" }}>
          <FaPhoneAlt style={iconStyle} />
          <a
            href="tel:+962791318735"
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            +962 79 13 18 735
          </a>
        </p>
      </section>

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {[
          {
            icon: (
              <FaCode
                size={40}
                style={{ marginBottom: 12, color: "#ffd54f" }}
              />
            ),
            title: "Development Stack",
            desc: "Flutter, Laravel, React, Vite, REST APIs.",
          },
          {
            icon: (
              <FaTools
                size={40}
                style={{ marginBottom: 12, color: "#4fc3f7" }}
              />
            ),
            title: "Tools & Workflow",
            desc: "Git, GitHub, Postman, Figma, XAMPP.",
          },
          {
            icon: (
              <FaLaptopCode
                size={40}
                style={{ marginBottom: 12, color: "#81c784" }}
              />
            ),
            title: "Frontend",
            desc: "React, JavaScript (ES6+), Bootstrap, HTML & CSS.",
          },
        ].map(({ icon, title, desc }, idx) => (
          <section
            key={idx}
            data-aos="fade-up"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "32px 24px",
              textAlign: "center",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.3)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {icon}
            <h3 style={{ marginBottom: "12px", fontWeight: "600" }}>{title}</h3>
            <p style={{ margin: 0 }}>{desc}</p>
          </section>
        ))}
      </div>

      <div style={{ height: "20vh" }}></div>
    </div>
  );
}
