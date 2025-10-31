"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "LMC",
    link: "/Projects",
    thumbnail:
      "images/LMCBanner.webp",
  },
  {
    title: "Basketball Events Manger App",
    link: "/Projects",
    thumbnail:
      "images/basketballBanner.webp",
  },

  {
    title: "Brands Clothes Website",
    link: "/Projects",
    thumbnail:
      "images/shopifyBanner.webp",
  },
  {
    title: "Electronics E-commerce Website",
    link: "/Projects",
    thumbnail:
      "images/megaBanner.webp",
  },
  {
    title: "Architect Portfolio",
    link: "/Projects",
    thumbnail:
      "images/EyadProtBanner.webp",
  },



];
