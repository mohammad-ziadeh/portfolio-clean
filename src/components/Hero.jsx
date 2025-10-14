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
      "LMCBanner.png",
  },
  {
    title: "Basketball Events Manger App",
    link: "https://github.com/mohammad-ziadeh/3X3_FIBA",
    thumbnail:
      "basketballBanner.png",
  },

  {
    title: "Brands Clothes Website",
    link: "",
    thumbnail:
      "shopifyBanner.png",
  },
  {
    title: "Electronics E-commerce Website",
    link: "",
    thumbnail:
      "megaBanner.png",
  },
  {
    title: "Architect Portfolio",
    link: "",
    thumbnail:
      "EyadProtBanner.png",
  },



];
