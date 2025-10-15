"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "LMC",
    link: "https://github.com/mohammad-ziadeh/masterpiece_backEnd",
    thumbnail:
      "LMCBanner.webp",
  },
  {
    title: "Basketball Events Manger App",
    link: "https://github.com/mohammad-ziadeh/3X3_FIBA",
    thumbnail:
      "basketballBanner.webp",
  },

  {
    title: "Brands Clothes Website",
    link: "",
    thumbnail:
      "shopifyBanner.webp",
  },
  {
    title: "Electronics E-commerce Website",
    link: "",
    thumbnail:
      "megaBanner.webp",
  },
  {
    title: "Architect Portfolio",
    link: "",
    thumbnail:
      "EyadProtBanner.webp",
  },



];
