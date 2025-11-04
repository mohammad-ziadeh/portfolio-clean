"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPhoneAlt,
    FaUser,
    FaMailBulk
} from "react-icons/fa";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ContactForm from "@/components/home/partContact";

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    const iconStyle = { marginRight: 10, verticalAlign: "middle", color: "#f0f0f0" };

    const contactItems = [
        { title: "Email", description: "Get in touch directly through my inbox.", link: "mailto:mohammadeziadeh@gmail.com", icon: <FaEnvelope style={iconStyle} /> },
        { title: "Name", description: "Mohammad Emad Ziadeh — Full Stack Developer.", link: "#", icon: <FaUser style={iconStyle} /> },
        { title: "Phone", description: "+962 791318735 \n Reach out for collaborations or project discussions.", link: "tel:+962791318735", icon: <FaPhoneAlt style={iconStyle} /> },
        { title: "GitHub", description: "Explore my open-source projects and contributions.", link: "https://github.com/mohammad-ziadeh", icon: <FaGithub style={iconStyle} /> },
        { title: "Contact Form", description: "Contact me via the email form", link: "#contactForm", icon: <FaMailBulk style={iconStyle} /> },
        { title: "LinkedIn", description: "Connect with me professionally and explore my network.", link: "https://www.linkedin.com/in/mohammad-ziadeh-a8400335b/", icon: <FaLinkedin style={iconStyle} /> },
    ];

    return (
            <BackgroundBeamsWithCollision>
                <div className="relative w-full overflow-hidden mt-30">
                    <div
                        className="flex flex-col items-center gap-16 "
                        style={{ color: "white", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
                    >
                        <h2
                            className="text-center font-bold"
                            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "24px" }}
                        >
                            Contact Me
                        </h2>
                        <section
                            data-aos="fade-up"
                            className="w-full max-w-5xl rounded-3xl"
                        >
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

                        <section data-aos="fade-up" className="w-full max-w-3xl">
                            <ContactForm />
                        </section>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
    );
}
