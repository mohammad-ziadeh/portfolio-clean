"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm, ValidationError } from "@formspree/react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Contact() {
  const [state, handleSubmitFormspree] = useForm("xdkpryje");
  const [email, setEmail] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  // Load reCAPTCHA script
  useEffect(() => {
    AOS.init({ duration: 600 });

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=6LeM8gEsAAAAAPdLWqlNNmtWvi43z2I7YFayx-9C`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const placeholders = ["Enter your email"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate reCAPTCHA token
    if (window.grecaptcha) {
      const token = await window.grecaptcha.execute("6LeM8gEsAAAAAPdLWqlNNmtWvi43z2I7YFayx-9C", { action: "submit" });
      setRecaptchaToken(token);

      // Add token to hidden input and submit Formspree
      handleSubmitFormspree(e);
    } else {
      console.error("reCAPTCHA not loaded");
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white text-lg font-medium tracking-wide">
          Thanks for reaching out!
        </p>
      </div>
    );
  }

  return (
    <BackgroundBeamsWithCollision>
      <div
        className="min-h-screen min-w-4xl flex flex-col items-center justify-center px-6"
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

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="w-full max-w-2xl flex flex-col items-center space-y-6 bg-zinc-900/30 border border-zinc-800 rounded-3xl p-10 shadow-lg backdrop-blur-md"
        >
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="g-recaptcha-response" value={recaptchaToken} />
        </form>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
