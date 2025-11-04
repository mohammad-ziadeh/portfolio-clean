"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdkpryje");
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <BackgroundBeamsWithCollision>
      <div
        className="min-h-screen min-w-4xl flex flex-col items-center justify-center px-6"
        id="contactForm"
        style={{
          color: "white",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          Let’s Connect
        </h2>

        {state.succeeded && (
          <p className="text-green-400 mb-4 font-medium">
            Thanks for reaching out!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="w-full max-w-2xl flex flex-col items-center space-y-6 bg-zinc-400/5 border border-zinc-800 rounded-3xl p-10 shadow-lg backdrop-blur-md"
        >
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-black border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-gray-400 transition-all placeholder-gray-500"
          />

          <div className="w-full">
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full mt-4 bg-black border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-gray-400 transition-all resize-none placeholder-gray-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="border border-gray-600 text-gray-200 hover:text-white hover:border-gray-400 rounded-full px-10 py-2 transition-all mt-4"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
