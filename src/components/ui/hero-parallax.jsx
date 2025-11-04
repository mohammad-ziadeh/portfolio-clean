"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  // how many banners
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 80, damping: 30, bounce: 0.1 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden relative flex flex-col antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="[will-change:transform]"
      >
        <motion.div
          className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -300, right: 500 }}
          dragElastic={0.2}
        >
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        <motion.div
          className="flex flex-row mb-20 space-x-20 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -500, right: 300 }}
          dragElastic={0.2}
        >
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
    <h1 className="text-2xl md:text-7xl font-bold text-white">
      COMPLETED <br /> PROJECTS
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
      Here are some of the projects I have successfully built and finished. Each demonstrates my skills and attention to detail—feel free to explore them and get in touch if you'd like to collaborate.
    </p>
  </div>

);

export const ProductCard = ({ product, translate }) => {
  const [width, setWidth] = useState("w-[30rem]");

  useEffect(() => {
    const updateWidth = () => {
      const screen = window.innerWidth;
      if (screen >= 1400) setWidth("w-[50rem]");
      else if (screen > 1024) setWidth("w-[35rem]");
      else setWidth("w-[30rem]");
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className={`group/product h-96 ${width} relative shrink-0 [will-change:transform]`}
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          loading="lazy"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 "
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black  pointer-events-none" />
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
