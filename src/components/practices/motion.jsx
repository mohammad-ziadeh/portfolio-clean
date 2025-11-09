import React, { useRef, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";


export default function Motion() {
    const controls = useAnimation();

    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);


    const { scrollYProgress: scroll1 } = useScroll({
        target: container1,
        offset: ["start start", "end end"],
    });

    const { scrollYProgress: scroll2 } = useScroll({
        target: container2,
        offset: ["start start", "end end"],
    });


    const scale1 = useTransform(scroll1, [0, 1], [1, 7]);
    const scale2 = useTransform(scroll2, [0, 1], [1, 500]);


    const { scrollYProgress: scrollYProgress } = useScroll({
        target: container3,
        offset: ["start start", "end end"],
    });
    const marginLeft1 = useTransform(scrollYProgress, [0, 1], ["125px", "500px"]);




    return (


        <div className="relative min-h-screen mt-100">

            <h2 className="text-2xl text-center text-white">Practicing motion: useScroll</h2>





            <div style={{ height: '200vh', background: 'black', color: "white" }}></div>


            {/* <div className='flex justify-center h-[200vh] overflow-hidden'>
                <div ref={pinnedElementRef3}>

                    <motion.h2 transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        animate={controls} className='text-center  text-5xl text-white '>
                        T

                    </motion.h2>


                </div>
            </div> */}



            <section className="flex h-full w-full items-center justify-center" ref={container1}>
                <motion.div
                    style={{ scale: scale1 }}
                    className="relative top-50 w-[15%] h-[15%]"
                >
                    <div className="bg-yellow-50 w-70 h-70 m-auto"></div>
                </motion.div>
            </section>

            <section className="flex w-full items-center mt-100 justify-center overflow-hidden h-[200vh]" ref={container2}>
                <motion.h2
                    style={{ scale: scale2 }}
                    transition={{ type: "spring", stiffness: 40, damping: 26 }}

                    className="relative text-3xl bottom-100 text-white "
                >
                    W
                    <img src="images\tri.png" alt="" className=' relative w-3 bottom-4 -z-16 left-2 h-3' />
                </motion.h2>

            </section>







            <div className="h-[100vh]  ">

                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0, x: 0 }}
                    exit={{ opacity: 0 }}
                    drag whileDrag={{ scale: 0.9 }}
                    dragConstraints={{ left: 0, right: 900, top: 0, bottom: 500 }}

                    className="relative top-50 w-[15%] h-[15%]"
                >
                    <div className="bg-yellow-50 w-70 h-70 m-auto"></div>
                </motion.div>
            </div>




            <section className="flex w-full items-center justify-center overflow-hidden h-[200vh]" ref={container3}>

                <motion.h2
                    style={{ marginLeft: marginLeft1 }}
                    className="relative text-white text-3xl"
                >
                    hello
                </motion.h2>
            </section>
        </div>

    )
}


