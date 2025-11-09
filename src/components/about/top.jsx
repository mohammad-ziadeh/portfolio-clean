import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";
import FallingText from '@/components/ui/FallingText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from "aos";
import "aos/dist/aos.css";


gsap.registerPlugin(ScrollTrigger);

export default function Top() {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);



    const controls = useAnimation();

    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: container1,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: container2,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: container3,
        offset: ["start start", "end end"],
    });

    const baseX1 = useTransform(scrollYProgress1, [0, 1], [0, 200]);
    const baseX2 = useTransform(scrollYProgress2, [0, 1], [0, 200]);
    const baseX3 = useTransform(scrollYProgress3, [0, 1], [0, 200]);

    const FrontendStack = ["React", "Flutter", "Dart", "Webflow", "Shopify", "GSAP", "Motion"];
    const BackendStack = ["Laravel", "PHP", "SQL", "SQLite", "Strapi"];
    const ToolsStack = ["XAMPP", "Postman", "GitHub", "Figma", "Tailwind", "Bootstrap", "Netlify"];


    const [triggered, setTriggered] = useState(false)



    const pinnedElementRef = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: pinnedElementRef.current,
                pin: true,
                start: "top 200px",
                end: "+=700",
                markers: false,
                onLeave: () => {
                    setTriggered(true)
                },

            });
        }, pinnedElementRef);

        return () => ctx.revert()
    }, [controls]);



    return (


        <div className="relative min-h-screen mt-100">


            <div className='text-[#A9A9A9] h-[150vh] text-3xl xl:text-[2.8rem] mb-[50px] bg-black border-b-[0.1px] relative' ref={pinnedElementRef}>

                <FallingText

                    text={`Full-stack developer that love turning ideas into engaging experiences. Skilled in Laravel, React (Vite), and Flutter. Passionate about backend architecture, data handling, and creating smooth, complex web animations that combine interaction and storytelling. Aiming for an awwwards-worthy website.`}
                    highlightWords={["React", "Laravel", "Full-stack", "Flutter", "architecture", "animations", "awwwards-worthy"]}
                    highlightClass="highlighted"
                    trigger={triggered ? "scroll" : "none"}
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.26}
                    mouseConstraintStiffness={0}
                />
            </div>

            <h2 className="text-5xl mt-[60vh] -mb-[20rem] text-center text-white" data-aos="fade-up">Technologies</h2>


            {/* front-end stack */}
            <section className='flex md:flex-row flex-col-reverse md:mt-0 mt-180 justify-around items-center'>
                <div
                    ref={container1}
                    className="flex flex-col gap-6 items-center  h-[250vh] justify-center"
                >
                    {FrontendStack.map((word, i) => {
                        const offsetX = useTransform(baseX1, (v) => Math.sin(v / 50 + i) * 100);

                        return (
                            <motion.h2
                                key={i}
                                style={{ x: offsetX }}
                                whileInView={{ color: "#ffffff" }}
                                initial={{ color: "#414141", }}
                                viewport={{ margin: "-50% 0px -30% 0px" }}
                                className="text-6xl font-bold tracking-wide text-[#414141]"
                            >
                                {word}
                            </motion.h2>
                        );
                    })}
                </div>
                <motion.h2
                    whileInView={{ color: "#ffffff" }}
                    initial={{ color: "#414141", }}
                    viewport={{ margin: "-20% 0px 20% 0px" }}
                    className="text-6xl font-bold tracking-wide text-[#414141]"
                >
                    Frontend
                </motion.h2>
            </section>


            {/* Back-end stack */}
            <section className='flex md:flex-row flex-col justify-around items-center md:-mt-[130vh]' >
                <motion.h2
                    whileInView={{ color: "#ffffff" }}
                    initial={{ color: "#414141", }}
                    viewport={{ margin: "-20% 0px 20% 0px" }}
                    className="text-6xl font-bold tracking-wide text-[#414141]"
                >
                    Backend
                </motion.h2>
                <div
                    ref={container2}
                    className="flex flex-col gap-6 items-center  h-[250vh] justify-center"
                >
                    {BackendStack.map((word, i) => {
                        const offsetX = useTransform(baseX2, (v) => Math.sin(v / 50 + i) * 100);

                        return (
                            <motion.h2
                                key={i}
                                style={{ x: offsetX }}
                                whileInView={{ color: "#ffffff" }}
                                initial={{ color: "#414141", }}
                                viewport={{ margin: "-50% 0px -30% 0px" }}
                                className="text-6xl font-bold tracking-wide text-[#414141]"
                            >
                                {word}
                            </motion.h2>
                        );
                    })}
                </div>
            </section>


            {/* others stack */}
            <section className='flex md:flex-row flex-col-reverse justify-around items-center md:-mt-[130vh]'>
                <div
                    ref={container3}
                    className="flex flex-col gap-6 items-center  h-[250vh] justify-center"
                >
                    {ToolsStack.map((word, i) => {
                        const offsetX = useTransform(baseX3, (v) => Math.sin(v / 50 + i) * 100);

                        return (
                            <motion.h2
                                key={i}
                                style={{ x: offsetX }}
                                whileInView={{ color: "#ffffff" }}
                                initial={{ color: "#414141", }}
                                viewport={{ margin: "-50% 0px -30% 0px" }}
                                className="text-6xl font-bold tracking-wide text-[#414141]"
                            >
                                {word}
                            </motion.h2>
                        );
                    })}
                </div>
                <motion.h2
                    whileInView={{ color: "#ffffff" }}
                    initial={{ color: "#414141", }}
                    viewport={{ margin: "-20% 0px 20% 0px" }}
                    className="text-6xl font-bold tracking-wide text-[#414141]"
                >
                    Tools
                </motion.h2>
            </section>

            <section className="flex w-full items-center mt-100 justify-center overflow-hidden h-[50vh]">


            </section>







        </div>

    )
}


