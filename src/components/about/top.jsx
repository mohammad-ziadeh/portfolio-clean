import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Top() {
    const controls = useAnimation();





    const pinnedElementRef = useRef(null);
    const pinnedElementRef2 = useRef(null);
    const pinnedElementRef3 = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: pinnedElementRef.current,
                pin: true,
                start: "top 450px",
                end: "+=2200",
                markers: false,
            });
            ScrollTrigger.create({
                trigger: pinnedElementRef2.current,
                pin: true,
                start: "top 450px",
                end: "+=2200",
                markers: false,
            });
            ScrollTrigger.create({
                trigger: pinnedElementRef3.current,
                pin: true,
                start: "top 450px",
                end: "+=1800",
                markers: false,
            });
        }, pinnedElementRef, pinnedElementRef2, pinnedElementRef3);

        return () => ctx.revert()
    }, [controls]);





    return (


        <div className="relative min-h-screen mt-100">


            <div className="mt-150"></div>

            <motion.div
                ref={pinnedElementRef}
                whileInView={{ opacity: 1, }}
                initial={{ opacity: 0, x: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ amount: "all" }}
                className="relative top-350 flex justify-end mr-[15%]"

            >
                <p className="text-2xl text-center text-white">If yes then keep scrolling </p>
            </motion.div>
            <div className='flex flex-col gap-100 relative bottom-150 ml-[15%]'>
                <motion.div
                    whileInView={{ opacity: 1, }}
                    initial={{ opacity: 0, x: 0 }}
                    exit={{ opacity: 0 }}
                    viewport={{ amount: "all" }}
                >
                    <img src="/images/lmc/LMC2.webp" alt="" />
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, }}
                    initial={{ opacity: 0, x: 0 }}
                    exit={{ opacity: 0 }}
                    viewport={{ amount: "all" }}
                >
                    <img src="/images/lmc/LMC2.webp" alt="" />
                </motion.div>
            </div>



            <motion.div
                ref={pinnedElementRef2}
                whileInView={{ opacity: 1, }}
                initial={{ opacity: 0, x: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ amount: "all" }}

                className="relative top-50 mt-20 flex justify-start ml-[15%]"
            >
                <p className="text-2xl text-center text-white">dfhgfhfhfghhf </p>
            </motion.div>
            <div className='flex justify-end '>
                <div className='flex flex-col gap-100 bottom-350 relative mr-[15%]'>
                    <motion.div
                        whileInView={{ opacity: 1, }}
                        initial={{ opacity: 0, x: 0 }}
                        exit={{ opacity: 0 }}
                        viewport={{ amount: "all" }}
                    >
                        <img src="/images/lmc/LMC2.webp" alt="" />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, }}
                        initial={{ opacity: 0, x: 0 }}
                        exit={{ opacity: 0 }}
                        viewport={{ amount: "all" }}
                    >
                        <img src="/images/lmc/LMC2.webp" alt="" />
                    </motion.div>
                </div>
            </div>

            <motion.div
                ref={pinnedElementRef3}
                whileInView={{ opacity: 1, }}
                initial={{ opacity: 0, x: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ amount: "all" }}

                className="relative bottom-250 mt-20"
            >
                <p className="text-2xl text-center text-white">no its ok u can keep doing it </p>
            </motion.div>


            <div className="h-[150vh]  ">


            </div>

        </div>

    )
}



