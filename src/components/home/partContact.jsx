import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


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

  const contactItems = [
    {
      title: "Email",
      description: "Get in touch directly through my inbox.",
      link: "mailto:mohammadeziadeh@gmail.com",
      icon: <FaEnvelope style={iconStyle} />,
    },
    {
      title: "Name",
      description: "Mohammad Emad Ziadeh — Full Stack Developer.",
      link: "#",
      icon: <FaUser style={iconStyle} />,
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and explore my network.",
      link: "https://www.linkedin.com/in/mohammad-ziadeh-a8400335b/",
      icon: <FaLinkedin style={iconStyle} />,
    },
    {
      title: "GitHub",
      description: "Explore my open-source projects and contributions.",
      link: "https://github.com/mohammad-ziadeh",
      icon: <FaGithub style={iconStyle} />,
    },
    {
      title: "Phone",
      description: "+962 791318735 \n Reach out for collaborations or project discussions.",
      link: "tel:+962791318735",
      icon: <FaPhoneAlt style={iconStyle} />,
    },

  ];

  return (
    <BackgroundBeamsWithCollision>
      <div className="relative w-full overflow-hidden mt-50">
        <div
          style={{
            padding: "40px 20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
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

          <section data-aos="fade-up" className="w-full max-w-5xl px-8 border-1 border-white rounded-3xl">
            <HoverEffect
              items={contactItems.map((item) => ({
                title: (
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>
                ),
                description: item.description,
                link: item.link,
              }))}
            />
          </section>

        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
